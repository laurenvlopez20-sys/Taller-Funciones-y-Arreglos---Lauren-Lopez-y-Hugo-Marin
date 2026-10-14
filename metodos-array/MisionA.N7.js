const partidas = [320, 980, 75, 640, 500, 1200, 410];
 
const clasificados = partidas.filter(p => p >= 500); // incluye el 500 exacto
const podio = partidas.filter(p => p > 900);
const eliminados = partidas.filter(p => p < 500);
const imposible = partidas.filter(p => p > 5000);
 
console.log("Clasificados:", clasificados);            // [ 980, 640, 500, 1200 ]
console.log("Podio:", podio, "->", podio.length);      // [ 980, 1200 ] -> 2
console.log("Eliminados:", eliminados);                // [ 320, 75, 410 ]
console.log("Suma de length:", clasificados.length + eliminados.length); // 7
console.log("Imposible:", imposible);                  // []
 