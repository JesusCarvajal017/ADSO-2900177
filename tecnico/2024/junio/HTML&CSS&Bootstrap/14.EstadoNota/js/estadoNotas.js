/*
esatdo notas
autor: Juan M. Gutierrez
fecha: 24 de junio de 2024
*/
function notas(notaNumero1,notaNumero2,notaNumero3){
    not1 = notaNumero1;
    not2 = notaNumero2;
    not3 = notaNumero3;
    let porcentaje1 = not1 * 0.2;
    let porcentaje2 = not2 * 0.35;
    let porcentaje3 = not3 * 0.45;
    let sumaTotal = porcentaje1 + porcentaje2 + porcentaje3;
    return sumaTotal
}
function condicion(sumaTotal){ 
    if(sumaTotal > 4.5){
        return "La nota "+sumaTotal+" es superior";
    }else{
        if(sumaTotal <= 4.5 && sumaTotal > 3.5){
            return "La nota "+sumaTotal+" es buena";
        }else{
            if(sumaTotal <= 3.5 && sumaTotal >= 3.0){
                return "La nota "+sumaTotal+" es media";
            }else{
                return "La nota "+sumaTotal+" es mala";
            }
        }
    }
}
function operar(){
    let nota1 = parseFloat(document.getElementById('txtNota1').value);
    let nota2 = parseFloat(document.getElementById('txtNota2').value);
    let nota3 = parseFloat(document.getElementById('txtNota3').value);
    
    if(nota1 && nota2 && nota3){
        let promedio;
        let consola = "";
        let total;
        promedio = notas(nota1, nota2, nota3);
        siu = Math.round(promedio);
        total = condicion(siu);
        consola += `<div class="respuesta">`;
        consola += `<strong>${total}</strong>`;
        consola += `</div>`;

        document.getElementById('operacion').innerHTML = consola;
    }else{
        alert("Por favor ingrese datos validos");
    }
    
    return false
}