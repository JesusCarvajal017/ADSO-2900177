/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

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
            rsltPantalla+= `${tabla} x ${contador} = ${result}\n`; 
        }    
        rsltPantalla += `=====================`;
    }else{
        rsltPantalla = `los valores (${tabla} - ${num}) son invalidos, los datos deben ser numericos`;
    }

    return rsltPantalla; 
}