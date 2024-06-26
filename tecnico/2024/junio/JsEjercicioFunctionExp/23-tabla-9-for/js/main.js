/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

const evaluador = function(valueResult){
    let resultado = "";
    let valor = valueResult; 
    if(valor % 2 == 0){
        resultado = `El resultado ${valor} es par\n`; 
    }
    else{
        resultado = `El resultado ${valor} es impar\n`; 
    }

    return resultado; 
}

const tablaMultiplicar = function(tablaP, mltplcdor){
    let tabla = tablaP; 
    let num = mltplcdor;
    let result;
    let rsltPantalla = "";

    if(Number(tabla) && Number(num)){
        rsltPantalla += `=====================\n`;
        for(let count = 1; count<=num; count++){
            result =  tabla * count;
            rsltPantalla += evaluador(result);
        }  
        rsltPantalla += `=====================`;
    }else{
        rsltPantalla = `los valores (${tabla} - ${num}) son invalidos, los datos deben ser numericos`;
    }

    return rsltPantalla; 
}



