//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


// Previene que el from se submitee y nos recargue la página
const $form = document.querySelector('form'); 
$form.addEventListener('submit', function (e) {
  e.preventDefault();
  return false;
})

function manejarClickCalcular() {
  const horas = document.querySelector('#horas').value;
  const minutos = document.querySelector('#minutos').value;
  const segundos = document.querySelector('#segundos').value;

  const tiempoTotal = (horas * 3600) + (minutos * 60) + segundos;
  const $tiempoTotalElement = document.querySelector('strong');
  $tiempoTotalElement.innerText = `El tiempo total es ${tiempoTotal} segundos`;
}

const $botonCalcular = document.querySelector('#calcular-tiempo-videos');
$botonCalcular.addEventListener('click', manejarClickCalcular);

//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
