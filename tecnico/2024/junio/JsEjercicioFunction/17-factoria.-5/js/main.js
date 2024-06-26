/**
 * saludo - hola mundo 
 * autor: Jesus Fernando Carvajal Anacona
 * fecha creacion: martes 03 de abril
*/

function factorial(numero) {
    if (numero == 0) {
        return 1;
    } else {
        return factorial(numero - 1) * numero;
    }
}