/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

let base = 0;
let altura = 0;

const  areaCuadrado = function (ladoP){
    let lado = ladoP; 
    let areaCuadrado = lado * lado;
    return areaCuadrado;
}

const areaRectangulo = function(baseRec, alturaRec){
    base = baseRec; 
    altura = alturaRec; 
    let areaRectangulo = base * altura;

    return areaRectangulo;
}

const areaTriangulo = function(baseTri, alturaTri){
    base = baseTri;
    altura = alturaTri;
    let areaTriangulo = (base * altura)/2;

    return areaTriangulo;
}

const areaFiguras = function (figura = "", lado, base, altura){
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

    return resultado + " EXP";
}

