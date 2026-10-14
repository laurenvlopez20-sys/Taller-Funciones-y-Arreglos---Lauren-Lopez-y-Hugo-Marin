// Misión B: Las etiquetas del tablero

// Paso 1: los datos
const juegos = ["pinball", "karts", "zombis", "laberinto"];
const partidas = [320, 980, 75, 640];

// Paso 2: nombres en mayúsculas
const nombresLed = juegos.map(j => j.toUpperCase());
console.log(nombresLed);

// Paso 3: con el puesto (usa el índice)
const conPuesto = juegos.map((j, i) => (i + 1) + ". " + j.toUpperCase());
console.log(conPuesto);

// Paso 4: tickets (dividir entre 100 y quedarse con la parte entera)
const tickets = partidas.map(p => Math.floor(p / 100));
console.log(tickets);

// Paso 5: unir juego y tickets con el índice
const etiquetas = juegos.map((j, i) => j.toUpperCase() + " — " + tickets[i] + " tickets");
console.log(etiquetas);

// Paso 6: romper a propósito (llaves sin return)
const ticketsRotos = partidas.map(p => { Math.floor(p / 100) });
console.log(ticketsRotos);

// Paso 7: los originales no cambiaron
console.log(juegos);
console.log(partidas);