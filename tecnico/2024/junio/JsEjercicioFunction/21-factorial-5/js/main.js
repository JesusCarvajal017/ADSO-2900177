/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

function factorial(factorialP){
    let fctrial = 1;
    let num = factorialP; 

    if(Number(num)){
        for(let count = 1; count<=num; count++){
            fctrial*= count;
        }
    }
    else{
        fctrial = "Dato no valido, debe ser de tipo numerico";
    }
    fctrial = `El factorial de !${num} es de : ${fctrial}`;
    return fctrial;

}
