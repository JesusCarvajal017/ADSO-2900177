/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

let base = 0;
let altura = 0;

function areaCuadrado(ladoP){
    let lado = ladoP; 
    let areaCuadrado = lado * lado;
    return areaCuadrado;
}

function areaRectangulo(baseRec, alturaRec){
    base = baseRec; 
    altura = alturaRec; 
    let areaRectangulo = base * altura;

    return areaRectangulo;
}

function areaTriangulo(baseTri, alturaTri){
    base = baseTri;
    altura = alturaTri;
    let areaTriangulo = (base * altura)/2;

    return areaTriangulo;
}

function areaFiguras(figura = "", lado, base, altura){
    let resultado;
    figura = figura.toLowerCase();

    if(figura == "cuadrado"){
        resultado = areaCuadrado(lado);
    }
    else if(figura == "rectangulo"){
        resultado = areaRectangulo(base, altura);
    }
    else if(figura == "triangulo"){
        resultado = areaTriangulo(base, altura);
    }
    else{
        resultado = `El argumento ${figura} no es valido`;
    }

    return resultado;

}