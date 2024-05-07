/**
 * Autor: Esteban Palomar
 * Creación: Jesus Carvajal, Esteban Palomar
 */

// cantidad de personas
let cantidadP = 0;

// precios fijos de barberos
const precioCombo1 = 15000;
const precioCombo2= 20000;
const precioCombo3 = 250000;

// variables de sostenimiento
let b1 = 0;
let b2 = 0;
let b3 = 0;
let formatoNombre;
let menu;
let hora;

// menu de barberos
let menuBarberos = `\n 1.Barbero Arnol(Basico) precio: ${precioCombo1}\n 2. Barbero Jhoan(Especializado) precio : ${precioCombo2}\n 3. Barbero Manuel(profesional) precio: ${precioCombo3}\n`;
let cantidadPersonas = "¿Cuantos clientes desean reservar una cita?";
let erroValue = "Valor invalido, intente de nuevo";
let nombreCliente = "¿Cual es el nombre y apellido del cliente :";


// datos barberia
let personas = [];
let barberos = [
    [0],
    [0],
    [0]
];

let horario = [
    [],
    [],
    []
];

let nombreBarberos = [
    ["Arnol Martínez (Basico)", precioCombo1],
    ["Jhoan Lópezm (Especializado)", precioCombo2],
    ["Manuel Carvajal (Profesional)", precioCombo3]
]

// Inicio del programa
alert("Bienvenido a la Barbería SOLO MACHOS");
// cantidad de personas a registrar
cantidadP = valorCorrecto(cantidadPersonas);

// registrar personas
for(let i = 0; i < cantidadP; i++){
    formatoNombre = "";
    do{
        const inputMessage = formatoNombre === "" ? `${nombreCliente} ${i + 1}?` : `${nombreCliente}${i + 1}\n${erroValue}?`;
        let nombre = prompt(inputMessage)
        formatoNombre = nombreCorrecto(nombre);
    }while(formatoNombre == false);

    personas.push(formatoNombre) 
}

for(let i = 0; i < personas.length; i++){
    menu = 0;
    // Eleccion de barbero por parte del usuario
    do{
        let inputMessage = menu === 0 ? `${personas[i]}\n${menuBarberos}` : `${personas[i]}\n${menuBarberos}\n${erroValue}`;
        const input = prompt(`Señ@: ${inputMessage}`);
        menu = validationNumber(input);
    }while(menu <= 0 || menu > 3)

    // REGISTRO DE CLIENTES A LOS BARBEROS   
    if(menu == 1){
        barberos[0][b1] = personas[i];
        b1++;
    }else if(menu == 2){
        barberos[1][b2] = personas[i];
        b2++;
    }else{
        barberos[2][b3] = personas[i]; 
        b3++;
    }
}

for(let i = 0; i < barberos.length; i++){
    alert(`Agendamiento del barbero ${i +1} :`);
    let h1 = 0;
    // agendamiento de citas para cortes
    for(let m = 0; m < barberos[i].length; m++){
        // verificion de clientes 0 clientes
        if(barberos[i][m] == 0){
            horario[i][m] = 0;
            alert(`El barbero ${i + 1} no tiene clientes`)
            break; 
        }else{
            let horaAngendamiento = `Por favor, ${barberos[i][m]} ingrese la hora de la reserva (en formato militar - De 8 a 19 horas): `;
            do{
                if(hora < 8 || hora > 19){
                    notaInvalida = `\n\nHora fuera de servicio`
                }else{
                    notaInvalida = ``;
                }
                hora = valorCorrecto(horaAngendamiento + notaInvalida);
            }while(hora < 8 || hora > 19);
            horario[i][h1] = hora

            if(horario[i].length == 1){
                // console.log("No porque comparar")
            }else{
                if(horario[i].includes(hora)){
                    let horaAngendamiento = `Por favor, ${barberos[i][m]} ingrese la hora de la reserva (en formato militar - De 8 a 19 horas): \nBarbero no disponible a esa hora`;
                    do{
                        if(hora < 8 || hora > 19){
                            notaInvalida = `\n\nHora fuera de servicio`
                        }else{
                            notaInvalida = ``;
                        }
                        hora = valorCorrecto(horaAngendamiento + notaInvalida);
                    }while(hora < 8 || hora > 19 || hora == horario[i][m]);
                    horario[i][h1] = hora
                }else{
                    console.log("El barbero esta desocupado, si puedes")
                }
            }
            h1++;
        }
    };
}

// let inverntario
// for(let i = 0; i < barberos.length; i++){
//     for(let im = 0; i < barberos[i].length; im++){
        
//     }
// }

// ==================================  metodos de validacion y más  ==========================================
function validationNumber(input){
    if (/^[1-9]\d*$/.test(input)) { // /^\d+$/ expresion regular que verifica que sean numeros
        result = parseFloat(input);
    } else {
        result = false; 
    }
    return result;
}

function valorCorrecto(mensaje){
    let number = 0;
    do{
        const inputMessage = number === 0 ? mensaje : `${mensaje}\n${erroValue}`;
        const input = prompt(inputMessage);
        number = validationNumber(input);
    }while(number == false);

    return number;
}

function nombreCorrecto(input){
    if (/^[a-zA-Z]+\s[a-zA-Z]+$/.test(input)) {
        result = input;
    } else {
        result = false; // entrada no valida
    }
    return result; 
}