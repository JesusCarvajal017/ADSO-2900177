/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

let numUno;
let numDos;

// sumar
function sumar(num1, num2){
    numUno = num1;  
    numDos = num2; 
    let suma = numUno + numDos;
    return suma;
}

// restar
function restar(num1, num2){
    numUno = num1;  
    numDos = num2;
    let resta = numUno - numDos;
    return resta;
}

// multiplicar
function multiplicar(num1, num2){
    numUno = num1;  
    numDos = num2;
    let multiplicacion = numUno * numDos;
    return multiplicacion;
}

// dividir
function dividir(num1, num2){
    numUno = num1;  
    numDos = num2;
    let division = numUno / numDos;
    return division;
}

function operaciones(operacion = "",num1, num2){
    numUno = num1;  
    numDos = num2;
    let resultado;

    operacion = operacion.toLowerCase();
    
    if(operacion == "sumar"){
        resultado = sumar(numUno, numDos);
    }
    else if(operacion == "restar"){
        resultado = restar(numUno, numDos);
    }
    else if(operacion == "multiplicar"){
        resultado = multiplicar(numUno, numDos);
    }
    else if(operacion == "dividir"){
        resultado = dividir(numUno, numDos);
    }
    else {
        resultado = "Operacion no valida"
    }

    return resultado;

}
