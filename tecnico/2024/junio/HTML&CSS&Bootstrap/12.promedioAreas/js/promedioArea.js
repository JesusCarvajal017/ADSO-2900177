/*
promedio de areas
autor: Juan M. Gutierrez
fecha: 26 de junio de 2024
*/

function areaCuadrado(lado){
    let ladoCuadrao = lado;
    let area;
    area = ladoCuadrao * ladoCuadrao;
    return area;
}
function condicion(area1,area2,area3){
    let areaCu1 = area1;
    let areaCu2 = area2;
    let areaCu3 = area3;
    let consola = "";
    if(areaCu1 == areaCu2 && areaCu1 == areaCu3 && areaCu3 == areaCu2){
        consola = "Las tres areas son iguales";
    }else{
        if(areaCu1 > areaCu2 && areaCu1 > areaCu3){
            consola = "La primer area "+areaCu1+" es mayor";  
        }else{
            if(areaCu2 > areaCu1 && areaCu2 > areaCu3){
                consola = "La segunda area "+areaCu2+" es mayor";
            }else{
                consola = "La tercer area "+areaCu3+" es mayor";
            }
        }
    }
    return consola;
}


function mandar(){
    let ladoUno = document.getElementById('txtlado1').value;
    let ladoDos = document.getElementById('txtlado2').value;
    let ladoTres = document.getElementById('txtlado3').value;

    if(ladoUno && ladoDos && ladoTres){
        let areaCuUno = areaCuadrado(ladoUno);
        let areaCuDos = areaCuadrado(ladoDos);
        let areaCuTres = areaCuadrado(ladoTres);

        let areas = condicion(areaCuUno, areaCuDos, areaCuTres);

        document.getElementById('operacion').innerHTML = `<div class="respuesta">${areas}</div>`;
    }else{
        document.getElementById('operacion').innerHTML = "Digite datos validos"
    } 
    return false;  
}