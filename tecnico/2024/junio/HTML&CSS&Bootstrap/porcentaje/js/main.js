


window.addEventListener('load', ()=>{

    let num1;
    let num2;

    function suma(num1, num2){
        let sumar;
        numero1 = num1;
        numero2 = num2;
        sumar = numero1 + numero2;
        return sumar;
    }

    function resta(num1,num2){
        let restar;
        numero1 = num1;
        numero2 = num2;
        restar = numero1 - numero2;
        return restar;
    }
    function multiplicacion(num1,num2){
        let multiplicar;
        numero1 = num1;
        numero2 = num2;
        multiplicar = numero1 * numero2;
        return multiplicar;
    }
    function division(num1,num2){
        let dividir;
        numero1 = num1;
        numero2 = num2;
        dividir = numero1 / numero2;
        return dividir;
    }
    
    let botonCalcular = document.getElementById('btnCalcular');
    let optionOperator = 0;

    document.getElementById('optionesOperaciones').addEventListener('change', ()=>{
        let opcion = document.getElementById('optionesOperaciones').value;

        const simbol = {
            "0": '',
            "1": '<i class="fa-solid fa-plus"></i><br>',
            "2": '<i class="fa-solid fa-minus"></i><br>',
            "3": '<i class="fa-solid fa-x"></i><br>',
            "4": '<i class="fa-solid fa-divide"></i><br>',
        }

        if(simbol[opcion] != 0){
            document.getElementById('operacionSimbol').innerHTML = simbol[opcion];
            optionOperator = opcion;
            botonCalcular.style = 'display: block';
        }else{
            optionOperator = 0;
            document.getElementById('operacionSimbol').innerHTML = simbol[opcion]
            botonCalcular.style = 'display: none';
        }
    })

    document.getElementById('calcular').addEventListener('submit', ()=>{
        let numberUno = parseFloat(document.getElementById('numberUno').value);
        let numberDos = parseFloat(document.getElementById('numberDos').value);

        if(!isNaN(numberUno) && !isNaN(numberDos)){
            const optionOperacion = {
                "0": '<img src="image/caritatriste.jpg" alt="carita triste">',
                "1": suma(numberUno, numberDos),
                "2": resta(numberUno, numberDos),
                "3": multiplicacion(numberUno, numberDos),
                "4": division(numberUno, numberDos),
            }
            let resultado = optionOperacion[optionOperator];

            document.querySelector('.section-respuesta').innerHTML = `${resultado}`;
        }else{
            document.querySelector('.section-respuesta').innerHTML = `<img src="image/caritatriste.jpg" alt="carita triste">`;
        }

        

    })
})