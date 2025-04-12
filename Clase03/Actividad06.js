/*
Guardar su nombre y apellido en dos variables distintas. Dichas variables serán pasadas como parámetro de
la función mostrarNombreApellido, que mostrará el apellido en mayúscula y el nombre solo con la primera
letra en mayúsculas y el resto en minúsculas.
El apellido y el nombre se mostrarán separados por una coma (,).
Nota: Utilizar console.log()
*/

let nombre = "joaquin";
let apellido = "alfredo greco"

function MostrarNombreApellido(nombre = "", apellido = "") 
{
    let mensaje = `${apellido.toUpperCase()}, ${nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()}`;  
    return mensaje;  
}

console.log(MostrarNombreApellido(nombre,apellido));
