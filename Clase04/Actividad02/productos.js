/*
[D.02] Colección de productos JSON
Tomando como punto de partida el ejercicio anterior, diseñar, en el archivo productos.js, una colección de
tres elementos de tipo producto. Asignarle, a cada elemento, valores para cada una de las propiedades.
Validar su buen diseño ingresando en http://jsonviewer.stack.hu/.
Una vez validado el JSON, mostrar todas las propiedades de todos los productos por consola.
*/
let producto = [
  {
    "codigoDeBarra": 7791234567890,
    "nombre": "Yerba Mate",
    "precio": 5,
    "fechaDeVencimiento": "2025-10-15"
  },
  {
    "codigoDeBarra": 7799876543210,
    "nombre": "Dulce de Leche",
    "precio": 899,
    "fechaDeVencimiento": "2024-12-01"
  },
  {
    "codigoDeBarra": 7794567891234,
    "nombre": "Alfajor",
    "precio": 350,
    "fechaDeVencimiento": "2024-08-20"
  }
];

let productosJson = JSON.stringify(producto);
console.log(productosJson);

let productosSinJson = JSON.parse(productosJson);

productosSinJson.forEach(p => 
{
  console.log(`
    Código de barra:        ${p.codigoDeBarra}
    Nombre:                 ${p.nombre}
    Precio:                 $${p.precio}
    Fecha de vencimiento:   ${p.fechaDeVencimiento}
    `);
});
