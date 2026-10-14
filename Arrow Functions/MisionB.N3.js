const esGratis = precio => precio === 0;
const aplicarDescuento = (precio, porcentaje) => precio - precio * porcentaje / 100;
const nombreCorto = texto => texto.slice(0, 12);
const alcanza = (saldo, precio) => saldo >= precio;

// Paso 5: recibo
const precio = 18000;
const descuento = 25;
const juego = "Galaxia Infinita 2";
const saldo = 15000;
const precioFinal = aplicarDescuento(precio, descuento);

console.log("Juego: " + nombreCorto(juego));
console.log("Precio con descuento: $" + precioFinal);
console.log("¿Es gratis? " + esGratis(precioFinal));
console.log("¿Le alcanza el saldo? " + alcanza(saldo, precioFinal));

// Paso 6: esGratis con llaves y sin return (rota)
const esGratisRota = precio => { precio === 0 };
console.log(esGratisRota(0));