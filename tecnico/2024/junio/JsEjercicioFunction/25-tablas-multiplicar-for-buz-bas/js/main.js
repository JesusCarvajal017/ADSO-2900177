/**
 * tablas multiplicacion
 * autor: Jesus fernando carvajal
 * fecha: miercoles 03 de abril
 * */ 

function sorter(num){
    numero = num;
    let result = numero % 2  == 0 ? "Buzz \n" : "Bass \n";
    return result;
}

function typeNumber(num){
    numero = num ;
    let result = numero % 2  == 0 ? 1 : 0; 
    return result; 
}

function tblaMuti(tabla, rango = 5){
    let tablas = tabla; // tablas a desarrollar 1, 2,3,4....
    let numero = rango ; //rango multiplicador 5 x n...
    let resultado; // resultado de las multiplicaciones
    let rsltdoFinish = ""; // resultado de pantalla
    let par = 0;
    let impar = 0;


    // tablas multiplicacion
    for(let cntdorTbla = 1; cntdorTbla<=tablas; cntdorTbla++){
        for(let contR = 1; contR<=numero; contR++){
            resultado = cntdorTbla * contR;
            rsltdoFinish += `${cntdorTbla} X  ${contR} = ${resultado}\n`; 
            rsltdoFinish += sorter(resultado);
            par += typeNumber(resultado);
            impar += (typeNumber(resultado) - 1) * -1;
        }
    }

    rsltdoFinish += `\nTotal de numero pares: ${par}\n`;
    rsltdoFinish += `Total de numero impares: ${impar}\n`;  

    return rsltdoFinish;
}