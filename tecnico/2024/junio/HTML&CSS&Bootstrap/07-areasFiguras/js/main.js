
// formularios
let formC = document.getElementById('cuadrado');
let formRT = document.getElementById('rectangulo');

// section de respuesta DOM
let pantallaRta = document.querySelector('.section-respuesta');
const DOMfIGURE = document.getElementById('imagenFigura');


let figuraOpcion = document.querySelectorAll('.card');
let dataFigura;

formC.style.display = 'none';
formRT.style.display = 'none';
pantallaRta.style.display = 'none';

let figuras = {
    "1": '<img src="image/figuras/cuadrado.png">',
    "2": '<img src="image/figuras/rectangulo.png">',
    "3": '<img src="image/figuras/triangulo.png">'
}


// opcion de figura
figuraOpcion.forEach(element => {
    element.onclick = function(event){
        dataFigura = event.currentTarget.getAttribute('data-figura'); 
        main(dataFigura);
    }
    // element.addEventListener('click', (event)=>{
    //     dataFigura = event.currentTarget.getAttribute('data-figura'); 
    //     main(dataFigura);
    // })
});

function handleClickData(event){
    dataFigura = event.currentTarget.getAttribute('data-figura'); 
    main(dataFigura);
}

function main(data){
    const FIGUREDEFAULT = '<img src="image/caritatriste.jpg">';
    let DATAGEOMETRI = parseFloat(data);

    let opcion = figuras[data] ? figuras[data] : FIGUREDEFAULT; 

    formC.removeEventListener('submit', handleFormCSubmit);
    formRT.removeEventListener('submit', handleFormRTSubmit);

    if(DATAGEOMETRI == 1){
        // formC.addEventListener('submit', handleFormCSubmit);
        formC.onsubmit = function(event){
            event.preventDefault();
            areasFiguras(DATAGEOMETRI)
        }

        formRT.style.display = 'none';
        formC.style.display = 'block';
    }
    else if(DATAGEOMETRI == 2 || DATAGEOMETRI == 3){
        formRT.onsubmit = function(event){
            event.preventDefault();
            areasFiguras(DATAGEOMETRI)
        }
    
        // formRT.addEventListener('submit', handleFormRTSubmit);

        formC.style.display = 'none';
        formRT.style.display = 'block';
    }

    pantallaRta.style.display = 'grid';
    DOMfIGURE.innerHTML = opcion;

    function handleFormCSubmit(event) {
        event.preventDefault();
        areasFiguras(DATAGEOMETRI);
    }
    
    function handleFormRTSubmit(event) {
        event.preventDefault();
        areasFiguras(DATAGEOMETRI);
    }

}

function areasFiguras(figura){
    let fg = figura.toString();

    const numberLogitudes = {
        "1": [document.getElementById('ladoCuadrado').value],
        "2": [document.getElementById('base').value, document.getElementById('altura').value],
        "3": [document.getElementById('base').value, document.getElementById('altura').value],
    }

    const dataNumbers = numberLogitudes[fg];

    console.log(fg)
    let area = 1;
    let mensajeFigura = "";
    if(fg == "1"){
        area = dataNumbers[0] * dataNumbers[0];
        mensajeFigura = "Cuadrado";
    }
    else{
        area = fg == "2"  ? (dataNumbers[0] * dataNumbers[1]) : (dataNumbers[0] * dataNumbers[2]) ;
        mensajeFigura = fg == "2" ? "Rectangulo" : "Triangulo";
    }

    document.querySelector('.descripcion-figura').innerText = `El area de ${mensajeFigura} es:`;
    document.querySelector('.area-figura').innerText= area + " m2";

    return false;
}

// formC.addEventListener('submit', areasFiguras)
// formRT.addEventListener('submit', areasFiguras)