/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

function areaCuadrado(ladoP){
    let lado = ladoP; 
    let areaCuadrado = lado * lado;
                            
    return areaCuadrado;
}

function maxNumber(num1, num2, num3){
    let numero1 = num1;
    let numero2 = num2;
    let numero3 = num3;
    let respuesta; 

    if(numero1 == numero2 && numero2 == numero3 && numero3 == numero1){
        respuesta = "Las areas son iguales :)";
    }
    else{
        if(numero1 > numero2 && numero1 > numero3){
            respuesta = "La area del cuadrado 1: " + numero1 + " es el mayor";
        }
        else{
            if(numero2 > numero1 && numero2 > numero3){
                respuesta = "La area del cuadrado 2: " + numero2 + " es el mayor";
            }else{
                respuesta = "La area del cuadrado 3: " + numero3 + " es el mayor";
            }
        }
    }
    return respuesta;
}