/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/
let sueldo;

const sueldoBruto = function(valorDiaP, diasTrabajadosP){
    let valorDia = valorDiaP;
    let diasTrabajados = diasTrabajadosP;

    sueldo = valorDia * diasTrabajados;

    return sueldo;
}

const prestaciones = function(sueldoP, prcntaPrtancion){
    sueldo = sueldoP;
    let prcnPrestacion = prcntaPrtancion;
    let resultado = sueldo * prcnPrestacion;

    return resultado;
}


