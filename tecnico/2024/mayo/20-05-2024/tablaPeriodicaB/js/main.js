/**
 * Autor: Jesus Fernando Carvajal Anacona
 * Titulo: tabla periodica
 */

// data elementos modal
const infoModales = dataTable;

// elementos de DOM
let elementosInfo = document.querySelectorAll('.elemento');

// DOM modal
let modal = document.querySelector('.informacionModal');
let botonT = document.querySelector('#activar');
let title = document.getElementById('titleElement');


let masaAtomicaInfo = document.getElementById('masaAtomic');
let numeroAtomicoInfo = document.getElementById('numeroAtomico');
let densidadInfo = document.getElementById('densidad');
let electronegatividadInfo = document.getElementById('electronegativida');
let simboloInfo = document.getElementById('simbolo');
let nombreElementoInfo = document.getElementById('nombreElemento');

let informacionElement = document.getElementById('inforElemento');

// evento de focus elemento, para la informacion ampliada
elementosInfo.forEach((elemento) => {
    elemento.addEventListener('mousemove', () => {

        informacionElement.className = 'info-elemento';
        let classColor = elemento.classList;

        informacionElement.classList.add(classColor[1]);

        let masa = elemento.querySelector('.masa-atomic').innerHTML;
        let numero = elemento.querySelector('.numero-atomic').innerHTML;
        let densi = elemento.querySelector('.densidad').innerHTML;
        let elect = elemento.querySelector('.electro').innerHTML;
        let simbole = elemento.querySelector('.simbol').innerHTML;
        let name = elemento.querySelector('.name-element').innerHTML;


        masaAtomicaInfo.textContent = masa;
        numeroAtomicoInfo.textContent = numero;
        densidadInfo.textContent = densi;
        electronegatividadInfo.textContent = elect;
        simboloInfo.textContent = simbole;
        nombreElementoInfo.textContent = name;

    })
})

elementosInfo.forEach((elemento) => {
    elemento.addEventListener('click', (event) => {
        let dataElemento = event.currentTarget.getAttribute("data-id-elemento");
        modal.innerHTML = infoModales[dataElemento].descripcion;

        let titleModal = `${infoModales[dataElemento].nombreElement} (${infoModales[dataElemento].simbolo})`
        title.innerHTML = titleModal;
        botonT.click();
    });
});