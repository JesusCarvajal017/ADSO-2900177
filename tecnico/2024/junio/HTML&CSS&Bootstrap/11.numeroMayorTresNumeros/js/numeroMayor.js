/*
numero mayor con tres números
autor: Juan M. Gutierrez
fecha: 26 de junio de 2024
*/
function numeroMayor(numero1,numero2,numero3){
    let num1 = numero1;
    let num2 = numero2;
    let num3 = numero3;

    let consola = "";
    if(num1 == num2 && num1 == num3 && num3 == num2){
        consola = "Los números son iguales";
    }else{
        if(num1 > num2 && num1 > num3){
            consola = "El número "+num1+" es mayor";
        }else{
            if(num2 > num1 && num2 > num3){
                consola = "El número "+num2+" es mayor";
            }else{
                consola ="El número "+num3+" es mayor";
            }
        }
    }
    return consola;
}
// console.log(numeroMayor(233,4,36))

function mandar(){
    let numumeroUno = document.getElementById('txtNum1').value;
    let numumeroDos = document.getElementById('txtNum2').value;
    let numumeroTres = document.getElementById('txtNum3').value;

    let numeroM = numeroMayor(numumeroUno, numumeroDos, numumeroTres);

    console.log(numeroM)
    if(numumeroUno && numumeroDos && numumeroTres){

        document.getElementById('operacion').innerHTML = `<div class="respuesta">${numeroM}</div>`;
    }else{
        document.getElementById('operacion').innerHTML = "Digite datos validos"
    }

    numumeroUno = "";
    numumeroDos = "";
    numumeroTres = "";
  
    return false;  
}