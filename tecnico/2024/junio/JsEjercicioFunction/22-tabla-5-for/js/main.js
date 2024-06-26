/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

function tablaMultiplicar(tablaP, mltplcdor){
    let tabla = tablaP; 
    let num = mltplcdor;
    let result;
    let rsltPantalla = "";

    if(Number(tabla) && Number(num)){
        rsltPantalla += `=====================\n`;
        for(let count = 1; count<= num; count++){
            result =  tabla * count;
            rsltPantalla+= `${tabla} x ${count} = ${result}\n`; 
        }    
        rsltPantalla += `=====================`;
    }else{
        rsltPantalla = `los valores (${tabla} - ${num}) son invalidos, los datos deben ser numericos`;
    }

    return rsltPantalla; 
}