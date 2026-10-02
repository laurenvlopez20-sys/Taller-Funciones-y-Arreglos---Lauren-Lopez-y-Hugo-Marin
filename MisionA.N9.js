const llegada = [320, 1200, 75, 980, 510];
 
// 1. Copia sin comparador (ordena como texto)
console.log([...llegada].sort());                  // [ 1200, 320, 510, 75, 980 ]
 
// 2. Copia de mayor a menor
console.log([...llegada].sort((a, b) => b - a));   // [ 1200, 980, 510, 320, 75 ]
 
// 3. El original sigue igual
console.log(llegada);                              // [ 320, 1200, 75, 980, 510 ]
 
// 4. Sin copia: el original queda ordenado para siempre (ejecútalo al final)
llegada.sort((a, b) => b - a);
console.log(llegada);                              // [ 1200, 980, 510, 320, 75 ]