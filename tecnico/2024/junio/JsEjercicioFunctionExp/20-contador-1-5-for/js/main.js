/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

const contador = function(limite){
    let num = limite;
    let resultado = ""; 
    
    for(let count = 1; count<=num; count++){
        resultado += `${count}\n`;
    }
    return resultado;
}        