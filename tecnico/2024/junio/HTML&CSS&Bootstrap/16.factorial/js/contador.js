/*
esatdo notas
autor: Juan M. Gutierrez
fecha: 24 de junio de 2024
*/
function factor(numero){
    let contador = 0;
    let factorial = 1;
    num = numero;
    while(contador < num){
        contador++;
        factorial = factorial * contador;
    }
    return factorial;
}
function operar(){
    let numero = parseFloat(document.getElementById('txtNum').value);
   
    if(numero){
        let factorial = factor(numero);
        let consola = "";
        
        consola += `<div class="respuesta">`;
        consola += `<strong>${factorial}</strong>`;
        consola += `</div>`;

        document.getElementById('operacion').innerHTML = consola;
    }else{
        alert("Por favor ingrese datos validos");
    }
    
    return false
}