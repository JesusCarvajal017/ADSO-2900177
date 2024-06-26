/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

const porcentajeNota = function (nota,prcntje){
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

const califiacion = function(nota){
    let prcntjeNota = nota;
    let resultado; 
    if(prcntjeNota>4.5){
        resultado = `La nota ${prcntjeNota} es superior`;
    }
    else if(prcntjeNota <= 4.5 && prcntjeNota > 3.5){
        resultado = `La nota ${prcntjeNota} es buena`;
    }
    else if(prcntjeNota <= 3.5 && prcntjeNota > 3){
        resultado = `La nota ${prcntjeNota} es media`;
    }
    else{
        resultado = `La nota ${prcntjeNota} es mala`;
    }
    return resultado; 
}

