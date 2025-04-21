/*
[C.09] Arrays con spread
Usando el operador spread (...), crea una copia de un array y agrega un nuevo elemento al final.
Ejemplo:
// Original: const frutas = ["manzana", "banana"];
// Resultado: ["manzana", "banana", "naranja"]
*/

const frutas = ["manzana", "banana"];

const resultado = [...frutas, "naranja"];

console.log(resultado);