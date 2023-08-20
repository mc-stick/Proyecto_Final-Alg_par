const express = require('express');
const app = express();
const port = 3000;

// kubectl apply -f  nombre.yaml    -> crear
// kubectl get pods                 -> ver
// kubectl delete -f  nnombre.yaml  -> eliminar


function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i; 
      }
    }
    return -1; 
  }
  
  const arr = [3, 9, 2, 7, 5, 1];
  const targetElement = 7;
  
  const result = linearSearch(arr, targetElement);
  
  if (result !== -1) {
    console.log(`El elemento ${targetElement} se encontró en el índice ${result}`);
  } else {
    console.log(`El elemento ${targetElement} no se encontró en el array`);
  }

app.get('/', (req, res) => {
  res.send('Hello, Kubernetes!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});