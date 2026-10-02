// Misión B: El marcador del torneo

// Paso 1: el arreglo
const puntajes = [320, 150, 980, 640, 75, 510, 500, 1200];

// Paso 2: una línea por partida con for clásico
for (let i = 0; i < puntajes.length; i++) {
  console.log("Partida " + (i + 1) + ": " + puntajes[i] + " pts");
}

// Pasos 3, 4 y 5: un solo recorrido con for...of
let total = 0;
let clasificados = 0;
let mayor = puntajes[0];

for (const p of puntajes) {
  total = total + p;
  if (p >= 500) {
    clasificados = clasificados + 1;
  }
  if (p > mayor) {
    mayor = p;
  }
}

// Paso 7: índice del puntaje mayor (for clásico, porque necesito el índice)
let indiceMayor = 0;
for (let i = 0; i < puntajes.length; i++) {
  if (puntajes[i] === mayor) {
    indiceMayor = i;
  }
}

// Paso 6: resumen
const promedio = (total / puntajes.length).toFixed(1);
console.log("Total de puntos:", total);
console.log("Clasificados (>= 500):", clasificados);
console.log("Puntaje mas alto:", mayor);
console.log("Promedio:", promedio);

// Paso 7
console.log("Indice del mayor:", indiceMayor);
console.log("Numero de partida:", indiceMayor + 1);