function precioPaquete(cantidad) {
  let precioUnidad;
  if (cantidad >= 5) {
    precioUnidad = 2000;
  } else {
    precioUnidad = 2500;
  }
  return cantidad * precioUnidad;
}

console.log("1 ficha: $" + precioPaquete(1));
console.log("4 fichas: $" + precioPaquete(4));
console.log("5 fichas: $" + precioPaquete(5));
console.log("12 fichas: $" + precioPaquete(12));