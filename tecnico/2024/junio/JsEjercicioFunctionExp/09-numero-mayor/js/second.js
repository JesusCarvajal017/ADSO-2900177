/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

const maxNumero = function(num1, num2){
    let numeroUno = num1;
    let numeroDos = num2;
    let respuesta;

    if(numeroUno != numeroDos){
        if(numeroUno > numeroDos){
            respuesta = `El numero ${numeroUno} es mayor que ${numeroDos}`;     
        }
        else{
            respuesta = `El numero ${numeroDos} es mayor que ${numeroUno}`;     
        }
    }else{
        respuesta = `Los numeros ${numeroUno} - ${numeroDos} son iguales`;
    }

    return respuesta + " EXP";
}

