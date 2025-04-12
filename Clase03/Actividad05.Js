/*
[C.05] Repetime la palabrita
Realizar una función que reciba un parámetro requerido de tipo numérico y otro opcional de tipo cadena. Si el
segundo parámetro es recibido, se mostrará tantas veces por consola, como lo indique el primer parámetro.
En caso de no recibir el segundo parámetro, se mostrará el valor inverso del primer parámetro.
Nota: Utilizar console.log()
*/

function MostrarCadena(cantidad = Number, cadena)
{
    let mensaje;
    if ( cadena.length > 0)
    {
        for (let index = 0; index < cantidad; index++) 
        {
            mensaje = cadena;
            console.log(mensaje)
        }
    }   
    else
    {
        mensaje = `-${cantidad}`;
    }
    return "";
}

console.log(MostrarCadena(5,"aaa"));