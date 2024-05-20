/**
 * Autor: Jesus fernando carvajal
 * Ejercio: Nomina de persona
 * Fecha creacion: 15 de mayo de 2024
 */

// variables de entorno
let iteracion1; 
let iteracion2;
let sueldo;
let resultado = 0;
let persona;
let salarioM = 1300000;
let retencioG;
let salarioFinial = 0;

// variables de ejecucion

// funciones de desarrollo
function calSueldo(valorDia, diasTrabajados){
    sueldo = valorDia * diasTrabajados;
    return sueldo;
};

function pretaciones(sueldoP, porcentaje){
    resultado = sueldo * porcentaje;
    return resultado;
}

function subTransporte(sueldoP){
    if(sueldoP <= salarioM*2){
        resultado = 114000; 
    }else{
        resultado = 0;
    }

    return resultado;
}

function abonosNomina(salarioP, estratoP){
    if(salarioP <= salarioM && (estratoP == 1 || estratoP == 2)){
        resultado = 100000;
    }else{
        resultado = 0;
    }
    return resultado;
}

function retencionNomina(salarioP, estratoP){
    retencioG = 0;
    if(salarioP >= salarioM*8 && estratoP == 6){
        retencioG = 0.05;
    }
    else if(salarioP > salarioM*4){
        retencioG = 0.03;
    }
    else if(salarioP > salarioM*6){
        retencioG = 0.04;
    }else{
        retencioG = 0;
    }
    resultado = salarioP * retencioG;

    return resultado;
}


// data de la nomina personas
let nomina = [
    {
        tipoIdentificacion: 'T.I',
        numeroIdentificacion: 1076503110,
        nombres: 'Jesus Fernando',
        apellidos: 'Carvajal Anacona',
        edad: 17,
        estrato: 1,
        valorDia: 3000,
        diasTrabajados: 30,
    },
    {
        tipoIdentificacion: 'T.I',
        numeroIdentificacion: 1087653575,
        nombres: 'Juan Manuel',
        apellidos: 'Gutierrez',
        edad: 16,
        estrato: 1,
        valorDia: 500000,
        diasTrabajados: 30,
       
    },
    {
        tipoIdentificacion: 'C.E',
        numeroIdentificacion: 1076503110,
        nombres: 'Juan Felipes',
        apellidos: 'Guerrero',
        edad: 25,
        estrato: 1,
        valorDia: 800000,
        diasTrabajados: 30,
       
    },
];

let pagoNomina = [];

nomina.forEach(data=>{
    // persona = {};
    persona = {
        nombre: data.nombres,
        apellidos: data.apellidos,
        edad: data.edad,
        estratoP: data.estrato,
        valorDias: data.valorDia,
        diasTrabajados: data.diasTrabajados,
        salario: calSueldo(data.valorDia, data.diasTrabajados)
    };

    persona.salud= pretaciones(persona.salario, 0.12),
    persona.pension= pretaciones(persona.salario, 0.13),
    persona.arl= pretaciones(persona.salario, 0.052),
    persona.transporte= subTransporte(persona.salario),
    persona.abonos= abonosNomina(persona.salario, persona.estratoP),
    persona.retencion= retencionNomina(persona.salario, persona.estratoP)

    salarioFinial = (persona.salario - (persona.arl + persona.salud + persona.pension)) + (persona.transporte + persona.abonos)

    persona.sueldoLibre = salarioFinial;
    pagoNomina.push(persona);
})


console.log(pagoNomina)
