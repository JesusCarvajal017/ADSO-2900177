/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

const mostrador = function(tabla, multiplicador){
    let numeroUno = tabla; 
    let numeroDos = multiplicador; 
    let operacion = numeroUno * numeroDos;  

    let resultado =`${numeroUno} x ${numeroDos} = ${operacion}\n`; 

    return resultado;
}

const tablaMultiplicar = function(tablaP, mltplcdor){
    let tabla = tablaP; 
    let num = mltplcdor;
    let result;
    let rsltPantalla = "";

    if(Number(tabla) && Number(num)){
        rsltPantalla += `=====================\n`;
        for(let count = 1; count<= num; count++){
            rsltPantalla+= mostrador(tabla, count); 
        }    
        rsltPantalla += `=====================`;
    }else{
        rsltPantalla = `los valores (${tabla} - ${num}) son invalidos, los datos deben ser numericos`;
    }

    return rsltPantalla; 
}

