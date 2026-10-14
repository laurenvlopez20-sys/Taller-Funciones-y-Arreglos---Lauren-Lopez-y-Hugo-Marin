/**
 * Taller de Funciones y Arreglos - Carpeta: arrow-functions (Nivel 3)
 * Descripción: Creación y optimización de utilidades usando funciones flecha.
 
 * ¿Qué función usé y por qué?:
 * Usé funciones flecha (Arrow Functions `=>`) con retorno implícito (sin llaves y sin return) 
 * para comprimir expresiones de una sola línea, tal como lo solicita la caja de herramientas.
 
 *Ejemplo de entrada y salida esperada:
 * - Entrada: (Ej: un precio o texto, ej: 5000)
 * - Salida esperada: (Ej: el resultado booleano o transformado, ej: true o recortado)
 */
const mitad = n => n / 2;
const esCaro = precio => precio > 5000;
const etiqueta = (juego, piso) => juego + " (piso " + piso + ")";

console.log(mitad(9));
console.log(esCaro(2500));
console.log(etiqueta("Pac-Man", 2));