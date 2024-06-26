/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

function promedio(pNotas = []){
    let notas = pNotas;
    let sumNotas = 0;
    let prmdioNotas;

    for(let i = 0; i < notas.length; i++){
        sumNotas += notas[i];
    }
    
    prmdioNotas = sumNotas / (notas.length); 
    
    return prmdioNotas;
}    
