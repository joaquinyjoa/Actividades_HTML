/*
[D.03] Mis productos en la Web
Crear el documento HTML productos.html y vincularle el archivo productos.js realizado en el punto anterior.
Nota: Verificar su funcionamiento en la consola del navegador (F12).
*/
let producto = [
  {
    "codigoDeBarra": 7791234567890,
    "nombre": "Yerba Mate",
    "precio": 1499.99,
    "fechaDeVencimiento": "2025-10-15"
  },
  {
    "codigoDeBarra": 7799876543210,
    "nombre": "Dulce de Leche",
    "precio": 899.50,
    "fechaDeVencimiento": "2024-12-01"
  },
  {
    "codigoDeBarra": 7794567891234,
    "nombre": "Alfajor",
    "precio": 350.00,
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
