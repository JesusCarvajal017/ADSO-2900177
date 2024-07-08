


window.addEventListener('load', ()=>{
    document.getElementById('calcular').addEventListener('submit', ()=>{
        let numberUno = parseFloat(document.getElementById('numberUno').value);
        let numberDos = parseFloat(document.getElementById('numberDos').value);
        
        if(numberUno && numberDos){
            let resultado = numberUno + numberDos;
            document.querySelector('.section-respuesta').innerText = `${numberUno} + ${numberDos} = ${resultado}`;
        }else{
            document.querySelector('.section-respuesta').innerHTML = `<img src="image/caritatriste.jpg" alt="carita triste">`;
        }

    })
})