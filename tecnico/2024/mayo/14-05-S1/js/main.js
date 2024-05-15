/**
 * ejercicio de arreglo llave: valor - key: value
 * 15 de mayo de 2024
 * Autor: Jesus  carvajal
 */

let factura = [];
let totalGanacias = 0;
factura = [
    {codigo: 1, nombreProducto: 'Malteada', cantidad: 2,  valorUnidad: 12000},
    {codigo: 2, nombreProducto: 'Pica', cantidad: 3, valorUnidad: 25000},
    {codigo: 3, nombreProducto: 'Hamburguesa mixta', cantidad: 4,  valorUnidad: 16000},
    {codigo: 4, nombreProducto: 'Churrrasco', cantidad: 1, valorUnidad: 25000},
    {codigo: 5, nombreProducto: 'Gaseosa', cantidad: 5, valorUnidad: 5000},
    {codigo: 6, nombreProducto: 'Limona', cantidad: 5,  valorUnidad: 6000},
];

// mostrar la factura
let pantalla = "";
let productoGanacias;

factura.forEach(data =>{
    productoGanacias = data.valorUnidad * data.cantidad;
    totalGanacias += productoGanacias;
    pantalla += ` ======= Producto ${data.codigo} ======== \n`;
    pantalla += `Nombre del producto: ${data.nombreProducto}\n`;
    pantalla += `Precio por unidad: $${data.valorUnidad}\n`;
    pantalla += `Cantidad del producto: ${data.cantidad}\n`;
    pantalla += `Total pagar producto: $${productoGanacias}\n`;
    pantalla += `============================================`;
    pantalla += `\n`
});

console.log(pantalla)
console.log(`Total a pagar: $${totalGanacias}`)