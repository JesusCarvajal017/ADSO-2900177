// :::::::::::: rangos de conteo para validacion ::::::::::::
let rangoMenu = /^[1-3]$/; // rango de 1 a tres
let rangoF = /^[1-2]$/; // rango de 1 a tres
let rangoFactu = /^[1-4]$/; // rango de 1 a tres
let rangoHora = /^(1[0-9]|1[89]|8|9)$/; // rango de 1 a tres
let rangoSuperior = /^[1-9]\d*$/; // todo numero entero positivo mayor a 0
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// variables de apoyo
let opcionPrincipal;
let clientes;
let nombreAp; // nombre y apellido de persona
let menuBarberos;
let pantalla;
let opcion;
let cliente;
let facturacion = "";
let opcionFactura;
let facturaIndividual = ""; 
let barberoLocation;
let infoFactura = "";
let optfinish;
let ganacialocal;
let ganaciaTotal = 0;
let montoDinero = [];
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// mensajes de pantalla validaciones, errores etc
let erorNumber = "Valor invalido, intente nuevamente";
let errorNombre = "Formato o tipo no valido"
let fueraRg = "Recuerde que el horario es de 8 -19, intente nuevamente";
let peticionClientes ="¿Cuantos clientes desean reservar una cita?";
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const precioCombo1 = 15000;
const precioCombo2= 20000;
const precioCombo3 = 25000;
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ...... data de la barberia .........
let barberia = [
    {
        nombre_barbero: 'Arnol',
        nivel_profesion: 'Basico',
        precio_servicio: precioCombo1,
        clientes: [],
        gananciaTotal: 100000
    },
    {
        nombre_barbero: 'Jhoan',
        nivel_profesion: 'Especializado',
        precio_servicio: precioCombo2,
        clientes: [],
        gananciaTotal: 100000
    },
    {
        nombre_barbero: 'Manuel',
        nivel_profesion: 'Profesional',
        precio_servicio: precioCombo3,
        clientes: [],
        gananciaTotal: 100000
    },
];

let userPeticion = [];
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// inicio del programa
alert("Bienvenido a la Barbería SOLO MACHOS");
clientes = numberValidar(peticionClientes,erorNumber);

for(let i = 0; i<clientes; i++){
    let msj = `NOMBRE Y APELLIDO del cliente N° ${i + 1}: `;
    let info = "";
    let pase = true;
    do{
        info = pase == true ? msj : `${msj}\n\n${errorNombre}`
        pantalla = prompt(info)
        nombreAp = nombreCorrecto(pantalla);
        pase = nombreAp == false ? false : true;
    }while(nombreAp == false)
    
    userPeticion.push(nombreAp)
}

for(let i = 0; i < userPeticion.length; i++){
    let salida = `Estimado cliente ${userPeticion[i]} escoja su barbero:\n`;
    barberia.forEach((data, i)=>{
        salida += `${i + 1}. ${data.nombre_barbero} (${data.nivel_profesion}) $${data.precio_servicio}\n`;
    });
    opcion = numberValidar(salida,erorNumber,rangoMenu);
    cliente = { nombre: userPeticion[i], hora_agendada: 0};
    barberia[opcion - 1].clientes.push(cliente);
}

barberia.forEach((data,i)=>{
    alert(`Angendamiento del barbero ${data.nombre_barbero} (${data.nivel_profesion} :`);
    if(data.clientes.length == 0){
        alert("No tiene clientes")
    }else{
        data.clientes.forEach((cliente, i) =>{
            let msj = `Estimado cliente ${cliente.nombre} ingrese la hora de la reserva\n(en formato militar - De 8 a 19 horas):`;
            let hora = numberValidar(msj,fueraRg, rangoHora);
            cliente.hora_agendada = hora; 
            if(i == 0){
                console.log('no hay necesidad de comparar')
            }else{
                if(data.clientes[i - 1].hora_agendada == hora){
                    let msj = `Estimado cliente ${cliente.nombre} ingrese la hora de la reserva\n(en formato militar - De 8 a 19 horas):\nLa hora dada ya esta resservada por otro cliente`;
                    do{
                        hora = numberValidar(msj,fueraRg, rangoHora);
                    }while(hora == data.clientes[i - 1].hora_agendada); 
                    cliente.hora_agendada = hora;
                }else{
                    console.log('hora disponible');
                }
            }
        })
    }
});
// ganacias recolectadas
barberia.forEach((data)=>{
    let monto =  data.clientes.length  * data.precio_servicio;
    montoDinero.push(monto);
});
// sumatoria de ganacias totales 
for(let i = 0; i<montoDinero.length; i++){
    ganaciaTotal += montoDinero[i]; 
};
// menu de inventario 
do{
    infoFactura = "";
    facturacion = `========== Inventario de la barberia ==========\n`;
    facturacion += `Ganacias individuales: \n`;
    barberia.forEach((data, i) =>{
        facturacion += `${i + 1}. ${data.nombre_barbero} (${data.nivel_profesion})\n`;
    });
    facturacion += `========== ganacia global ========== \n`;
    facturacion += `4. Ganancia total de la barberia`;

    opcionFactura = numberValidar(facturacion,erorNumber,rangoFactu)
    // indiceB = opcionFactura - 1;
    barberoLocation = barberia[opcionFactura - 1];

    if(opcionFactura == 4){
        barberia.forEach((data, i)=>{
            infoFactura += `========== ganacias totales ===========\n`;
            infoFactura += `${data.nombre_barbero} : clientes: ${data.clientes.length}  -- ganacia generada: $${montoDinero[i]}\n`;
        });
        infoFactura+= `......................................................................`
        infoFactura+=`\n ganacias total de la barberia: $${ganaciaTotal}`;
        infoFactura+= `......................................................................`
        infoFactura += `\nPara volver al menu de facturación digite 1, si quiere salir de todo el sistema 2:`;
    }else{
        infoFactura += `======= Barbero: ${barberoLocation.nombre_barbero} (${barberoLocation.nivel_profesion}) ======\n`;
        infoFactura += `Precio del servicio : ${barberoLocation.precio_servicio}\n`; 
        barberoLocation.clientes.forEach((data, i)=>{
            infoFactura += `${i + 1}. ${data.nombre}\n -> Hora de reserva: ${data.hora_agendada}:00\n`;
        });
        ganacialocal = barberoLocation.precio_servicio * barberoLocation.clientes.length; 

        infoFactura += `\nganacias del barbero: $${ganacialocal}\n`; 
        infoFactura += `\nPara volver al menu de facturación digite 1, si quiere salir de todo el sistema 2:`;
    }
    optfinish = numberValidar(infoFactura,erorNumber,rangoF)
}while(optfinish == 1)
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// funciones complementarias al programa
// -----> funcion que valida un tipo numerico segun su expresion regular
function validationNumber(input,rango){
    if (rango.test(input)) { // /^\d+$/ expresion regular que verifica que sean numeros
        result = parseFloat(input);
    } else {
        result = false; 
    }
    return result;
}
function numberValidar(mensaje,msjError,rangox = /^[1-9]\d*$/){
    let pase = true;
    let info;
    do{
        info = pase === true ? mensaje : `${mensaje}\n\n${msjError}`;
        let input = prompt(info);
        resultado = validationNumber(input,rangox);
        pase = resultado == false ? false : true;
    }while(resultado == false);

    return resultado;
}
function nombreCorrecto(input){
    if (/^[a-zA-Z]+\s[a-zA-Z]+$/.test(input)) {
        result = input;
    } else {
        result = false; // entrada no valida
    }
    return result; 
}