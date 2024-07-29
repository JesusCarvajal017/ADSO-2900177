
function bingoTabla(tabla){
    let bingo = [];
    let contador = 1;
    for(let iterador = 0; iterador<5; iterador++){
        let contenedor = [];
        for(let iterador = 0; iterador<5; iterador++){
            let valorNumber = tabla * contador;
            contador++;
            contenedor.push(valorNumber);
        }
        bingo.push(contenedor);
    }

    return bingo;
}

let bingoPrueba = bingoTabla(2);
let x1 = [];
let x2 = [];


function captorX(inicio, fin, filas, rango = 0){
    let patron1 = inicio; 
    let patron2 = fin; 
    let pase = true;
    let resultados = [];

    for(iterador1 = rango; iterador1<filas; iterador1++){
        if(patron1 == patron2){
            pase = false;
            resultados.push(bingoPrueba[iterador1][patron1]);
        }else{
            resultados.push(bingoPrueba[iterador1][patron1]);
            resultados.push(bingoPrueba[iterador1][patron2]);
        }

        patron1 = pase ? patron1 + 1 : patron1 - 1;
        patron2 = pase ? patron2 - 1 : patron2 + 1;

    }

    return resultados; 
};


function letrasBingo(array = []){
    let bingo = array;

    let letrasBin = [];
    // letras del bingo
    for(let iterador = 0; iterador<bingo.length; iterador++){
        let contenedor =[];
        for(let iterador2 = 0; iterador2<5; iterador2++){
            contenedor.push(bingo[iterador2][iterador]);
        };

        letrasBin.push(contenedor);
    }

    return letrasBin;
}

console.log(bingoPrueba)
for(let i = 0; bingoPrueba.length; i++){
    console.log(bingoPrueba[i][0])
    if(i == 4){
        for(let i2 = 0; i2 <bingoPrueba[i].length; i2++){
            console.log(bingoPrueba[i][i2])
            if(i2 == )
        }
    }
}

// console.log(bingoPrueba)
// console.log(captorX(2,4,5,2));
// console.log(letrasBingo(bingoPrueba))









