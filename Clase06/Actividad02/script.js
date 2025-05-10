// Obtenemos el formulario y la sección donde se mostrará la respuesta
const formulario = document.getElementById("formulario");
const respuestaDiv = document.getElementById("respuesta");

// Al enviar el formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto de enviar el formulario

    // Obtenemos los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const trabajo = document.getElementById("trabajo").value;

    // Creamos el objeto que vamos a enviar en el cuerpo de la solicitud
    const datos = {
        nombre: nombre,
        trabajo: trabajo
    };

    // Creamos la solicitud AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/users", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Definimos lo que sucederá cuando se reciba la respuesta
    xhr.onload = function() {
        if (xhr.status === 201) {
            // Si la solicitud fue exitosa, procesamos la respuesta
            const data = JSON.parse(xhr.responseText);
            respuestaDiv.innerHTML = `
                <h3>Respuesta de la API:</h3>
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>Trabajo:</strong> ${data.job}</p>
                <p><strong>ID:</strong> ${data.id}</p>
                <p><strong>Fecha de Creación:</strong> ${data.createdAt}</p>
            `;
        } else {
            // Si hay un error, mostramos un mensaje
            respuestaDiv.innerHTML = "<p>Error al enviar la solicitud.</p>";
        }
    };

    // Convertimos los datos a formato JSON y los enviamos
    xhr.send(JSON.stringify(datos));
});
