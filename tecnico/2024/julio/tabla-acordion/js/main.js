
let form = document.getElementById('calcularTabla');




function generarTablas(tablas){
    let idicadorTable = tablas;
    let data = [];
    let resultados = [];
    let pantalla = "";
    
    for(let iterador = 1; iterador<=idicadorTable; iterador++){
        resultados = [];
        for(let iterador2 = 1; iterador2<=10; iterador2++){
            let multiplicado = iterador2 * iterador;

            resultados.push(multiplicado);
        }

        data.push(resultados)
    }

    for(let iterador = 0; iterador<data.length; iterador++){
        pantalla += `<div class="accordion-item">`;
            pantalla += `<h2 class="accordion-header">`;
                pantalla += `<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${iterador + 1}" aria-expanded="false">`;
                    pantalla += `Tabla ${iterador + 1}`;
            pantalla += `</h2`;

            pantalla+= `div id="${iterador + 1}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">`;
                pantalla += `<div class="accordion-body">`;
                    pantalla += `<div class="accordion-body">`;
                        pantalla += `<table class="table table-bordered">`;
                        pantalla += `<thead><tr><th colspan="2" scope="row">TABLA DEL ${iterador + 1}</th></tr></thead>`;
                        pantalla+= `<tbody>`;
        for(let iterador2 = 0; iterador2<data[iterador].length; iterador2++){
            pantalla += `<tr>
                            <td>${iterador + 1} X ${iterador2 + 1}</td>
                            <td>${data[iterador][iterador2]}</td>
                        </tr>`
        }
                        pantalla+= `</tr></tbody>`;
                
                pantalla += `</div>`;
            pantalla += `</div>`;


        pantalla += `</div>`; 


    }

    return pantalla;
}


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let dataTable = document.getElementById('numberUno').value;

    let DOMpa = generarTablas(dataTable);

    console.log(DOMpa)

    document.getElementById('accordionFlushExample').innerHTML = DOMpa;

   


})