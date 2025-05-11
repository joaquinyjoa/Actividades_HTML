document.addEventListener("DOMContentLoaded", () => {

    listarUsuarios();

});

async function listarUsuarios() {

    try {
        
        const opciones = {
            method: "GET",
            headers: { "x-api-key": "reqres-free-v1" },
        };

        let res = await manejadorFetch(API_URL + `users`, opciones);

        let resJSON = await res.json();

        console.log(resJSON);

        let cantidadAMostrar = 1;

        document.querySelector("#listado").innerHTML = armarListadoHTML(resJSON);

        document.querySelector("#avanzar").addEventListener("click", () =>{
            
            if (cantidadAMostrar > 1)
            {
                cantidadAMostrar--;
            }

            document.querySelector("#listado").innerHTML = avanzarYRetroceder(resJSON, cantidadAMostrar);
          
        });

        document.querySelector("#retroceder").addEventListener("click", () =>{
            
            if (cantidadAMostrar < resJSON.data.length)
            {
                cantidadAMostrar++;
            }

            document.querySelector("#listado").innerHTML = avanzarYRetroceder(resJSON, cantidadAMostrar);
            
        });

        document.querySelectorAll(".links").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const id = parseInt(link.dataset.id);
                cargarFormulario(id, resJSON);
            });
        });

    } catch (err) {

        alert(err);
    }    

}

function avanzarYRetroceder(params, cantidadAMostrar){
    const tabla = document.createElement("table");
    tabla.border = 2

    const encabezado = tabla.insertRow();
     encabezado.innerHTML = `
        <th>ID</th>
        <th>NOMBRE</th>
        <th>APELLIDO</th>
        <th>EMAIL</th>
        <th>AVATAR</th>
        `;

    for (let i = 0; i <= params.data.length - cantidadAMostrar; i++) {
        let fila = tabla.insertRow()
        fila.innerHTML = `
        <td><a href="#" class="links" data-id="${params.data[i].id}">Informacion</a></td>
        <td>${params.data[i].first_name}</td>
        <td>${params.data[i].last_name}</td>
        <td>${params.data[i].email}</td>
        <td><img src="${params.data[i].avatar}" alt="Imagen del usuario"></td>
        `;
    }
   
    agregarListenersLinks(); 

    return tabla.outerHTML;
}

function armarListadoHTML(params) {
    
    //generar el listado dinámico
    //params.data[{id, email, first_name, last_name, avatar}]
    //Encabezado
    //ID - CORREO - NOMBRE - APELLIDO - AVATAR
    
    const tabla = document.createElement("table");
    tabla.border = 2

    const encabezado = tabla.insertRow();
     encabezado.innerHTML = `
        <th>ID</th>
        <th>NOMBRE</th>
        <th>APELLIDO</th>
        <th>EMAIL</th>
        <th>AVATAR</th>
        `;

    params.data.forEach(usuario =>{
        let fila = tabla.insertRow()
        fila.innerHTML = `
        <td><a href="#" class="links" data-id="${usuario.id}">Informacion</a></td>
        <td>${usuario.first_name}</td>
        <td>${usuario.last_name}</td>
        <td>${usuario.email}</td>
        <td><img src="${usuario.avatar}" alt="Imagen del usuario"></td>
        `;
    });

    return tabla.outerHTML;//retorna la tabla con el contenido y las etiquetas
}

function cargarFormulario(id, params) {
    const usuarioId = params.data.filter(usuario => usuario.id === id);

    const nombre = document.querySelector("#nombre");

    const apellido = document.querySelector("#apellido");

    const email = document.querySelector("#email");

    const avatar = document.querySelector("#avatar")

    usuarioId.forEach(u => {
        nombre.value = u.first_name;
        apellido.value = u.last_name;
        email.value = u.email;
        avatar.src = u.avatar;
    });
}

function agregarListenersLinks() {
    document.querySelectorAll(".links").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const id = parseInt(link.dataset.id);
            cargarFormulario(id, resJSON);
        });
    });
}