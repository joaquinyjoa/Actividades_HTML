/*
[C.12] Palíndro qué?
Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo,
es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural". 
*/

function verificarCadena(cadena = "")
{
    const letras = [...cadena];
    const palindromo = [];
    let bandera;
    for (let i = letras.length - 1; i >= 0; i--)
    {        
        palindromo.push(letras[i]);
    }

    for (let j = 0; j < palindromo.length; j++)
        {
            if (palindromo[j] === letras[j])
            {
                bandera = true;
            }
            else
            {
                bandera = false;
            }
            
        }

    return bandera;
}

if (verificarCadena("a"))
{
    console.log("es polidromo");
}
else
{
    console.log("no es polidromo");
}