/*
promedio mayoria de edades
autor: Juan M. Gutierrez
fecha: 26 de junio de 2024
*/

function edadPersona(fechaNacimiento,fechaActual){
    fechaN = fechaNacimiento;
    fechaA = fechaActual;
    let edad;
    edad = fechaA - fechaN;
    return edad;
}
function condicion(edad){
    if(edad>17){
        return edad+" Es mayor de edad";
    }else{
        return edad+" Es menor de edad"
    }
}
function mayoriaEdad(edad){
    if(edad >= 18){
        return edad+", Estan en el promedio de mayoria de edad";
    }else{
        return edad+", No estan en el promedio de mayoria de edad"
    }
}


function mandar(){
    let anioNa1 = document.getElementById('txtAnioNa1').value;
    let anioA1 = document.getElementById('txtAnioA1').value;
    let anioNa2 = document.getElementById('txtAnioNa2').value;
    let anioA2 = document.getElementById('txtAnioA2').value;
    let anioNa3 = document.getElementById('txtAnioNa3').value;
    let anioA3 = document.getElementById('txtAnioA3').value;

    if(anioNa1 && anioA1 && anioNa2 && anioA2 && anioNa3 && anioA3){
        let edad1 = edadPersona(anioNa1, anioA1);
        let edad2 = edadPersona(anioNa2, anioA2);
        let edad3 = edadPersona(anioNa3, anioA3);
        let edadUni1 = condicion(edad1);
        let edadUni2 = condicion(edad2);
        let edadUni3 = condicion(edad3);
        let promedio = (edad1 + edad2 + edad3) / 3;
        let edadM = mayoriaEdad(promedio);
        let consola = "";

        consola += `<div class="respuesta">`;
        consola += `Persona 1 <br> ${edadUni1} <br>`;
        consola += `Persona 2 <br> ${edadUni2} <br>`;
        consola += `Persona 3 <br> ${edadUni3} <br>`;
        consola += `Su promedio es: ${edadM}`;

        document.getElementById('operacion').innerHTML = consola;
    }else{
        document.getElementById('operacion').innerHTML = "Digite datos validos"
    }

    return false;  
}