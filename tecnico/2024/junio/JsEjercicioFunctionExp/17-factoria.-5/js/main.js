/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

const factorial = function(factorialP){
    let fctrial = 1;
    let contador = 0;
    let num = factorialP; 

    if(Number(num)){
        while(contador<num){
            contador++;
            fctrial*= contador;
        }
    }
    else{
        fctrial = "Dato no valido, debe ser de tipo numerico";
    }

    fctrial = `El factorial de !${num} es de : ${fctrial}`;

    return fctrial;

}
