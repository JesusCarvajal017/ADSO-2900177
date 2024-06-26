/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

let edadPersona;

const edad = function(fchaNcmnto){
    let fechaNacimiento = new Date(fchaNcmnto);
    let hoy = new Date(); 

    edadPersona = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let difereciaDate = (hoy.getMonth() + 1) - (fechaNacimiento.getMonth() + 1);
    let diferenciaMoth =  (hoy.getDate() + 1) - (fechaNacimiento.getDate() + 1);
    
    if(difereciaDate < 0  || diferenciaMoth < 0){
        edadPersona--;
    }

    return edadPersona;
}

const valiMayoriaEdad = function (edad){
    edadPersona = edad;
    let respuesta; 
    if(edadPersona > 17){
        respuesta = `La persona con edad: ${edadPersona} es mayor de edad`;
    }
    else{
        respuesta = `La persona con edad: ${edadPersona} es menor de edad`;
    }

    return respuesta + " EXP";
}

const prmdioEdades = function (pValues = []){
    let notas = pValues;
    let sumNotas = 0;
    let respuesta;

    for(let i = 0; i < notas.length; i++){
        sumNotas += notas[i];
    }

    let prmdioValues = Math.round(sumNotas / (notas.length));

    if(prmdioValues > 17){
        respuesta = `El promedio de edades: ${prmdioValues} se encuentra en la mayoria de edad`;
    }
    else{
        respuesta = `El promedio de edades: ${prmdioValues} no se encuentra en la mayoria de edad`;
    }

    return respuesta + " EXP";
}    

