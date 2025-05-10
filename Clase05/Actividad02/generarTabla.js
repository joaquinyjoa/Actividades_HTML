
if (localStorage.getItem("remeras") != null)
{
    alert("Se recuperaron los remeras");
    let remerasSinJson = JSON.parse(localStorage.getItem("remeras"));
    document.addEventListener("DOMContentLoaded", () => {

        document.querySelector("#btnGenerarTabla").addEventListener("click", () => {
            mostrarTabla(remerasSinJson);
        });
    
    });
}
else
{
    let remerasJson = JSON.stringify(remeras);
    localStorage.setItem("remeras", remerasJson);
    alert("Se agregaron los remeras");
}

function mostrarTabla(remerasSinJson = []) {
    let div = document.getElementById("miDiv");
    if (!div) {
        div = document.createElement("div");
        div.setAttribute("id", "miDiv");
        document.body.appendChild(div);
    }
    div.setAttribute("id", "miDiv");
    let tabla = document.createElement("table");
    tabla.setAttribute("border", "1")
    let tbody = document.createElement("tbody");
    tabla.appendChild(tbody);

    remerasSinJson.forEach(r => {
        let fila = document.createElement("tr");
        tbody.appendChild(fila);

        // Crear una celda por cada dato
        let celdaId = generarCelda(`id: ${r.id}`);
        let celdaSlogan = generarCelda(`Slogan: ${r.slogan}`);
        let celdaSize = generarCelda(`Size: ${r.size}`);
        let celdaPrice = generarCelda(`Price: ${r.price}`);
        let celdaColor = generarCelda(`Color: ${r.color}`);
        let celdaName = generarCelda(`Name: ${r.manofacturer.name}`);
        let celdaLogo = generarCeldaImagen("logo", r.manofacturer.logo);
        let celdaCountry = generarCelda(`Country: ${r.manofacturer.location.country}`);
        let celdaCity = generarCelda(`Country: ${r.manofacturer.location.city}`);

        // Agregar las celdas a la fila
        fila.appendChild(celdaId);
        fila.appendChild(celdaSlogan);
        fila.appendChild(celdaSize);
        fila.appendChild(celdaPrice);
        fila.appendChild(celdaColor);
        fila.appendChild(celdaName);
        fila.appendChild(celdaLogo);
        fila.appendChild(celdaCountry);
        fila.appendChild(celdaCity);

        // Agregar la fila al cuerpo de la tabla
        tbody.appendChild(fila);
    });

    div.appendChild(tabla);
    document.body.appendChild(div);
}

function generarCelda(contenido) {
    let celda = document.createElement("td");
    let texto = document.createTextNode(contenido);
    celda.appendChild(texto); // Añades el texto a la celda
    return celda; // Retornas la celda con el texto agregado
}

function generarCeldaImagen(contenido, valor) 
{
    let celda = document.createElement("td");
    celda.style.display = "flex";
    let img = document.createElement("img");
    img.setAttribute("src", valor);
    let texto = document.createTextNode(`${contenido}: `);
    celda.appendChild(texto); // Añades el texto a la celda
    celda.appendChild(img);
    return celda; // Retornas la celda con el texto agregado
}
