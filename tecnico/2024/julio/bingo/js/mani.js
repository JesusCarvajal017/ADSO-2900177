
// DOM
let fomrNumber = document.querySelector('.form-generate');
let bingoView = document.querySelector('.bingo');
let interfazHome = document.querySelector('.interfaz-start');
let btnTable = document.getElementById('generarTable');
let generateRandom = document.getElementById('bingoRandom');

// butons x
let btnx1 = document.querySelectorAll('.btn-captorX');
let btnsLetras = document.querySelectorAll('.btn-letras');

// funcionalidades
btnTable.addEventListener('click', ()=>{
    fomrNumber.style = 'display: block';
})

fomrNumber.addEventListener('submit', (event)=>{
    event.preventDefault();
    let tabla = document.getElementById('numberTabla').value;
    mostraBingo(tabla);
})

generateRandom.addEventListener('click', ()=>{
    mostraBingo(0, false);
})


// function de procesos
function mostraBingo(info, bandera = true){
    let pantalla = "";
    interfazHome.style = 'display: none';
    fomrNumber.style = 'display: none';

    bingoView.style = 'display: block';

    let dataBingo = bandera ? bingoTabla(info) : bingoRandom();

    for(let iterador = 0; iterador<dataBingo.length; iterador++){
        pantalla += `<div class="filas-letras">`
        for(let iterador2 = 0; iterador2<dataBingo[iterador].length; iterador2++){
            pantalla += `<div class="celdas-bingo">${dataBingo[iterador2][iterador]}</div>`
        }
        pantalla += `</div>`;
    }

    document.querySelector('.tablero-bingo').innerHTML = pantalla;

    let valoresBingo = document.querySelectorAll('.celdas-bingo');
    let filasLetras = document.querySelectorAll('.filas-letras');

    let capturaXs = {
        "0": captorX(dataBingo,0, 4, 5),
        "1": captorX(dataBingo,0,2,3),
        "2": captorX(dataBingo,2,4,3),
        "3": captorX(dataBingo,1,3,5,2),
    };

    // efecto para las xs
    btnx1.forEach((btns, i) =>{
        btns.addEventListener('click', ()=>{
            // remover clase de activacion
            removeClass(valoresBingo, 'active-focus');
            removeClass(filasLetras, 'active-fila');
            removeClass(filasLetras, 'rev-focuss');
            
            capturaXs[i].forEach(valuex =>{
                valoresBingo.forEach(elment =>{
                    let domElemen = elment.textContent;
                    if(domElemen == valuex){
                        elment.classList.add('active-focus');
                    }
                })
            });
        })
    })

    // efecto para las filas (letras)
    btnsLetras.forEach((btn, i) =>{
        
        btn.addEventListener('click', ()=>{
            removeClass(filasLetras, 'active-fila');
            removeClass(valoresBingo, 'active-focus');
            addClass(filasLetras, 'rev-focuss');


            filasLetras[i].classList.remove('rev-focuss');
            filasLetras[i].classList.add('active-fila')
        })
    })

}

// generadores del bingo (data = arrays)
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

function bingoRandom(){
    let valoresBingo = [];
    let bingo = [];
    let contador = 0;
    while(valoresBingo.length < 25) {
        let numRandom = Math.floor(Math.random() * 99) + 1;
        if (!valoresBingo.includes(numRandom)) {
            valoresBingo.push(numRandom);
        }
        
    }

    for(let iterador = 0; iterador<5; iterador++){
        let contenedor = [];
        for(let iterador = 0; iterador<5; iterador++){
            let valorNumber = valoresBingo[contador];
            contador++;
            contenedor.push(valorNumber);
        }
        bingo.push(contenedor);
    }

    return bingo;
}
    
function captorX(dataBingo,inicio, fin, filas, rango = 0){
    let patron1 = inicio; 
    let patron2 = fin; 
    let pase = true;
    let resultados = [];

    for(iterador1 = rango; iterador1<filas; iterador1++){
        if(patron1 == patron2){
            pase = false;
            resultados.push(dataBingo[iterador1][patron1]);
        }else{
            resultados.push(dataBingo[iterador1][patron1]);
            resultados.push(dataBingo[iterador1][patron2]);
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

function removeClass(nodelist = [], classe){
    nodelist.forEach(nodo =>{
        nodo.classList.remove(classe);
    })
}

function addClass(nodelist = [], classe){
    nodelist.forEach(nodo =>{
        nodo.classList.add(classe);
    })
}