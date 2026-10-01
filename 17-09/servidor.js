const http = require("http")
const libro = [
        {id: 1, nombre: "Libro + café", precio: 70000},
        {id: 2, nombre: "Libro", precio: 20000}
]
function generarHtml(items =[]) {
    const filas = items.map((p)=> `<li>${p.nombre} - $${p.precio}</li>`)
    .join("")
    return `
    <html>
        <body>
        <h1> Nuestros servicios</h1>
        <ul> ${filas}</ul>
        </body>        
    </html>`
}


const servidor = http.createServer((req, res)=>{
    
    console.log("alguien pidió algo", req.url)

    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html; charset=utf-8"  })
        res.end("<h1> INICIO </h1> <P> BIENVENIDO, elija la opción que guste</P>")
    } else if(req.url === "/nosotros"){
         res.writeHead(200, { "content-type": "text/html; charset=utf-8"  })
         res.end("<h1> NOSOTROS </h1> <p> aquí va la historia </p>")
    } else if( req.url === "/servicios"){
        //const filas = productos.map((p) => `<li>${p.nombre} - $${p.precio}</li>`)
        //el join funciona como separador 
        //.join("")

        res.writeHead(200, { "content-type": "text/html; charset=utf-8"  })
        res.end(generarHtml(libro))   
    } else {
        res.writeHead(200, {"content-type": "text/html; charset=utf-8"})
        res.end("<h1> pagina no encontrada </h1>")
    }
   
})

servidor.listen(3000, ()=> {
    console.log("servidor en http://localhost:3000")
})