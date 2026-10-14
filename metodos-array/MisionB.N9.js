// Paso 1
const jugadores = [
  { nombre: "Ana", pts: 320 },
  { nombre: "Beto", pts: 1200 },
  { nombre: "Caro", pts: 75 },
  { nombre: "Dani", pts: 980 },
  { nombre: "Eli", pts: 510 }
];
 
// Paso 2: tercer jugador (índice 2)
console.log(jugadores[2].nombre); // Caro
 
// Paso 3: ranking (copia ordenada de mayor a menor)
const ranking = [...jugadores].sort((a, b) => b.pts - a.pts);
console.log("Campeón:", ranking[0].nombre); // Beto
 
// Paso 4: orden alfabético
const alfabetico = [...jugadores].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Alfabético:", alfabetico.map(j => j.nombre)); // Ana, Beto, Caro, Dani, Eli
 
// Paso 5: top 3 con formato
const top3 = ranking
  .slice(0, 3)
  .map((j, i) => (i + 1) + ". " + j.nombre + " — " + j.pts + " pts");
console.log(top3);
// [ '1. Beto — 1200 pts', '2. Dani — 980 pts', '3. Eli — 510 pts' ]
 
// Paso 6: empate de 980
jugadores.push({ nombre: "Fabi", pts: 980 });
const ranking2 = [...jugadores].sort((a, b) => b.pts - a.pts);
console.log(ranking2.map(j => j.nombre + " " + j.pts));
// Dani queda antes que Fabi: el comparador devuelve 0 y se conserva el orden de llegada.
 
// Paso 7: el original sigue en orden de llegada (Ana, Beto, Caro, Dani, Eli, Fabi)
console.log(jugadores.map(j => j.nombre));
 
// Prueba del auditor con tildes y Ñ:
console.log(["Muñoz", "Ángela", "Zoe", "Ana"].sort((a, b) => a.localeCompare(b)));
// [ 'Ana', 'Ángela', 'Muñoz', 'Zoe' ]