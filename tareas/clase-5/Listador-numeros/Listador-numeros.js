//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $numeros = document.querySelectorAll('.numero');
const $calcularPromedio = document.querySelector('#calcularPromedio');

$calcularPromedio.addEventListener('click', function(){
  document.querySelector('#promedio').textContent = Math.round(calcularPromedio($numeros));
  document.querySelector('#masChico').textContent = obtenerMasChico($numeros);
  document.querySelector('#masGrande').textContent = obtenerMasGrande($numeros);
  document.querySelector('#masFrecuente').textContent = obtenerMasFrecuente($numeros);
});

function calcularPromedio($numeros){
let suma = 0;
  for(let i=0; i<$numeros.length; i++){
    suma += Number($numeros[i].value);
  }
  promedio = suma / $numeros.length;
  return promedio
}

function obtenerMasGrande($numeros){
  let masGrande = 0;
  for(let i=0; i<$numeros.length; i++){
    if($numeros[i].value > masGrande){
      masGrande = $numeros[i].value;
    }
  }
  return masGrande;
}

function obtenerMasChico($numeros){
  let masChico = $numeros[0].value;
  for(let i=0; i<$numeros.length; i++){
    if($numeros[i].value < masChico){
      masChico = $numeros[i].value;
    }
  }
  return masChico;
}

function obtenerMasFrecuente() {
  const frecuencias = {};
  for (let i = 0; i < $numeros.length; i++) {
    const numero = Number($numeros[i].value);
    if (frecuencias[numero]) {
      frecuencias[numero]++;
    } else {
      frecuencias[numero] = 1;
    }
  }
  let maximo = 0;
  let numeroMasFrecuente;
  for (const numero in frecuencias) {
    if (frecuencias[numero] > maximo) {
      maximo = frecuencias[numero];
      numeroMasFrecuente = numero;
    }
  }
  return numeroMasFrecuente;
}

// Previene que el from se submitee y nos recargue la página
const $form = document.querySelector('form');
$form.addEventListener('submit', function (e) {
  e.preventDefault();
  return false;
})