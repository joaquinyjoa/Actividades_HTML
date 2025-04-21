/*
[C.11] ¿Son todas mayúsculas, minúsculas o qué?
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A
partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo
por minúsculas o por una mezcla de ambas.
*/
function analizarCadena(cadena = "")
{
    const mayuscula = cadena.toLocaleUpperCase();
    const minúsculas = cadena.toLocaleLowerCase();
    if (cadena === "")
    {
        console.log("No se pasó ninguna cadena.");
    }
    else
    {
        if (cadena === mayuscula)
        {
            console.log("Esta formada por solo mayusculas");
        }
        else if (cadena === minúsculas)
        {
            console.log("Esta formada por solo minusculas");
        }
        else
        {
            console.log("Esta formada por minuscula/s y mayuscula/s");
        }
    }
}

console.log(analizarCadena("hoLa"))