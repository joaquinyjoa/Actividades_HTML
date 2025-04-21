/*
[C.13] Se me prendió fuego el cerebro
Definir la función obtenerSumaMaxima(arr). Recibirá cómo parámetro un array de números, por ejemplo:
[1, -2, 3, 4, -9, 6].
La tarea es encontrar, dentro de ’arr’, el subarray de elementos contiguos que tenga la suma máxima.
Por ejemplo:
obtenerSumaMaxima([-1, 2, 3, -9]) //5
obtenerSumaMaxima([2, -1, 2, 3, -9]) //6
obtenerSumaMaxima([-1, 2, 3, -9, 11]) //11
obtenerSumaMaxima([-2, -1, 1, 2]) //3
obtenerSumaMaxima([100, -9, 2, -3, 5]) //100
*/

function obtenerSumaMaxima(params)
{
    let maxSuma = params[0]; // empezamos con el primer elemento (por si todos son negativos)

    for (let i = 0; i < params.length; i++) {
        let sumaActual = 0;
        for (let j = i; j < params.length; j++) {
            sumaActual += params[j];
            if (sumaActual > maxSuma) {
                maxSuma = sumaActual;
            }
            if (maxSuma < 0)
            {
                sumaActual = 0
            }
        }
    }

    return maxSuma;
}

console.log(obtenerSumaMaxima([-1, 2, 3, -9]));        // 5
console.log(obtenerSumaMaxima([2, -1, 2, 3, -9]));      // 6
console.log(obtenerSumaMaxima([-1, 2, 3, -9, 11]));     // 11
console.log(obtenerSumaMaxima([-2, -1, 1, 2]));         // 3
console.log(obtenerSumaMaxima([100, -9, 2, -3, 5]));    // 100
console.log(obtenerSumaMaxima([-1, -2, -3]))