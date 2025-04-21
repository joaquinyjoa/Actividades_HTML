/*
[C.10] Música
Definir un array nombrado estilos, con los ítems “Jazz” y “Blues”. Se pide:
1. Agregar “Rock-n-Roll” al final.
2. Reemplazar el valor del medio por “Heavy Metal”. El código para encontrar el valor medio debe
funcionar con cualquier array de longitud impar.
3. Quitar el primer valor del array.
4. Anteponer Rap y Reggae al array.
Mostrar el array durante el proceso, debería quedar así:
Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Heavy Metal, Rock-n-Roll
Heavy Metal, Rock-n-Roll
Rap, Reggae, Heavy Metal, Rock-n-Roll

Nota: Utilizar console.log()
*/
const estilos = ["Jazz", "Blues"];
console.log(estilos.join(", "));//une los elementos con un caracter

//1 - Agregar “Rock-n-Roll” al final.
const rock = "Rock-n-Roll";
const estilosConRock = [...estilos, rock];
console.log(estilosConRock.join(", "));
//2 - Reemplazar el valor del medio por “Heavy Metal”. El código para encontrar el valor medio debe
//funcionar con cualquier array de longitud impar.
const heavy = "Heavy Metal";
estilos.pop();
const estilosConHeavyMetal = [...estilos, heavy, rock];
console.log(estilosConHeavyMetal.join(", "));
//3 - Quitar el primer valor del array.
estilos.pop();
estilos.pop();
estilos.unshift(rock, heavy);
console.log(estilos.join(", "));
//4 - Anteponer Rap y Reggae al array.
const rap = "Rap";
const reggae = "Reggae";
estilos.pop();
estilos.pop();
estilos.unshift(rap,reggae,rock, heavy);
console.log(estilos.join(", "));
