// Misión B: Mantenimiento del catálogo
const catalogo = ["Pinball", "Galaxia", "Karts", "Zombis", "Tetris", "Aereo"];
console.log("Catalogo inicial:", catalogo);

// Paso 1: guardar el tamaño original
const tamanoInicial = catalogo.length;

// Paso 2: sacar Karts y Zombis con un solo splice
const retirados = catalogo.splice(2, 2);

// Paso 3: verificar
console.log("Retirados:", retirados);
console.log("Catalogo:", catalogo);
console.log("Length:", catalogo.length);

// Paso 4: meter Laberinto donde estaba Karts (indice 2), sin borrar nada
catalogo.splice(2, 0, "Laberinto");
console.log("Con Laberinto:", catalogo);
console.log("Length:", catalogo.length);

// Paso 5: Pinball del principio al final
const pinball = catalogo.shift();
catalogo.push(pinball);
console.log("Pinball al final:", catalogo);
console.log("Length:", catalogo.length);

// Paso 6: invertir
catalogo.reverse();
console.log("Invertido:", catalogo);
console.log("Length:", catalogo.length);

// Paso 7: comparar con el tamaño inicial
if (catalogo.length > tamanoInicial) {
  console.log("El catalogo crecio");
} else if (catalogo.length < tamanoInicial) {
  console.log("El catalogo se redujo");
} else {
  console.log("El catalogo quedo igual");
}