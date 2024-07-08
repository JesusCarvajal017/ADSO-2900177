
let form = document.getElementById('frmPorcentaje');
let pantallaRta = document.querySelector('.section-respuesta')

function porcentaje(event){
    event.preventDefault();
    let number = document.getElementById('numberUno').value;
    if(number){
        let floatPorcent = (number / 100);
        let longitud = floatPorcent.toString().length;
        let decimales = longitud > 5 ? 4 : 2; 
        
        pantallaRta.innerText = floatPorcent.toFixed(decimales);
    }else{
        pantallaRta.innerHTML = `<img src="image/caritatriste.jpg" alt="carita triste">`;
    }
    return true;
}

form.addEventListener('submit', porcentaje)