/*
[D.01] Producto JSON
Crear, dentro del archivo producto.js, un JSON para representar información acerca de un producto (código
de barra, nombre, precio y fecha de vencimiento). Asignarle valores a cada una de sus propiedades.
Validar su buen diseño ingresando en http://jsonviewer.stack.hu/.
Una vez validado el JSON, mostrar todas sus propiedades por consola.
*/
let producto = {
    "Código de barra": 7791234567890,
    "nombre": "Yerba Mate",
    "Precio": 1499.99,
    "Fecha de vencimiento": "2025-10-15"
  };
let productos = JSON.stringify(producto);
console.log(productos);

let deserializarProductos = JSON.parse(productos);
console.log(deserializarProductos);