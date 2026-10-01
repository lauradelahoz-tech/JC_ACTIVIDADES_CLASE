const express = require("express")
const { error } = require("node:console")

const app = express()


// app.use agregar funcionalidades que se ejecutan antes d enosotros colocar la ruta
// spress.json interpreta la info que llega en formato json para poder leerla
//ambas juntas usamos el requore mas adelante
app.use(express.json())

let  productos = [
    // producto 1
    {
        id: 1,
        nombre: "Tomate",
        precio: 3
    },

      // producto 2
    {
        id: 2,
        nombre: "cebolla",
        precio: 3
    },

      // producto 1
    {
        id: 3,
        nombre: "zanahoria",
        precio: 7
    }


 
]

   //ruta que le daremos al usuario para que consuman la api
    //ruta get - obtener todos los productos
    

    // GET / api / productos
    app.get("/api/productos", (request, response) => {
        response.json(productos)
    })

    //rutas dinamicas, RUTA GET - buscar por un id
    app.get("/api/productos/:id", (req, res) => {
        // req.params nos ayuda a que si s epone un dos encontrar lo que buscmaos
        const id = Number(req.params.id)

        const productoEncontrado = productos.find((producto) =>{
            return producto .id === id
        })

        if (!productoEncontrado) {
            error: "producto no encontrado"
        }

        res.json(productoEncontrado)

    })

    

    app.post("/api/productos", (request, response) => {
        const nuevoProducto = {
            id: Date.now(),
            nombre: request.body.nombre,
            precio: Number(request.body.precio)
        }

        if (!nuevoProducto.nombre ) {
            
        }
    })
       