

let bingo = [];
let resultado =[];
let contador = 1;
let tablaM = 2;
let pantalla = "";

for(let iterador = 0; iterador<5; iterador++){
    resultado = [];
    for(let iterador2 = 0; iterador2<5; iterador2++){
        let multiplicaciones = tablaM * contador;
        contador++;

        resultado.push(multiplicaciones);
    }

    bingo.push(resultado);
}

for(let iterador = 0; iterador<bingo.length; iterador++){
    pantalla += ` <div class="row">`;
        for(let iterador2 = 0; iterador2<bingo[iterador].length; iterador2++){
            pantalla+= `<div class="col-2">${bingo[iterador][iterador2]}</div>`
        }
    pantalla += ` </div>`;
}

document.getElementById('bingo').innerHTML = pantalla;





