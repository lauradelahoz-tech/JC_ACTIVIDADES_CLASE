const boton = document.getElementById("cargar")
const contenedor = document.getElementById("usuarios")



boton.addEventListener("click", function () {
    contenedor.textContent = "Hiciste click"
})


// asincronia 
//mientras espero a que una tarea termine voy hacien algo más
console.log("pongo el pan")

//ejecuta esta funcion despues de x cantidad de milisegundos es el significado de setTimeout
setTimeout(function () {
    console.log("la carne está lista")
}, 5000)


console.log("pongo la carne")



//event loop


//promesas
// .then .catch  .finally 

/* tiene unos estados:
PENDIENTE -> TODAVIA NO WE SABE
CUMPLIDA -> salió bien -> resolve()
RECHAZADA -> salió mal -> reject */


const promesa = new Promise(function (resolve, reject) {
    const exito = true

    if (exito) { resolve("todo salió bien" )
        
    } else{
        reject("todo salió mal")
    }
})
//.then muestra lo que pasa al cumplirse la promesa, significa entonces
promesa
.then(function (resultado) {
    console.log("resultado")
}).catch(function (error) {
    console.log(error)
}).finally(function () {
    console.log("la promesa temrinó")
})






const promesa2 = new Promise(function (resolve, reject) {

    setTimeout(function(){
        const ecisto = true

        if (exito) {
            resolve("pedido entregado")
        } else{
            reject("el resturante cerró")
        }
    }, 5000);
    
})
//.then muestra lo que pasa al cumplirse la promesa, significa entonces


// async// await

async function servirPedido() {

    try{
        const resultado = await promesa
        console.log(resultado)
    } catch(error) {
        console.log("ocurrió un error ", error  )
    }
     const resultado = await promesa;

    console.log(resultado)
}


servirPedido();

// API - aplication programming interface
//es una puerta con reglas, que un sistema abre para que otroa programas pidan info

/*url
dirrección de algo en internet
http://jsonplacenholder.typicode.com.users
*/
fetch


    
