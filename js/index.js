document.addEventListener("DOMContentLoaded", function() {
    var miBoton = document.getElementById("miBoton");

    miBoton.addEventListener("click", function() {
        // Abre una nueva ventana emergente para el formulario
        var ventanaEmergente = window.open("", "VentanaInicioSesion", "width=500,height=450");

        // Establece el título de la ventana emergente a "Registrarse"
        ventanaEmergente.document.title = "Registrarse";

        // Estilo para centrar el contenido
        var estiloCentrado = `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            text-align: center;
        `;

        // Establece el estilo centrado en el cuerpo de la ventana emergente
        ventanaEmergente.document.body.style = estiloCentrado;

        // Ajusta la posición vertical de los elementos
        var margenSuperior = "20px"; // Puedes ajustar esta cantidad según tus necesidades

        // Agrega el título "Registrar" arriba del título de "Correo Electrónico"
        var tituloRegistrar = ventanaEmergente.document.createElement("h1");
        tituloRegistrar.textContent = "Registrarse";
        ventanaEmergente.document.body.appendChild(tituloRegistrar);

        // Función para crear una sección de título e input
        function crearSeccionTituloInput(tituloText, placeholderText) {
            var seccion = ventanaEmergente.document.createElement("div");
            seccion.style.display = "flex";
            seccion.style.flexDirection = "row";
            seccion.style.alignItems = "center";
            seccion.style.marginTop = margenSuperior;

            var titulo = ventanaEmergente.document.createElement("h2");
            titulo.textContent = tituloText;
            titulo.style.marginRight = "10px"; // Espacio entre título e input

            var input = ventanaEmergente.document.createElement("input");
            input.type = "text";
            input.placeholder = placeholderText;

            seccion.appendChild(titulo);
            seccion.appendChild(input);

            return { seccion, input };
        }

        // Crea secciones de título e input
        var correoSection = crearSeccionTituloInput("Correo Electrónico:", "Correo Electrónico");
        var passwordSection = crearSeccionTituloInput("Contraseña:", "Contraseña");
        var confirmPasswordSection = crearSeccionTituloInput("Confirmar Contraseña:", "Confirmar Contraseña");

        var submitButton = ventanaEmergente.document.createElement("button");
        submitButton.innerHTML = "Registrarse";
        submitButton.style.marginTop = margenSuperior;

        // Cambia el título del botón de "Iniciar Sesión" a "Registrarse"
        submitButton.innerHTML = "Registrarse";

        // Agrega las secciones de título e input al cuerpo de la ventana emergente
        ventanaEmergente.document.body.appendChild(correoSection.seccion);
        ventanaEmergente.document.body.appendChild(passwordSection.seccion);
        ventanaEmergente.document.body.appendChild(confirmPasswordSection.seccion);
        ventanaEmergente.document.body.appendChild(submitButton);

        // Agrega un evento para mostrar la alerta en la misma ventana emergente al hacer clic en el botón de "Registrarse"
        submitButton.addEventListener("click", function() {
            // Realiza la validación antes de mostrar la alerta
            var correo = correoSection.input.value;
            var password = passwordSection.input.value;
            var confirmPassword = confirmPasswordSection.input.value;

            if (correo && password && confirmPassword) {
                var mensaje = "Te enviaremos la informacion del viaje por correo, Gracias!";
                ventanaEmergente.alert(mensaje);
            } else {
                ventanaEmergente.alert("Por favor, complete todos los campos antes de registrarse.");
            }
        });
    });
});
