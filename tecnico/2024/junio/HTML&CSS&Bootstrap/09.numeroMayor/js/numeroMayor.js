/*
numero mayor
autor: Juan M. Gutierrez
fecha: 26 de junio de 2024
*/
let numero1;
let numero2;

function mayor(numero1,numero2){
    let num1 = numero1;
    let num2 = numero2
    if(num1 > num2){
        return `El número ${num1} es mayor`;
    }else{
        return `El número ${num2} es mayor`;
    }
}
function mandar(){
    let numumeroUno = document.getElementById('txtNum1').value;
    let numumeroDos = document.getElementById('txtNum2').value;

    if(numumeroUno && numumeroDos){
        let numeroM = mayor(numumeroUno, numumeroDos);

        document.getElementById('operacion').innerHTML = `<div class="respuesta">${numeroM}</div>`;
    }else{
        document.getElementById('operacion').innerHTML = "Digite datos validos"
    }
  
    return false;  
}