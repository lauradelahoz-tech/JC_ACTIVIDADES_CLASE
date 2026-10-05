const express = require("express")
const app  = express()
app.use(express.json)
//crear rutas
app.get("/", (req, res)  => {
res.send("Mi api ya está activa ")
})

let productos = [
{id:1, nombre:"gaseosa", precio: 3000},
{id:1, nombre:"camiseta", precio: 70000},
{id:1, nombre:"tv", precio: 100000},
]

let siguienteId = 4;

// get todos
app.get("/productos", (res, req) =>{
    //el res.json convierte el array en tipo json
    res.json(productos)
})

//get por id
app.get("/productos/:id", (req, res) => {
    const id = Number(req.params,id)
    const producto = productos.find( p => p.id === id )
    if (!producto) {
        return res.status(404).json({error: "producto no encontrado por id  "})
    }
    res.json(producto)
})


//create post
app.post("/productos", (res, req) =>{
    if (!req.body || !req.body.nombre || typeof req.body.precio !== "number" ) {
    
        return res.status(400).json({error : "debe enviar rpecio y nombre "})
    }
    const nuevoProducto = {
        id: siguienteId,
        nombre: req.body.nombre,
        precio: req.body.precio
    }
    siguienteId ++
    productos.push(nuevoProducto)
    req.status(201).json()

})

//put actualizar todos los datos - patch para 1 campo especidficp 
app.put("/productos/:id", (res,req) => {
    const id  = Number(req.params.id)
    const producto = productos.find(p => p.id === id)

    if (!producto) {
        return res.status(404).json({error: "producto no encontrado por id"})
    }
      if (!req.body || !req.body.nombre || typeof req.body.precio !== "number" ) {
    
        return res.status(400).json({error : "debe enviar rpecio y nombre "})
    }

    producto.nombre = req.body.nombre
    producto.precio = req.body.precio
    res.json(producto)

})


//delete 
app.delete("/productos/:id", (res,req) => {

    const id = Number((req.params.id))
    productos = productos.filter(p => p.id !== id)
     const producto = productos.find(p => p.id === id)

    if (!producto) {
        return res.status(404).json({error: "producto no encontrado por id"})
    }

    res.json({mensaje : "producot eliminado ocrretametne"})
})
    
app.listen(3000, ()=> {
    console.log("servidor en http")
})