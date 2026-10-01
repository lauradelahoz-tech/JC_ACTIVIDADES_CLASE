const boton = document.getElementById("cargar")
const contenedor = document.getElementById("usuarios")
const borrar = document.getElementById("borrar")


boton.addEventListener("click", async function() {
    contenedor.textContent = "Cargando..."
    try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
    }

    const datos = await respuesta.json()

    contenedor.innerHTML = ""
    datos.forEach(function(usuarios){
        contenedor.innerHTML +=`<p>${usuarios.name}- ${usuarios.email} - ${usuarios.address.city} </p>`

    });



})

borrar.addEventListener("click", function () {
    contenedor.innerHTML = ""
})
/*

      .then(response => response.json())
      .then(json => console.log(json))*/