// :::::::::::: rangos de conteo para validacion ::::::::::::
let rangoMenu = /^[1-3]$/; 
let rangoSuperior = /^[1-9]\d*$/;
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// variables de apoyo
let opcionPrincipal;
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// mensajes de pantalla validaciones, errores etc
let erorNumber = "Valor invalido, intente nuevamente";
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Datos del restauranten
const menu = [
    {
        "opcion" : 'Almuerzos completo',
        "submenu": [
            {
                "nombrePlato": 'sancocho y pollo sudado',
                "precio": 2000,
            },
            {
                "nombrePlato": 'crema de verdura y alitas BBQQ',
                "precio": 4000,
            },
            {
                "nombrePlato": 'sancocho y pollo sudado',
                "precio": 8000,
            },
        ]
    },
    {
        "opcion" : 'Bandeja',
        "submenu": [
            {
                "nombrePlato": 'pollo sudado',
                "precio": 2000,
            },
            {
                "nombrePlato": 'alitas BBQQ',
                "precio": 4000,
            },
            {
                "nombrePlato": 'pechuga gratinada',
                "precio": 8000,
            },
        ]
    },
    {
        "opcion" : 'Sopa',
        "submenu": [
            {
                "nombrePlato": 'sancocho',
                "precio": 2000,
            },
            {
                "nombrePlato": 'crema de verdura',
                "precio": 4000,
            },
            {
                "nombrePlato": 'sopa de maiz',
                "precio": 8000,
            },
        ]
    },
];
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// inicio del programa 
opcionPrincipal = menuPrincipal(menu); // peticion del menu
subMenu(menu,opcionPrincipal);

// const mesas = [1,2,3,4,5,6];
// let resultado ;
// const puestos = [
//     [5],
//     [5],
//     [5],
//     [5],
//     [5],
// ];


// let peticionGrupos = `Cuantos grupos va a registrar: `;

// alert("Bienvenido al restaurante Ingrind");
// let cantidadGrupos = numberValidar(peticionGrupos);

// // ubicacion de la mesa
// let ubicacionMesa = 



// menu.forEach((data,i)=> {
//     console.log(`${i + 1}. ${data.opcion}`);
//     console.log(`${data.submenu.forEach((datai)=>{
//         console.log(`------${datai.nombrePlato}`);
//     })}`);
// });


// const restaurante = [
//     {
//         "nombre" : 'juan david',
//         "personas": [
//             {
//                 "nombre": "juan david",
//                 "pedido": "sancocho",
//                 "precioPedido": 10000
//             },
//         ],
//         "totalPagar": 7000,
//         "mesa" : 34,
//     },
//     {
//         "nombre" : 'juan david',
//         "invitados": [],
//         "totalPagar": 7000,
//     }
// ];


// validar numero valido: entero positivo
function validationNumber(input,rango){
    if (rango.test(input)) { // /^\d+$/ expresion regular que verifica que sean numeros
        result = parseFloat(input);
    } else {
        result = false; 
    }
    return result;
} 

// ^[1-9]\d*$
// ^[1-3]\d*$

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

// muestra menu principal y arroja valor para submenu
function menuPrincipal(info = []){
    let pantalla = info;
    let salida = "";
    pantalla.forEach((data, i)=>{
        salida += `${i + 1}. ${data.opcion}\n`;
    });

    let opcion = numberValidar(salida,erorNumber,rangoMenu);
    return opcion;
}

function subMenu(info = [],opcion){
    let pantalla = info;
    let salida = "";
    let subMenuu = pantalla[opcion - 1].submenu 
    subMenuu.forEach((data, i)=>{
        salida += ``
    })
}