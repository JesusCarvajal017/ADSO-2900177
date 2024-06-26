/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

function contador(limite){
    let num = limite;
    let resultado = ""; 
    
    for(let count = 1; count<=num; count++){
        resultado += `${count}\n`;
    }
    return resultado;
}        