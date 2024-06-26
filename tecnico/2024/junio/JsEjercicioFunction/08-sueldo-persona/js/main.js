/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/
let sueldo;

function sueldoBruto(valorDiaP, diasTrabajadosP){
    let valorDia = valorDiaP;
    let diasTrabajados = diasTrabajadosP;

    sueldo = valorDia * diasTrabajados;

    return sueldo;
}

function prestaciones(sueldoP, prcntaPrtancion){
    sueldo = sueldoP;
    let prcnPrestacion = prcntaPrtancion;
    let resultado = sueldo * prcnPrestacion;

    return resultado;
}


