let fecha = "23-03-2001";


function mostrarSignoZodiacal(cadena = "") {
    let partes = cadena.split("-");

    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]);
    let año = parseInt(partes[2]); // no lo usamos, pero lo podés guardar

    let signo = "";

    switch (mes) {
        case 1:
            signo = dia <= 19 ? "Capricornio" : "Acuario";
            break;
        case 2:
            signo = dia <= 18 ? "Acuario" : "Piscis";
            break;
        case 3:
            signo = dia <= 20 ? "Piscis" : "Aries";
            break;
        case 4:
            signo = dia <= 19 ? "Aries" : "Tauro";
            break;
        case 5:
            signo = dia <= 20 ? "Tauro" : "Géminis";
            break;
        case 6:
            signo = dia <= 20 ? "Géminis" : "Cáncer";
            break;
        case 7:
            signo = dia <= 22 ? "Cáncer" : "Leo";
            break;
        case 8:
            signo = dia <= 22 ? "Leo" : "Virgo";
            break;
        case 9:
            signo = dia <= 22 ? "Virgo" : "Libra";
            break;
        case 10:
            signo = dia <= 22 ? "Libra" : "Escorpio";
            break;
        case 11:
            signo = dia <= 21 ? "Escorpio" : "Sagitario";
            break;
        case 12:
            signo = dia <= 21 ? "Sagitario" : "Capricornio";
            break;
        default:
            signo = "Fecha inválida";
            break;
    }

    console.log(`Tu signo es ${signo}`);
}
