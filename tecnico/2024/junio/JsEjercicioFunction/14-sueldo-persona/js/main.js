/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

let sueldo;
let salarioMin = 1300000;

function formatearNumero(numero) {
    let numeroFormateado = numero.toLocaleString('es-ES');
    return numeroFormateado;
}

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

function rtncionF(sueldoP){
    sueldo = sueldoP; 
    let salarioM = salarioMin;
    let retencion;
    
    if(sueldo > salarioM*4){
        retencion = sueldo * 0.04;
    }
    else{
        retencion = 0;
    }
    
    return retencion;
}

function subTransporte(sueldoP){
    sueldo = sueldoP; 
    let salarioM = salarioMin;
    let sbtrans;
    
    if(sueldo <= salarioM*2){
        sbtrans = 114000;
    }
    else{
        sbtrans = 0;
    }
    
    return sbtrans;
}

function salario(sueldoP){
    sueldo = sueldoP;
    let salud = prestaciones(sueldo, 0.12);
    let pension = prestaciones(sueldo, 0.16);
    let arl = prestaciones(sueldo, 0.052);
    let rtencionS = rtncionF(sueldo);
    let transporte = subTransporte(sueldo);
    let descuentos = salud + pension + arl;
    let ttalSueldo; 

    ttalSueldo = (sueldo - (descuentos + rtencionS)) + transporte; 
    return formatearNumero(ttalSueldo); 
}
