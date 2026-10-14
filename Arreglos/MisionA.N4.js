/**
 *Taller de Funciones y Arreglos - Carpeta: arreglos (Niveles 4 y 5)
  *Descripción: Manipulación de estructuras de datos, índices, recorridos y métodos que mutan.
 
 *¿Qué enfoque usé y por qué?:
 * Usé arreglos y ciclos (o métodos como push/splice) para almacenar colecciones de datos 
 * y simular el comportamiento dinámico de la fila y el mantenimiento del catálogo de juegos.
 
 *Ejemplo de entrada y salida esperada:
 * - Entrada: (Ej: un arreglo de puntajes o nombres)
 * - Salida esperada: (Ej: el arreglo modificado, el total acumulado o el puntaje mayor)
 */

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