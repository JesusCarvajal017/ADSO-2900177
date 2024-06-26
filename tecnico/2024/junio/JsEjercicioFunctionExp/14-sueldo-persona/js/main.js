/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

let sueldo;
let salarioM = 1300000; 

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

const subTrans = function(psueldo){
    let subTrasporte;

    if(sueldo <= salarioM*2){
        subTrasporte = 114000;
    }
    else{
        subTrasporte = 0;
    }

    return subTrasporte; 
}

const retencion = function(psueldo){
    sueldo = psueldo; 
    let retencion;
    if(sueldo > salarioM*4){
        retencion = sueldo * 0.04;
    }
    else{
        retencion = 0;
    }

    return retencion;
}   

const salario = function(psueldo){
    sueldo = psueldo;
    let salud = prestaciones(sueldo, 0.12);
    let pension = prestaciones(sueldo, 0.16);
    let arl =  prestaciones(sueldo, 0.052);
    let subTrasnp = subTrans(sueldo);
    let ddcion = retencion(sueldo);

    let descuentos = salud + pension + arl;
    let resultado = (sueldo + subTrasnp) - (ddcion + descuentos); 

    return resultado;
}