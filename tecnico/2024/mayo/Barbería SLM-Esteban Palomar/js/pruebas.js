const barberos = [
    {
        nombre: "arnol",
        nivel: "Practicante",
        valor_servicio: 15000,
        
        clientes: [],
    },
    {
        nombre: "Jhoan",
        nivel: "Especialista",
        valor_servicio: 20000,
        clientes: [],
    },
    {
        nombre: "manuel",
        nivel: "Profesional",
        valor_servicio: 25000,
        clientes: [],
    },
];


// barberos[0].clientes[i]= "jesus"
let personas = [];
let cantidad = parseInt(prompt("Cuantos clientes desea ingresar: "));

for(let i = 0; i < cantidad; i++){
    let nombre = prompt(`Dijite el nombre de la persona ${i + 1} : `);
    personas.push(nombre); 
}

let menu = 0; 
for(let i = 0; i < personas.length; i++){
    menu = parseInt(prompt("Elija del 1 a 3"))
    if(menu == 1){
        barberos[0].clientes.push(personas[i]);
    }else if(menu == 2){
        barberos[1].clientes.push(personas[i]);
    }else{
        barberos[2].clientes.push(personas[i]);
    }
}




// console.log(barberos)

barberos.forEach((data, i)=>{
    console.log(data)
});