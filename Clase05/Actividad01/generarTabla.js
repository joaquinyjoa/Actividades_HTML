
if (localStorage.getItem("jotasones") != null)
{
    alert("Se recuperaron los jotasones");
    let jotasonesSinJson = JSON.parse(localStorage.getItem("jotasones"));
    document.addEventListener("DOMContentLoaded", () => {

        document.querySelector("#btnGenerarTabla").addEventListener("click", () => {
            mostrarTabla(jotasonesSinJson);
        });
    
    });
}
else
{
    let jotasonesJson = JSON.stringify(jotasones);
    localStorage.setItem("jotasones", jotasonesJson);
    alert("Se agregaron los jotasones");
}

function mostrarTabla(jotasonesSinJson = []) {
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
    jotasonesSinJson.forEach(j => {
        let fila = document.createElement("tr");
        tbody.appendChild(fila);
        // Crear una celda por cada dato
        let celdaId = document.createElement("td");
        let textoCeldaId = document.createTextNode(`id : ${j.id}`);
        celdaId.appendChild(textoCeldaId);

        let celdaValor1 = document.createElement("td");
        let textoCeldaValor1 = document.createTextNode(`valor 1: ${j.valor_1}`);
        celdaValor1.appendChild(textoCeldaValor1);

        let celdaValor2 = document.createElement("td");
        let textoCeldaValor2 = document.createTextNode(`valor 2: ${j.valor_2}`);
        celdaValor2.appendChild(textoCeldaValor2);
        
        // Agregar las celdas a la fila
        fila.appendChild(celdaId);
        fila.appendChild(celdaValor1);
        fila.appendChild(celdaValor2);

        // Agregar la fila al cuerpo de la tabla
        tbody.appendChild(fila);
    });

    div.appendChild(tabla);
    document.body.appendChild(div);
}
