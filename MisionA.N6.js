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