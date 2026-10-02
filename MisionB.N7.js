// Paso 1
const juegos = ["Pinball", "Galaxia", "Karts", "Zombis", "Laberinto", "Aereo"];
const estados = ["disponible", "mantenimiento", "disponible", "disponible", "mantenimiento", "disponible"];
 
// Paso 2: nombres de 8 letras o menos
const cabenEnLed = juegos.filter(j => j.length <= 8);
console.log("Caben en LED:", cabenEnLed, cabenEnLed.length); // 5
 
// Paso 3: contienen "o" sin importar mayúsculas
const conO = juegos.filter(j => j.toLowerCase().includes("o"));
console.log("Con la letra o:", conO, conO.length); // [ 'Zombis', 'Laberinto', 'Aereo' ] 3
 
// Paso 4: cruzar listas con el índice
const disponibles = juegos.filter((j, i) => estados[i] === "disponible");
console.log("Disponibles:", disponibles, disponibles.length); // 4
 
// Paso 5: contar mantenimiento de dos formas
const enMantenimiento1 = estados.filter(e => e === "mantenimiento").length;
const enMantenimiento2 = estados.length - estados.filter(e => e === "disponible").length;
console.log("Mantenimiento:", enMantenimiento1, enMantenimiento2); // 2 2
 
// Paso 6: encadenar filter + map en una línea
const disponiblesMayus = juegos.filter((j, i) => estados[i] === "disponible").map(j => j.toUpperCase());
console.log("Disponibles en mayúsculas:", disponiblesMayus);
// [ 'PINBALL', 'KARTS', 'ZOMBIS', 'AEREO' ]