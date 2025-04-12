/*
[C.04] ¿Es par o impar?
Realizar una función que reciba un número y que muestre (por consola) un mensaje como el siguiente:
El número 5 es impar, siendo 5 el número recibido como parámetro.
*/
let numero = 6;

function MostrarParidad(numero = Number) 
{
    let mensaje = "";
    if (numero % 2 != 0) 
    {
        mensaje = `El numero ${numero} es impar`;
    }
    else
    {
        mensaje = `El numero ${numero} es par`;
    }
    return mensaje;
}

let paridad = MostrarParidad(numero)

console.log(paridad);