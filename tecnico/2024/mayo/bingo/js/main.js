/**
 * BINGO
 * Auntor: Jesus Fernando Carvajal
 * 
 */

// variables globales
let bingo = [];
let letras = [];
let resultados  = [];

// variables de refuerzo
let tabla = 3;
let contador = 0;
let salida;
let iterador1;
let iterador2;
let pares = 0;
let impares = 0;

// generador de la tabla en el tablero de bingo
for(iterador1 = 0; iterador1<5; iterador1++){
    resultados = [];
    for(iterador2 = 0; iterador2<5; iterador2++){
        contador++;
        salida = contador * tabla;
        resultados.push(salida);
    }

    bingo.push(resultados);
}

// letras del bingo
for(iterador1 = 0; iterador1<5; iterador1++){
    resultados = [];
    for(iterador2 = 0; iterador2<bingo.length; iterador2++){
        resultados.push(bingo[iterador2][iterador1])
    }
    letras.push(resultados)
}

// cantidad de numero pares e impares
for(iterador1 = 0; iterador1<bingo.length; iterador1++){
    for(iterador2 = 0; iterador2<bingo[iterador1].length; iterador2++){
        if(bingo[iterador1][iterador2] %  2 == 0){
            pares++;
        }else{
            impares++;
        }
    }
}

function captorX(inicio, fin, filas, rango = 0){
    let patron1 = inicio; 
    let patron2 = fin; 
    let pase = true;
    resultados = [];
    for(iterador1 = rango; iterador1<filas; iterador1++){
        if(patron1 == patron2){
            pase = false;
            resultados.push(bingo[iterador1][patron1]);
        }else{
            resultados.push(bingo[iterador1][patron1]);
            resultados.push(bingo[iterador1][patron2]);
        }

        patron1 = pase ? patron1 + 1 : patron1 - 1;
        patron2 = pase ? patron2 - 1 : patron2 + 1;

    }

    return resultados; 
};


// console.log(`Cantidad de pares: ${pares}`);
// console.log(`Cantidad de impares: ${impares}`);
// console.log(letras)
// console.log("bingo")
console.log(bingo);
console.log(`La x grande: `)
console.log(captorX(0,4,5));
console.log(`La x pequeña 1: `)
console.log(captorX(1,3,3));
console.log(`La x pequeña 2: `)
console.log(captorX(0,2,5,5));

