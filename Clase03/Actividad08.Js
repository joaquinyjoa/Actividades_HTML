/*
[C.08] Arrays con rest
Crea una función llamada crearArray que reciba n números como argumentos usando el parámetro rest
(...numeros) y devuelva un array.
EjempoJ:
crearArray(1, 2, 3, 4); // [1, 2, 3, 4]
*/

function crearArray(...numeros)
{
    let array = [];
    for (let i = 1; i <= numeros.length; i++)
    {    
        array.push(i);
    }    
    return array
}

console.log(crearArray(1, 2, 3, 4));