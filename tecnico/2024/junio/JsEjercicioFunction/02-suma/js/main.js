/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

let numUno;
let numDos;

// funtion
function sumar(num1, num2){
    numUno = num1;  
    numDos = num2
    let suma = numUno + numDos;
    return suma;
}

// funcion como exprecion
const sumarExp = function(num1, num2){
    numUno = num1;  
    numDos = num2
    let suma = numUno + numDos + " :Exp";
    return suma;
}