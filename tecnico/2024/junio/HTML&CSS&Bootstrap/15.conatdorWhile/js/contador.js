/*
esatdo notas
autor: Juan M. Gutierrez
fecha: 24 de junio de 2024
*/
function contar(numero){
    num = numero;
    let contador = 0;
    consola = "";
    while(contador < num){
        contador++;
        consola += `${contador} `;
    }
    return consola;
}
function operar(){
    let numero = parseFloat(document.getElementById('txtNum').value);
   
    if(numero){
        let conteo = contar(numero);
        let consola = "";
        
        consola += `<div class="respuesta">`;
        consola += `<strong>${conteo}</strong>`;
        consola += `</div>`;

        document.getElementById('operacion').innerHTML = consola;
    }else{
        alert("Por favor ingrese datos validos");
    }
    
    return false
}