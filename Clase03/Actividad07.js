/*
[C.07] Trunca la cadenita
Crear una función truncate(cadena, longitud) que verifique la longitud de cadena y, si excede longitud,
reemplaza el final de cadena con el carácter de puntos suspensivos "...", para hacer su longitud igual al
parámetro longitud.
El resultado de la función debe ser la cadena truncada (si es necesario).
*/

function trucate(cadena = "", longitud)
{
    let mensaje = "";
    if (cadena.length <= longitud)
    {
        mensaje = cadena;
    }
    else
    {
        mensaje = cadena.slice(0, longitud) + "..." ;
    }
    return mensaje;
}

let truncar = trucate("aaaaaa", 2)

console.log(truncar)