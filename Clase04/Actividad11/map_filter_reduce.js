/*
1. Retornar y mostrar todos los nombres de los trabajos de los usuarios.
*/
let trabajosUsuarios = usuarios.map((usuario, index, usuarios) => usuario.trabajo);
trabajosUsuarios.join(", ")
console.log(trabajosUsuarios);

/*
2. Retornar y mostrar todos los nombres de los países de los usuarios.
*/
let paisesUsuarios = usuarios.map((usuario, index, usuarios) => usuario.pais);
paisesUsuarios.join(", ")
console.log(paisesUsuarios);

/*
3. Retornar y mostrar un array de objetos de aquellos usuarios cuyo país sea China.
*/
const pais = "China";
let usuariosChina = usuarios.filter(usuario => usuario.pais == pais);
console.log(usuariosChina);

/*
4. Retornar y mostrar una array de objetos de todos los usuarios menores a 21 años.
*/

const edad = 21;
let usuariosVeitiuno = usuarios.filter(usuario => usuario.edad <= edad);
console.log(usuariosVeitiuno);

/*
5. Retornar y mostrar la cantidad de usuarios con sexo masculino (Male).
*/
let usuariosMasculinos = usuarios.reduce((contador, usuario) =>
    {
        if (usuario.sexo.startsWith("M"))
        {
            contador++;
        }
        return contador
    }
,0)
console.log(`Cantidad de usuarios masculinos: ${usuariosMasculinos}`);

/*
6. Retornar y mostrar la cantidad de usuarios con sexo femenino (Female).
*/
let usuariosFemeninos = usuarios.reduce((contador, usuario) => 
    {
        if (usuario.sexo.startsWith("F"))
        {
            contador ++;
        }

        return contador;
    },0);

console.log(`Cantidad de usuarios femeninos: ${usuariosFemeninos}`);

/*
7. Retornar y mostrar una array de strings (el nombre de los usarios de sexo femenino (Female)).
*/

let arrayNombresFemeninos = usuarios
  .filter(usuario => usuario.sexo.startsWith("F"))
  .map(usuario => usuario.nombre);

console.log(`Nombre de los usuarios femeninos: ${arrayNombresFemeninos}`);

/*
8. Retornar y mostrar una array de strings (el email de los usarios de sexo masculino (Male)).
*/
let arrayNombresMasculinos = usuarios
    .filter(usuario => usuario.sexo.startsWith("M"))
    .map(usuario => usuario.nombre);

console.log(`Nombre de los usuarios masculinos: ${arrayNombresMasculinos}`);

/*
9. Retornar y mostrar un array de objetos que solo contengan los nombres, apellidos y ciudades de
todos los usuarios.
*/
let datos = usuarios.map(usuario => usuario.nombre && usuario.apellido && usuario.ciudad);
console.log(datos);

/*
10. Retornar y mostrar un array de objetos que solo contengan los nombres, apellidos y ciudades de
todos los usuarios masculinos mayores de 35 años.
*/
let datosDos = usuarios
    .filter(usuario => usuario.sexo.startsWith("M"))
    .filter(usuario => usuario.edad > 35)
    .map(usuario => usuario.nombre && usuario.apellido && usuario.ciudad);
console.log(datosDos);

/* 
11. Retornar y mostrar el promedio de edad de todos los usuarios.
*/
let suma = usuarios.reduce((suma, usuario) => 
    {
        suma += usuario.edad;
        return suma;
    },0);

let promedio = suma / usuarios.length;
console.log(promedio)

/*
12. Retornar y mostrar el promedio de edad de los usuarios masculinos.
*/
const masculinos = usuarios.filter(usuario => usuario.sexo.startsWith("M"))
let sumaMasculinos = masculinos.reduce((suma, usuario) => 
    {
        suma += usuario.edad;
        return suma;
    },0)
let promedioMasculino = sumaMasculinos / masculinos.length

console.log(promedioMasculino)
/*
13. Retornar y mostrar el promedio de edad de los usuarios egipcios (Egypt).
*/
const egipto = usuarios.filter(usuario => usuario.pais === "Egypt")
let sumaEgipto = egipto.reduce((suma, usuario) => 
    {
        suma += usuario.edad;
        return suma;
    },0);

let promedioEgipto = sumaEgipto / egipto.length;
console.log(promedioEgipto)