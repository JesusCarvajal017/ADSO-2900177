
let form = document.getElementById('frmPorcentaje');
let pantallaRta = document.querySelector('.section-respuesta')

function porcentajeNota(prcntje, nota){
    let prcntjeNota = prcntje;
    let resultado;
    if(prcntjeNota){
        let oprdorPrcn = prcntjeNota / 100;
        resultado = nota * oprdorPrcn;
    }
    else{
        resultado = NaN;
    }
    
    return resultado; 
}

function promedioNotas(event){
    event.preventDefault();
    let nota1 = document.getElementById('notaUno').value;
    let nota2 = document.getElementById('notaDos').value;
    let nota3 = document.getElementById('notaTres').value;

    let prc1 = document.getElementById('prc1').value;
    let prc2 = document.getElementById('prc2').value;
    let prc3 = document.getElementById('prc3').value;

    if(nota1 && nota2 && nota3 && prc1 && prc2 && prc3){

        let ntPr1 = porcentajeNota(prc1, nota1);
        let ntPr2 = porcentajeNota(prc2, nota2); 
        let ntPr3 = porcentajeNota(prc3, nota3); 


        let notaFinal = ntPr1 + ntPr2 + ntPr3;
        
        pantallaRta.innerText = notaFinal.toFixed(1);
    }else{
        pantallaRta.innerHTML = `<img src="image/caritatriste.jpg" alt="carita triste">`;
    }
    return true;
}

form.addEventListener('submit', promedioNotas)
