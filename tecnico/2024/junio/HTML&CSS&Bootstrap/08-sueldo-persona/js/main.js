/*
    Titulo: Suma
    Autor: Jesus Fernando Carvajal Anacona
    Fecha creación: 24 de junio de 2024
*/

// captura del DOM
let cajaRespuesta = document.querySelector('.respuesta-data');
let formulario = document.getElementById('formularioData');

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();

    let diasTrabajados = document.getElementById('diasTrabajados').value; 
    let valorDia = document.getElementById('valorDia').value;


    if(diasTrabajados && valorDia){
        let sueldoPersona = sueldoBruto(valorDia, diasTrabajados);
        
        let salud = prestaciones(sueldoPersona, 0.12);
        let pension = prestaciones(sueldoPersona, 0.16);
        let arl =  prestaciones(sueldoPersona, 0.052);
        let deducciones = salud + pension + arl;
        let sueldoTotal = sueldoPersona - deducciones;


        cajaRespuesta.innerHTML = `<div class=""col-12 row>
                                    <div class="col-12"><i class="fa-solid fa-money-bill"></i> <b>SUELDO BRUTO:</b> ${sueldoPersona}</div>
                                    <div class="col-12"><i class="fa-solid fa-suitcase-medical"></i> <b>SALUD:</b> ${salud}</div>
                                    <div class="col-12"><i class="fa-solid fa-piggy-bank"></i> <b>PENSION:</b> ${pension}</div>
                                    <div class="col-12"><i class="fa-solid fa-bolt"></i> <b>ARL:</b> ${arl}</div>
        `

    }else{
        cajaRespuesta.innerHTML = `No hay datos, no se puede calcular`;
    }




})







// funcionalidades 
let sueldo;

const sueldoBruto = function(valorDiaP, diasTrabajadosP){
    let valorDia = valorDiaP;
    let diasTrabajados = diasTrabajadosP;

    sueldo = valorDia * diasTrabajados;

    return sueldo;
}

const prestaciones = function(sueldoP, prcntaPrtancion){
    sueldo = sueldoP;
    let prcnPrestacion = prcntaPrtancion;
    let resultado = sueldo * prcnPrestacion;

    return resultado;
}
