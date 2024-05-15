/**
 * Autor: Jesus fernando carvajal
 * Ejercio: Nomina de persona
 * Fecha creacion: 15 de mayo de 2024
 */

// variables de entorno
let iteracion1; 
let iteracion2;
let sueldo;
let resultado;
let persona;

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


// data de la nomina personas
let nomina = [
    {
        tipoIdentificacion: 'T.I',
        numeroIdentificacion: 1076503110,
        nombres: 'Jesus Fernando',
        apellidos: 'Carvajal Anacona',
        edad: 17,
        estrato: 1,
        valorDia: 30000,
        diasTrabajados: 30,
    },
    {
        tipoIdentificacion: 'T.i',
        numeroIdentificacion: 1087653575,
        nombres: 'Juan Manuel',
        apellidos: 'Gutierrez',
        edad: 16,
        estrato: 1,
        valorDia: 30000,
        diasTrabajados: 30,
       
    },
    {
        tipoIdentificacion: 'C.E',
        numeroIdentificacion: 1076503110,
        nombres: 'Juan Felipes',
        apellidos: 'Guerrero',
        edad: 25,
        estrato: 1,
        valorDia: 30000,
        diasTrabajados: 30,
       
    },
];

let pagoNomina = [];

nomina.forEach(data=>{
    persona = {
        nombre: data.nombres,
        apellidos: data.apellidos,
        edad: data.edad,
        estrato: data.estrato,
        valorDias: data.valorDia,
        diasTrabajados: data.diasTrabajados,
        salario: calSueldo(data.valorDia, data.diasTrabajados), 
        salud: pretaciones(this.sueldo, 0.12) ,
        pension: pretaciones(this.sueldo, 0.13),
        arl: pretaciones(this.sueldo, 0.052),
        retencion: 0
    };

    pagoNomina.push(persona);
})

console.log(pagoNomina)

// for(iteracion1 = 0; iteracion1<nomina.length; iteracion1++){
//     // for(iteracion2 = 0; iteracion2<nomina[iteracion1].length; iteracion2++){
//         console.log(nomina[iteracion1].nombres);
//     // }
// }

// funciones de apoyo
