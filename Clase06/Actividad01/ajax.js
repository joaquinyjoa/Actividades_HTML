document.addEventListener("DOMContentLoaded", () =>
    {
        const peticion = new XMLHttpRequest();

        peticion.open("GET", "./users.json", true);

        peticion.onreadystatechange = function () 
        {
            document.querySelector("#btnGenerarTabla").addEventListener("click", () =>
                {
                    if (peticion.readyState === 4 && peticion.status === 200)
                        {
                            const usuarios = JSON.parse(peticion.responseText);
                            const contenedor = document.getElementById("usuarios");
                            const tabla = document.createElement("table");
                            tabla.border = 1
                            const encabezado = tabla.insertRow();
                            encabezado.innerHTML = `
                            <th>ID<th>
                            <th>NOMBRE<th>
                            <th>APELLIDO<th>
                            <th>EMAIL<th>
                            `;
                            
                            usuarios.forEach(usuario => {
                                let fila = tabla.insertRow()
                                fila.innerHTML = `
                                <th>${usuario.id}<th>
                                <th>${usuario.nombre}<th>
                                <th>${usuario.apellido}<th>
                                <th>${usuario.email}<th>
                                `;
                            });
                            
                            contenedor.appendChild(tabla);
                        }

                });   
        }

        peticion.send();
    });
