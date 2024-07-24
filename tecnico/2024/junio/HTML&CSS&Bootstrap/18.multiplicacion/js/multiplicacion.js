/*
tablas de multiplicar
autor: Juan M. Gutierrez
fecha: 24 de junio de 2024
*/
function tabla(numero){
    let contador = 0;
    let multiplicacion = 1;
    let consola = "";
    num = numero;
    while(contador < 10){
        contador++;
        multiplicacion = numero * contador;
        consola += `${numero}x${contador}=${multiplicacion}<br>`;
    }
    return consola;
}
function operar(){
    let numero = parseFloat(document.getElementById('txtNum').value);
   
    if(numero){
        let mult = tabla(numero);
        let consola = "";
        
        consola += `<div class="respuesta">`;
        consola += `<strong>${mult}</strong>`;
        consola += `</div>`;

        document.getElementById('operacion').innerHTML = consola;
    }else{
        alert("Por favor ingrese datos validos");
    }
    
    return false
}