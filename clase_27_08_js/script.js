const titulo =  document.getElementById("titulo")
const mensaje =  document.getElementById("mensaje")
const boton =  document.getElementById("boton")
const cambiar =  document.getElementById("cambiar")
const quitar =  document.getElementById("quitar")


boton.addEventListener("click", function(){
    mensaje.textContent = "Hiciste clic en el boton"
})


// VARIABLE + DOM
let contador =0
boton.addEventListener("click", function(){
    contador +=1
    mensaje.textContent = "Hasz hecho clic " + contador + "veces"
})

//modificar estilos
cambiar.addEventListener("click", function () {
    titulo.style.color = "red"
})


cambiar.addEventListener("click", function () {
titulo.classList.add("activo")    
})


quitar.addEventListener("click", function () {
    titulo.classList.remove("activo")    

})
const informacion = document.getElementById("informacion")
const mostrar = document.getElementById("mostrar")
const ocultar = document.getElementById("ocultar")

ocultar.addEventListener("click", function(){
    informacion.style.display = "none"
})


mostrar.addEventListener("click", function(){
    informacion.style.display = "block"
})


//leer info del usuario
const nombre = document.getElementById("nombre")
const saludar = document.getElementById("saludar")
const resultado = document.getElementById("resultado")


saludar.addEventListener("click", function () {
    if (nombre.value === "") {
        resultado.textContent = "Por favor ingrese un nombre"
    } else{
    resultado.textContent = "Hola ", + nombre.value

    }
})

