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

  console.log("ALGORITMO DE SALTOS. \n\nArreglo = { "+arr+" } ")
  
  const result = jumpSearch(arr, targetElement);
  
  if (result !== -1) {
    console.log(` ${targetElement} se encontró en el índice ${result}`);
  } else {
    console.log(` ${targetElement} no se encontró en el array`);
  }

  //BUSQUEDA LINEAL.

  function linearSearch(arrayl, targetl) {
    for (let i = 0; i < arrayl.length; i++) {
      if (arrayl[i] === targetl) {
        return i; 
      }
    }
    return -1; 
  }
  
  const arrl = [3, 9, 2, 7, 5, 1];
  const targetElementl = 7;
  
  const resultl = linearSearch(arrl, targetElementl);
  
  console.log("\n\nALGORITMO DE BUSQUEDA LINEAL. \n\nArreglo lineal = { "+arr+" } \n")
  if (resultl !== -1) {
    console.log(` ${targetElementl} se encontró en el índice ${resultl}`);
  } else {
    console.log(` ${targetElementl} no se encontró en el array`);
  }


app.get('/', (req, res) => {
  res.send('esta funcionando...');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});