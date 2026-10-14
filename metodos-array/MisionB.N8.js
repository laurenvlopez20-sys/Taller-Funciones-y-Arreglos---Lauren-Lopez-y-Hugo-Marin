// Paso 1
const ronda = [320, 980, 75, 640, 510];
// Para el paso 6, cambia la línea de arriba por: const ronda = [];
 
// (uso otro nombre para no repetir "revision" de la Misión A)
const revisionTorneo = [true, true, false, true, true];
 
// Pasos 2, 3 y 4
const hayEstrella = ronda.some(p => p > 900);                    // true
const rondaValida = ronda.every(p => p >= 100);                  // false (por el 75)
const todoEnOrden = !revisionTorneo.some(r => r === false);      // false
 
console.log("hayEstrella:", hayEstrella);
console.log("rondaValida:", rondaValida);
console.log("todoEnOrden:", todoEnOrden);
 
// Paso 5: el semáforo
function semaforo() {
  if (hayEstrella && rondaValida && todoEnOrden) {
    console.log("VERDE");
  } else if (rondaValida) {
    console.log("AMARILLO");
  } else {
    console.log("ROJO");
  }
}
semaforo(); // ROJO con los datos de arriba

// Paso 6 (con ronda = []):
//   hayEstrella = false, rondaValida = true (every sobre vacío), todoEnOrden = false
//   -> sale AMARILLO. No tiene mucho sentido: una ronda sin partidas no debería ser "válida".
 


 // Paso 7: lo mismo con filter + length
const hayEstrella2 = ronda.filter(p => p > 900).length > 0;
console.log("hayEstrella con filter:", hayEstrella2); // da lo mismo
// Prefiero some: es más corto, se lee como pregunta y se detiene en el primero que encuentra.
 