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

        document.querySelector("#listado").innerHTML = armarListadoHTML(resJSON);



    } catch (err) {

        alert(err);
    }    

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
        <th>ID<th>
        <th>NOMBRE<th>
        <th>APELLIDO<th>
        <th>EMAIL<th>
        <th>AVATAR<th>
        `;

    params.data.forEach(usuario =>{
        let fila = tabla.insertRow()
        fila.innerHTML = `
        <td>${usuario.id}<td>
        <td>${usuario.first_name}<td>
        <td>${usuario.last_name}<td>
        <td>${usuario.email}<td>
        <td><img src="${usuario.avatar}" alt="Imagen del usuario"><td>
        `;
    });

    return tabla.outerHTML;//retorna la tabla con el contenido y las etiquetas
}