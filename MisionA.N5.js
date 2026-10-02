// Estado inicial
const fila = ["Ana", "Beto", "Caro", "Dani"];

// 1. Llegan dos jugadores nuevos al final de la fila
fila.push("Eva", "Fito");

// 2. Se libera una máquina: entra el primero de la fila (sale con shift)
let jugadorAtendido = fila.shift();
console.log("Jugador que entra a máquina:", jugadorAtendido);

// 3. Llega alguien con pase VIP y se pone de primero (entra con unshift)
fila.unshift("Santi");

// 4. El último de la fila se cansa y se va (sale con pop)
fila.pop();

// Resultados finales
console.log("Estado final de la fila:", fila);
console.log("Cuántos quedan:", fila.length);