const express = require('express');
const app = express();
const port = 3000;

// kubectl apply -f  nombre.yaml    -> crear
// kubectl get pods                 -> ver
// kubectl delete -f  nnombre.yaml  -> eliminar

// Implementa aquí tus algoritmos de búsqueda y lógica
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i; // Retorna el índice donde se encontró el elemento
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en el array
  }
  
  const arr = [3, 9, 2, 7, 5, 1];
  const targetElement = 7;
  
  const result = linearSearch(arr, targetElement);
  
  if (result !== -1) {
    console.log(`El elemento ${targetElement} se encontró en el índice ${result}`);
  } else {
    console.log(`El elemento ${targetElement} no se encontró en el array`);
  }


  //ALGORITMO DE SALTOS
//   function jumpSearch(array, target) {
//     const n = array.length;
//     const blockSize = Math.floor(Math.sqrt(n)); // Tamaño del bloque
//     let left = 0;
//     let right = blockSize;
  
//     // Realiza un salto hasta encontrar el bloque que contiene el elemento
//     while (right < n && array[right] <= target) {
//       left = right;
//       right += blockSize;
//       if (right > n - 1) {
//         right = n; // Evita que right supere el tamaño del array
//       }
//     }
  
//     // Realiza una búsqueda lineal en el bloque para encontrar el elemento
//     for (let i = left; i < right; i++) {
//       if (array[i] === target) {
//         return i; // Retorna el índice donde se encontró el elemento
//       }
//     }
  
//     return -1; // Retorna -1 si el elemento no se encuentra en el array
//   }
  
//   const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
//   const targetElement = 15;
  
//   const result = jumpSearch(arr, targetElement);
  
//   if (result !== -1) {
//     console.log(`El elemento ${targetElement} se encontró en el índice ${result}`);
//   } else {
//     console.log(`El elemento ${targetElement} no se encontró en el array`);
//   }

app.get('/', (req, res) => {
  res.send('Hello, Kubernetes!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});