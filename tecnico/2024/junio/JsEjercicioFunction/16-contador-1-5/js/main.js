/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

function contador(limite){
    let count;
    let num = limite;
    let resultado = ""; 

    count = 0;
        
    while(count<num){
        count++;
        resultado += `${count}\n`;
    }

    return resultado;

}        