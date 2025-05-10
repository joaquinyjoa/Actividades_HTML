document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById('formulario');

    const mensajeError = {
        nombre: {
            valueMissing: "Es requerido el nombre"
            },

        email: {
            valueMissing: "Es requerido el email",
            typeMismatch: "Ingrese un formato de correo valido"
            },

        clave: {
            valueMissing: "Es requerido la clave",
            tooShort: "Agregue entre 3-8 caracteres"
        },

        pais: {
            valueMissing: "Seleccione un pais"
            },

        terminos: {
            valueMissing: "Se deben aceptar los terminos"
            },
    };

    form.addEventListener('submit', (event) => {

        event.preventDefault();

        const obj = {};
        obj.nombre = document.querySelector("#nombre").value;
        obj.email = document.querySelector("#email").value;
        obj.clave = document.querySelector("#clave").value;
        obj.pais = document.querySelector("#pais").value;

        console.log(obj);

        if (form.checkValidity())
        {
            alert("enviar los datos del formulario...");
        }
        else
        {
            const camposInvalidos = form.querySelectorAll(":invalid");
            console.log("Los campos invalidos son: ");
            console.log(camposInvalidos);

            camposInvalidos.forEach(campo =>{
                console.log(campo.id);
                mostrarError(campo);
                console.log(campo.validity);
            });

            alert("Datos incorrectos");
        }
        
        form.classList.add("was-validated");
    });
    
    function mostrarError(campo){
        let id = campo.id;
        let errorDiv = document.querySelector("#error-" + id);
        console.log("estamos en ");

        for(let error in campo.validity){
            if (campo.validity[error])//me devuelve el nombre(texto) accedes a un elemento asociativo del array
            {
                //aca le metemos texto puro
                errorDiv.textContent = mensajeError[id][error];
            }
        }
    }

});

