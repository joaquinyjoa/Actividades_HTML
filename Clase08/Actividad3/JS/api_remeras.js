document.addEventListener("DOMContentLoaded", async () => {
    const url = `https://fakestoreapi.com/products`;

    try {
        const res = await manejarFetchSimple(url);
        const resJSON = await res.json();

        const contenedor = document.querySelector("#card");
        contenedor.innerHTML = ""; // Limpiar el contenido antes de añadir nuevas cartas

        resJSON.forEach((remera, index) => {
            contenedor.innerHTML += `
            <div class="card" style="width: 18rem;" id="card-${remera.id}">
                <img src="${remera.image}" class="card-img-top" alt="Imagen del producto">
                <div class="card-body">
                    <h5 class="card-title">${remera.title}</h5>
                    <a href="#" class="btn btn-primary" id="detalle-${index}" data-id="${remera.id}">Ver detalle</a>
                    <div class="detalles" id="detalles-${remera.id}" style="display: none;">
                        <p><strong>Descripción:</strong> ${remera.description}</p>
                        <p><strong>Precio:</strong> $${remera.price}</p>
                        <p><strong>Categoría:</strong> ${remera.category}</p>
                    </div>
                </div>
            </div>
            `;
        });

        // Manejador de eventos para los botones "Ver detalle"
        document.querySelectorAll('.btn-primary').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.target.getAttribute('data-id');
                toggleDetalles(productId);
            });
        });

    } catch (err) {
        alert(err);
    }
});

// Función para mostrar/ocultar los detalles de la carta
function toggleDetalles(productId) {
    const detalles = document.querySelector(`#detalles-${productId}`);
    
    // Toggle de visibilidad: si está visible, lo ocultamos, si está oculto lo mostramos
    if (detalles.style.display === "none") {
        detalles.style.display = "block";
    } else {
        detalles.style.display = "none";
    }
}
