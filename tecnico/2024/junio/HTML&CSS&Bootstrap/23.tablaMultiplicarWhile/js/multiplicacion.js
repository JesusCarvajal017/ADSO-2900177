/*
tablas de multiplicar
autor: Juan M. Gutierrez
fecha: 24 de junio de 2024
*/
let par = 0;
let impar = 0;
function multTabla(numero, rango){
    let tabla = 1; 
    let contador = 0;
    let consola = "";
    ran = rango;
    num = numero;

    while(tabla <= num){
        contador = 0;
        while(contador < rango){
            contador++;
            multiplicacion = tabla * contador;
            consola += `${tabla}x${contador}=${multiplicacion} `;
            consola += `${condicion(multiplicacion)} <br>`;
        }
        tabla++
        consola += "\n";    
    }
   return `${consola} El total de números pares es: ${par} <br> 
   El total de números impares es: ${impar}`;
}
function condicion(multiplicacion){
    if(multiplicacion %2==0){
        par = par + 1;
        return "Buzz";                                                      
    }else{
        impar = impar + 1;
        return "Bass";
    }
}
function operar(){
    let numero = parseFloat(document.getElementById('txtNum').value);
    let rango = parseFloat(document.getElementById('txtNum2').value);
   
    if(numero){
        let mult = multTabla(numero,rango);
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