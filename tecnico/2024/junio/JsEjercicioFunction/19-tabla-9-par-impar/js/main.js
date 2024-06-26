/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/
function mostrador(presultado){
    let resultado = presultado;
    let rsltado = "";
    if(resultado % 2 == 0){
        rsltado = `El resultado ${resultado} es par\n`; 
    }
    else{
        rsltado = `El resultado ${resultado} es impar\n`; 
    }
    return rsltado;
}

function tablaMultiplicar(tablaP, mltplcdor){
    let tabla = tablaP; 
    let num = mltplcdor;
    let contador = 0;
    let result;
    let rsltPantalla = "";

    if(Number(tabla) && Number(num)){
        rsltPantalla += `=====================\n`;
        while(contador < num){
            contador++;
            result =  tabla * contador;
            rsltPantalla += mostrador(result);
        }    
        rsltPantalla += `=====================`;
    }else{
        rsltPantalla = `los valores (${tabla} - ${num}) son invalidos, los datos deben ser numericos`;
    }

    return rsltPantalla; 
}
