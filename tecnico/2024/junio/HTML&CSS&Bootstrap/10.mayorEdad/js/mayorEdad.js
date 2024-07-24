/*
mayoria de edad
autor: Juan M. Gutierrez
fecha: 26 de junio de 2024
*/
function edad(fechaNacimiento, fechaActual){
    let edadd;
    let consola = "";
    fechaN = fechaNacimiento;
    fechaA = fechaActual;
    edadd = fechaA - fechaN;
    consola +=`Su edad es: ${edadd} <br>`;
    if(edadd >= 18){
        consola +="Es mayor de edad <br>";
    }else{
        consola +="Es menor de edad";
    }
    return consola;
}

function mandar(){
    let anoNacimiento = document.getElementById('txtAnoNa').value;
    let anoActual = document.getElementById('txtAnoA').value;

    if(anoNacimiento && anoActual){
        let edadM = edad(anoNacimiento, anoActual);

        document.getElementById('operacion').innerHTML = `<div class="respuesta">${edadM}</div>`;
    }else{
        document.getElementById('operacion').innerHTML = "Digite datos validos"
    }
  
    return false;  
}