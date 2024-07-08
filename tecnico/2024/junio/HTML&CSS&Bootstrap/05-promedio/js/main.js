
let form = document.getElementById('frmPorcentaje');
let pantallaRta = document.querySelector('.section-respuesta')

function promedioNotas(event){
    event.preventDefault();
    let nota1 = document.getElementById('notaUno').value;
    let nota2 = document.getElementById('notaDos').value;
    let nota3 = document.getElementById('notaTres').value;

    if(nota1 && nota2 && nota3){
        let promedio = (nota1 + nota2 + nota3)/3;
        let longitud = promedio.toString().length;
        let decimales = longitud > 5 ? 4 : 2; 
        
        pantallaRta.innerText = promedio.toFixed(decimales);
    }else{
        pantallaRta.innerHTML = `<img src="image/caritatriste.jpg" alt="carita triste">`;
    }
    return true;
}

form.addEventListener('submit', promedioNotas)
