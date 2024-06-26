/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

function porcentajeNota(prcntje, nota){
    let prcntjeNota = prcntje;
    let resultado;
    if(Number.isInteger(prcntjeNota)){
        let oprdorPrcn = prcntjeNota / 100;
        resultado = nota * oprdorPrcn;
    }
    else{
        resultado = console.error(`Porcentaje no literal o decimal, no son validos\n`);
    }
    
    return resultado; 
}

