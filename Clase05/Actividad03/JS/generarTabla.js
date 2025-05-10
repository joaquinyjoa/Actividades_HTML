
if (localStorage.getItem("remeras") != null)
{
    alert("Se recuperaron los remeras");
    let remerasSinJson = JSON.parse(localStorage.getItem("remeras"));
    document.addEventListener("DOMContentLoaded", () => {

        document.querySelector("#btnGenerarTabla").addEventListener("click", () => {
            mostrarTabla(remerasSinJson);
        });
    
    });
    document.addEventListener("DOMContentLoaded", () => {

        document.querySelector("#btnAgregarRemera").addEventListener("click", (e) => {
            e.preventDefault();

            let form = document.forms.item(0);
            const data = new FormData(form);
            let i = remerasSinJson.length - 1;
            const nuevaRemera = {};
            const manofacturer = {};
            const location = {};
            nuevaRemera.id = i + 1;
            nuevaRemera.slogan = data.get("txtSlogan");
            nuevaRemera.price = data.get("txtPrice");
            nuevaRemera.size = data.get("txtSize");
            nuevaRemera.price = data.get("txtPrice");
            nuevaRemera.color = data.get("txtColor");
            manofacturer.name = data.get("txtName");
            manofacturer.logo = data.get("txtLogo");
            location.country = data.get("txtCountry");
            location.city = data.get("txtCity"); 
            manofacturer.location = location;
            nuevaRemera.manofacturer = manofacturer;
            remerasSinJson.push(nuevaRemera);
            let remerasJson = JSON.stringify(remerasSinJson);
            localStorage.setItem("remeras", remerasJson);
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

    let tabla = document.createElement("table");
    tabla.setAttribute("border", "1");

    // Crear encabezado de la tabla
    let thead = document.createElement("thead");
    let filaEncabezado = document.createElement("tr");

    const titulos = ["Id", "Slogan", "Size", "Price", "Color", "Name", "Logo", "Country", "City"];
    titulos.forEach(titulo => {
        let th = document.createElement("th");
        th.textContent = titulo;
        filaEncabezado.appendChild(th);
    });

    thead.appendChild(filaEncabezado);
    tabla.appendChild(thead);

    // Crear cuerpo de la tabla
    let tbody = document.createElement("tbody");
    tabla.appendChild(tbody);

    remerasSinJson.forEach(r => {
        let fila = document.createElement("tr");
        tbody.appendChild(fila);

        // Crear una celda por cada dato
        let celdaId = generarCelda(`${r.id}`);
        let celdaSlogan = generarCelda(`${r.slogan}`);
        let celdaSize = generarCelda(`${r.size}`);
        let celdaPrice = generarCelda(`${r.price}`);
        let celdaColor = generarCelda(`${r.color}`);
        let celdaName = generarCelda(`${r.manofacturer.name}`);
        let celdaLogo = generarCeldaImagen(r.manofacturer.logo);
        let celdaCountry = generarCelda(`${r.manofacturer.location.country}`);
        let celdaCity = generarCelda(`${r.manofacturer.location.city}`);

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

function generarCeldaImagen(valor) 
{
    let celda = document.createElement("td");
    celda.style.display = "flex";
    let img = document.createElement("img");
    img.setAttribute("src", valor);
    celda.appendChild(img);
    return celda; // Retornas la celda con el texto agregado
}
