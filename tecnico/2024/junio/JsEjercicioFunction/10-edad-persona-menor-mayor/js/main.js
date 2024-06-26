/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/
let edadPersona;

function edad(fchaNcmnto){
    let fechaNacimiento = new Date(fchaNcmnto);
    let hoy = new Date(); 
    let difereciaDate;
    let diferenciaMoth;

    edadPersona = hoy.getFullYear() - fechaNacimiento.getFullYear();
    difereciaDate = (hoy.getMonth() + 1) - (fechaNacimiento.getMonth() + 1)  ;
    diferenciaMoth =  (hoy.getDate() + 1) - (fechaNacimiento.getDate() + 1);
    
    if(difereciaDate < 0  || diferenciaMoth < 0){
        edadPersona--;
    }
    else{
        edadPersona;
    }
    return edadPersona;

}

function valiMayoriaEdad(edad){
    edadPersona = edad;
    let respuesta; 
    if(edadPersona > 17){
        respuesta = `La persona con edad: ${edadPersona} es mayor de edad`;
    }
    else{
        respuesta = `La persona con edad: ${edadPersona} es menor de edad`;
    }

    return respuesta;
}
