/**
 * tablas multiplicacion
 * autor: Jesus fernando carvajal
 * fecha: miercoles 03 de abril
 * */ 

const tblaMutiY = function(tablaP, rango = 5){
    let tabla;
    let num1 = rango; 
    let num2 = tablaP; 
    let result;
    let mult;
    let par;
    let impar;
    let resultado = ""; 

    tabla = 0;
    result = 0;
    par = 0;
    impar = 0;
    
    while(tabla<num2){
        tabla++;
        mult = 0;
        while(mult<num1){
            result = tabla * (mult + 1);
            resultado += `${tabla} x ${mult+1} = ${result}\n`;
            if(result % 2 == 0){
                par++;
                resultado += `Buzz\n`;  
            }
            else{
                impar++;
                resultado +=`Bass\n`;
            }
            mult++;
        }
    }

    resultado += `Cantidad de numeros pares: ${par}\n`;
    resultado += `Cantidad de numeros impares: ${impar}`; 


    return resultado;
}



