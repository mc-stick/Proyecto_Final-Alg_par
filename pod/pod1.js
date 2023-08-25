const express = require('express');
const app = express();
const port = 3000;

// Implementa aquí tus algoritmos de búsqueda y lógica
//BUSQUEDA BINARIA
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) return mid;
    if (array[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

const arr = [2,4,6,8,10,23,34,56,89,100];
const targetElement = 23;

const result = binarySearch(arr, targetElement);

console.log('\n\nBusqueda binaria.\n\n -> Lista de elementos en el array: { '+arr+' }');

if (result !== -1) {
  console.log(`El  ${targetElement} se encontró en el índice ${result} del array`);
} else {
  console.log(`El  ${targetElement} no se encontró en el array`);
}

//METODO DE BURBUJA
function metodo_urbuja(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Intercambia los elementos si están en el orden incorrecto
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

const v = [6, 4, 3, 1, 2, 14, 9];
console.log("\n\n\nMETODO DE BURBUJA.\n\nArray ingresado: { "+v+" }");
metodo_urbuja(v);



console.log("\n\nArray ordenado:", v);

app.get('/', (req, res) => {
  res.send('Metodo de borbuja.    '+v);
});

app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`);
});