const mitad = n => n / 2;
const esCaro = precio => precio > 5000;
const etiqueta = (juego, piso) => juego + " (piso " + piso + ")";

console.log(mitad(9));
console.log(esCaro(2500));
console.log(etiqueta("Pac-Man", 2));