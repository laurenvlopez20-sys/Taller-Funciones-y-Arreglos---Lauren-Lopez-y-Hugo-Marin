// Misión A: El catálogo en pantalla
const catalogo = ["Pinball", "Galaxia", "Karts", "Zombis", "Tetris", "Carreras"];

// Primer juego y último juego (con length)
console.log("Primer juego:", catalogo[0]);
console.log("Ultimo juego:", catalogo[catalogo.length - 1]);

// Cuántos juegos hay
console.log("Total de juegos:", catalogo.length);

// Reemplazar la posición 2 (catalogo[2] es el tercer juego)
catalogo[2] = "EN MANTENIMIENTO";
console.log(catalogo);

// Una casilla que no existe
console.log(catalogo[10]);