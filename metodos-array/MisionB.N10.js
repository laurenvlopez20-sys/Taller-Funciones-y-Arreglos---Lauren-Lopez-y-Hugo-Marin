const partidas = [
  { nombre: "Ana", pts: 320 },
  { nombre: "Beto", pts: 1200 },
  { nombre: "Caro", pts: 75 },
  { nombre: "Dani", pts: 980 },
  { nombre: "Eli", pts: 510 },
  { nombre: "Fabi", pts: 440 }
];
 
// Paso 2: cuántos quedan tras el filter
console.log("Quedan:", partidas.filter(p => p.pts >= 500).length); // 3
 
// Pasos 3, 4 y 5: la cadena completa, un eslabón por línea
partidas
  .filter(p => p.pts >= 500)
  .sort((a, b) => b.pts - a.pts)
  .map((p, i) => (i + 1) + ". " + p.nombre.toUpperCase() + " — " + Math.floor(p.pts / 100) + " tickets")
  .forEach(linea => console.log(linea));

 
// Paso 3 (justificación): aquí NO hace falta la copia [...] porque filter ya devuelve
// un arreglo nuevo, y el sort actúa sobre ese nuevo, no sobre partidas.
 
// Paso 6: partidas sigue intacto
console.log(partidas.length); // 6
 
// Versión rota: map antes de filter
partidas
  .map((p, i) => (i + 1) + ". " + p.nombre.toUpperCase() + " — " + Math.floor(p.pts / 100) + " tickets")
  .filter(p => p.pts >= 500)
  .forEach(linea => console.log(linea));
// Imprime 0 líneas: después del map ya son textos, y un texto no tiene .pts (undefined >= 500 es false).