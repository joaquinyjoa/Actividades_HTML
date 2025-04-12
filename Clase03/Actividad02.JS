/*
[C.02] Mostrando impares
Crear un programa que use un bucle for para mostrar los números del 1 al 20, pero que salte los
números pares (usando continue) y se detenga cuando alcance el número 15 (usando break).
Nota: Utilizar console.log()
*/
for (let index = 0; index < 20; index++)
{
    if (index % 2 != 0)
    {
        console.log(index);
        if (index == 15) 
        {
            break  
        }
        continue
    }    
    
}