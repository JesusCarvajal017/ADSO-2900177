/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

const maxNumber = function(num1, num2, num3){
    let numero1 = num1;
    let numero2 = num2;
    let numero3 = num3;
    let respuesta; 

    if(numero1 == numero2 && numero2 == numero3 && numero3 == numero1){
        respuesta = "Los numeros son iguales :)";
    }
    else{
        if(numero1 > numero2 && numero1 > numero3){
            respuesta = "El numero: " + numero1 + " es el mayor";
        }
        else{
            if(numero2 > numero1 && numero2 > numero3){
                respuesta = "El numero: " + numero2 + " es el mayor";
            }else{
                respuesta = "El numero: " + numero3 + " es el mayor";
            }
        }
    }
    return respuesta + " EXP";
}


