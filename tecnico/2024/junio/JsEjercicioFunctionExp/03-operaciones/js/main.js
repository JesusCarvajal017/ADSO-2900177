/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

let numUno;
let numDos;

// sumar
const sumar = function (num1, num2){
    numUno = num1;  
    numDos = num2; 
    let suma = numUno + numDos;
    return suma;
}

// restar
const  restar = function (num1, num2){
    numUno = num1;  
    numDos = num2;
    let resta = numUno - numDos;
    return resta;
}

// multiplicar
const multiplicar = function (num1, num2){
    numUno = num1;  
    numDos = num2;
    let multiplicacion = numUno * numDos;
    return multiplicacion;
}

// dividir
const dividir = function(num1, num2){
    numUno = num1;  
    numDos = num2;
    let division = numUno / numDos;
    return division;
}

const operaciones = function(operacion = "",num1, num2){
    numUno = num1;  
    numDos = num2;
    let resultado;

    operacion = operacion.toLowerCase();
    
    if(operacion == "sumar"){
        resultado = sumar(numUno, numDos) + " Exp";
    }
    else if(operacion == "restar"){
        resultado = restar(numUno, numDos) + " Exp";
    }
    else if(operacion == "multiplicar"){
        resultado = multiplicar(numUno, numDos) + " Exp";
    }
    else if(operacion == "dividir"){
        resultado = dividir(numUno, numDos) + " Exp";
    }
    else {
        resultado = "Operacion no valida";
    }

    return resultado;

}
