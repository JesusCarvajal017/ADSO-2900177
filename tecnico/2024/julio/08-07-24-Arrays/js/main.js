let arreglo = [];
let iteracion;
let resultado = "";
let numero;

arreglo = [1,2,3,4,5,6,7,8,9,10];

for(iteracion=0;iteracion<arreglo.length;iteracion++){
    resultado += '<option>'+arreglo[iteracion]+'</option>';
}
document.getElementById('lista-numero-uno').innerHTML = resultado;

arreglo = [];
for(iteracion=0;iteracion<10; iteracion++){
    numero = iteracion + 1;
    arreglo.push(numero);
}

resultado = "";
for(iteracion=0;iteracion<arreglo.length;iteracion++){
    resultado += '<option>'+arreglo[iteracion]+'</option>';
}
document.getElementById('lista-numero-dos').innerHTML = resultado;

arreglo = [];
let limite = 5;
let factor = 1;

for(iteracion=1;iteracion <= limite; iteracion++){
    factor *= iteracion;
    arreglo.push(factor);
}
resultado = "";
for(iteracion=0;iteracion<arreglo.length;iteracion++){
    resultado += '<tr>'+'<th>'+arreglo[iteracion]+'</th>'+'</tr>';
}
document.getElementById('lista-numero-tres').innerHTML = resultado;

// let estilosJuan = {
//     "color": '#ffffff;',
//     "font-size" : "20px;",
//     "font-family": "'Times New Roman';",
//     "background-color": "#000000;",
//     "width": "200px;",
//     "height": "300px;",
//     "border": "1px solid;",
// }


// let estilos = ""; 
// for(let valor in  estilosJuan){
//     estilos += `${valor}: ${estilosJuan[valor]}\n`
// }

// console.log(estilos)

// document.querySelector('.hola').setAttribute('style', estilos);