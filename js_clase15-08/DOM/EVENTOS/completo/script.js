const Titulo = document.querySelector("#Titulo");
const Formulario = document.querySelector("#FormTarea");
const Input = document.querySelector("#inputTarea");
const botonAgregar = document.querySelector("#botonAgregar");
const lista = document.querySelector("#listaTareas");
const mensaje = document.querySelector("#Mensaje");
const Contador = document.querySelector("Contador");

Titulo.textContent = "To-Do List con JavaScript";

Input.addEventListener("input", function(){
    const cantidad = event.target.value.lenght;
    mensaje.textContent =         `Caracteres escritos: ${cantidad}`;
});

Input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        console.log("Se presionó Enter");
    }    
});

Formulario.addEventListener("submit", function (pevent) {
    //Evitar recarga
    event.preventDefault();

    //obtener información.
    const texto = Input.value.trim();

    //validar
    if (texto === "") {
        mensaje.textContent = "No puede agregar Tarea Vacia.";
        
        return;
    }

    //Crear elemento
    const item = document.createElement("li");

    //Agregar texto
    item.textContent = texto;

    //Evento click de la tabla
    item.addEventListener("click", function (event) {
        console.log("Elemento:", event.target);
        console.log("Evento:", event.type);      
        
        item.classList.toggle("completada");
    });

    // boton eliminar
const botonEliminar =
        document.createElement("button");

    botonEliminar.textContent = "Eliminar";


    // ============================
    // EVENTO CLICK DEL BOTÓN
    // ============================

    botonEliminar.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            item.remove();

            actualizarContador();
        }
    );


    // Agregar botón al item
    item.appendChild(botonEliminar);

    // Agregar item a la lista
    lista.appendChild(item);

    // Limpiar input
    input.value = "";

    mensaje.textContent = "";

    // Actualizar contador
    actualizarContador();
});


// ================================
// CONTADOR
// ================================

function actualizarContador() {

    const cantidad =
        lista.querySelectorAll("li").length;

    contador.textContent =
        `Tareas pendientes: ${cantidad}`;
}