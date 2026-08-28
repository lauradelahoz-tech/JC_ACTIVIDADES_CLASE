const nombre = document.getElementById("nombre")
const saludar = document.getElementById("saludar")
const resultado = document.getElementById("resultado")


saludar.addEventListener("click", function () {
    if (nombre.value === "") {
        resultado.textContent = "Por favor ingrese un nombre"
    } else{
    resultado.textContent = "Hola " + nombre.value

    }
})

