/*
tablas de multiplicar con for
autor: Juan M. Gutierrez
fecha: 24 de junio de 2024
*/
function tabla(numero){
    let contador;
    let multiplicacion = 1;
    num = numero;
    let consola = ""; 
    for(contador=1;contador <= num;contador++){
        multiplicacion = num * contador;
        consola += `${num}x${contador}=${multiplicacion}<br>`;
    }
    return consola
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