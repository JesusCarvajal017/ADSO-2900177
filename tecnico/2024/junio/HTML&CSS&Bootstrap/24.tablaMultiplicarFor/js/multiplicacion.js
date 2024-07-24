/*
tablas de multiplicar
autor: Juan M. Gutierrez
fecha: 24 de junio de 2024
*/
let par = 0;
let impar = 0;
function tablaMult(numero,rango){
    let tabla; 
    let contador;
    let consola = "";
    num = numero;
    ran = rango;

    for(tabla=1;tabla <= num;tabla++){
        for(contador=1;contador <= rango;contador++){
            resultado = tabla * contador;
            consola += `${tabla}x${contador}=${resultado} `;
            consola += `${condicion(resultado)} <br>`;
        }
        consola += "\n";    
    }
   return `${consola} El total de números pares es: ${par} <br>
   El total de números impares es: ${impar}`;
}
function condicion(resultado){
    if(resultado %2==0){
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
        let mult = tablaMult(numero,rango);
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