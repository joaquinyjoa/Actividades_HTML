/* 
[C.03] ¿Cuál es el número?
Cree una aplicación que muestre, a través de un Array, los nombres de los meses de un año y el número al
que ese mes corresponde. Utilizar una estructura repetitiva para escribir en la consola.
Nota: Utilizar console.log()
*/
const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

for (let index = 0; index < meses.length ; index++) 
{
    let mes = index + 1;
    console.log(`${mes} - ${meses[index]}\n`)
}
