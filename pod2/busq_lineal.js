const express = require('express');
const appl = express();
const portl = 3000;

// kubectl apply -f  nombre.yaml    -> crear
// kubectl get pods                 -> ver
// kubectl delete -f  nnombre.yaml  -> eliminar


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
  
  if (resultl !== -1) {
    console.log(`El elemento ${targetElementl} se encontró en el índice ${resultl}`);
  } else {
    console.log(`El elemento ${targetElementl} no se encontró en el array`);
  }

appl.get('/', (req, resl) => {
  resl.send('Hello, Kubernetes!');
});

app.listen(portl, () => {
  console.log(`App listening at http://localhost:${portl}`);
});