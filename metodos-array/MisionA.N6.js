/**
 * Taller de Funciones y Arreglos - Carpeta: metodos-array (Niveles 6 a 10)
 * Descripción: Aplicación de métodos avanzados de orden superior (map, filter, sort, etc.).
 
 * ¿Qué método usé y por qué?:
 * Usé callbacks con funciones flecha dentro de los métodos del arreglo (como map/filter) 
 * para transformar, filtrar u ordenar los datos sin alterar los arreglos originales.
 
 * Ejemplo de entrada y salida esperada:
 * - Entrada: (Ej: un arreglo con datos crudos del torneo)
 * - Salida esperada: (Ej: el nuevo arreglo procesado, filtrado o impreso en consola)
 */

// Misión A: Los precios del festival
const precios = [2500, 18000, 9000, 4500, 12000];

// map con flecha de una línea: 20% de descuento
const preciosFestival = precios.map(p => p * 0.8);

// Imprimir los dos arreglos (el original no cambia)
console.log("Precios originales:", precios);
console.log("Precios festival:", preciosFestival);

// Los dos length son iguales
console.log(precios.length, preciosFestival.length);

// Segundo map: convertir cada precio en texto
const textos = preciosFestival.map(p => "$ " + p);
console.log(textos);