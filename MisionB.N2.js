function precioPaquete(cantidad) {
  let precioUnidad;
  if (cantidad >= 5) {
    precioUnidad = 2000;
  } else {
    precioUnidad = 2500;
  }
  return cantidad * precioUnidad;
}

function puntosATickets(puntos, esOro) {
  let tickets = puntos / 100;
  tickets = Math.floor(tickets);
  if (esOro) {
    tickets = tickets * 2;
  }
  return tickets;
}

console.log(puntosATickets(250, false));
console.log(puntosATickets(250, true));
console.log(puntosATickets(99, false));
console.log(puntosATickets(1000, true));

// Paso 7
console.log("Costo: $" + precioPaquete(puntosATickets(1000, true)));