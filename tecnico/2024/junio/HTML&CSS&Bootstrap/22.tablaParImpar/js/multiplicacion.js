/*
tablas de multiplicar
autor: Juan M. Gutierrez
fecha: 24 de junio de 2024
*/
function tabla(numero,rango){
    let contador = 0;
    let multiplicacion = 1;
    let consola = "";
    num = numero;
    ran = rango;
    while(contador < rango){
        contador++;
        multiplicacion = num * contador;
        consola += condicion(multiplicacion);
    }
    return consola;
}
function condicion(multiplicacion){
    if(multiplicacion  %2==0){
        return `${multiplicacion} es número par <br>`;
    }else{
        return `${multiplicacion} es número impar <br>`;
    }
}
function operar(){
    let numero = parseFloat(document.getElementById('txtNum').value);
    let rango = parseFloat(document.getElementById('txtNum2').value);
   
    if(numero){
        let mult = tabla(numero,rango);
        let result = condicion(mult);
        let consola = "";
        
        consola += `<div class="respuesta">`;
        consola += `${mult}`;
        consola += `</div>`;

        document.getElementById('operacion').innerHTML = consola;
    }else{
        alert("Por favor ingrese datos validos");
    }
    
    return false
}