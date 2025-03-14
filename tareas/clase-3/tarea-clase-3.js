// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


const nombre = prompt('Ingrese su nombre');
const miNombre = 'franco';
const miHna = 'laura';
miEdad = 31;

if (nombre.toLowerCase() === miNombre) {
    console.log('Hola, Tocayo! Yo también me llamo ' + nombre);
}
else if (nombre.toLowerCase() === 'Laura') {
    console.log('Hola ' + nombre + ' te llamás igual que mi hermana');
}
else {
    console.log('Hola ' + nombre + '!');
}


const edadUsuario = Number(prompt('Ingrese su edad'));
if (edadUsuario > miEdad) {
    console.log(nombre + '¿Sabías que sos mas grande que yo?');
}
else if (edadUsuario < miEdad) {
    console.log('¿Sabías que sos mas chico que yo?');
}
else {
    console.log('Tenes la misma edad que yo!');
}

const documento = prompt('¿Tenes documento?').toLowerCase();

const edadAdulto = 18;

if (documento === 'si') {
    const edad = Number(prompt('Cuál es tu edad?'));
    if (edad >= edadAdulto) {
        console.log('Puedes entrar al bar');
    }
    else {
        console.log('No puedes entrar al bar');
    }
}
else if (documento === 'no') {
    console.log('No puedes entrar al bar');
}
else {
    console.log('No entiendo la respuesta');
}