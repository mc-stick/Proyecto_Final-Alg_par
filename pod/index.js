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

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
const targetElement = 15;

const result = binarySearch(arr, targetElement);

if (result !== -1) {
  console.log(`El elemento ${targetElement} se encontró en el índice ${result}`);
} else {
  console.log(`El elemento ${targetElement} no se encontró en el array`);
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

const v = [64, 34, 25, 12, 22, 11, 90];
metodo_urbuja(v);

console.log("Array ordenado:", v);

app.get('/', (req, res) => {
  res.send('Hello, Kubernetes!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});