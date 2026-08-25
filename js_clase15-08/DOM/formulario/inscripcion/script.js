const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo");
const curso = document.querySelector("#curso");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input", function(event) {

    console.log("El usuario está escribiendo");

    console.log("Elemento:",
        event.target);

    console.log("Valor:",
    event.target.value);

});

curso.addEventListener("change", function(event) {

    console.log(
        "Curso seleccionado:",
        event.target.value
    );

});

// EVENTO BOTÓN

formulario.addEventListener(
    "submit",
    function(event) {

        // Evitar que el navegador recargue la página
        event.preventDefault();
        
        // Obtener valores
        const nombreUsuario = nombre.value.trim();
        const correoUsuario = correo.value.trim();

        const cursoSeleccionado = curso.value;

        // VALIDACIÓN
        if (nombreUsuario === "") {

            mensaje.textContent = "Debes ingresar tu nombre.";
            return;
        }

        if (correoUsuario === "") {
            mensaje.textContent = "Debes ingresar tu correo.";
            return;
        }

        if (cursoSeleccionado === "") {

            mensaje.textContent = "Debes seleccionar un curso.";
            return;
        }


        // MOSTRAR RESULTADO

            mensaje.textContent =
                `¡Inscripción exitosa, ${nombreUsuario}! ` +
                `Te has inscrito al curso de ${cursoSeleccionado}.`;


        // Limpiar formulario
            formulario.reset();

    }
);
