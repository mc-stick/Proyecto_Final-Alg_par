const express = require('express');
const app = express();
const port = 3000;

  //ALGORITMO DE SALTOS
  function jumpSearch(array, target) {
    const n = array.length;
    const blockSize = Math.floor(Math.sqrt(n)); 
    let left = 0;
    let right = blockSize;
  
    
    while (right < n && array[right] <= target) {
      left = right;
      right += blockSize;
      if (right > n - 1) {
        right = n; 
      }
    }
  
    
    for (let i = left; i < right; i++) {
      if (array[i] === target) {
        return i; 
      }
    }
  
    return -1; 
  }
  
  const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
  const targetElement = 15;
  
  const result = jumpSearch(arr, targetElement);
  
  if (result !== -1) {
    console.log(`El elemento ${targetElement} se encontró en el índice ${result}`);
  } else {
    console.log(`El elemento ${targetElement} no se encontró en el array`);
  }

app.get('/', (req, res) => {
  res.send('esta funcionando...');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});