let maquinasOcupadas = 2;

function mostrarTablero() {
console.log("--- TABLERO ---");
for (let i = 1; i <= 5; i++) {
if (i <= maquinasOcupadas) {  
    console.log("Maquina " + i + ": OCUPADA");
} else {
 console.log("Maquina " + i + ": LIBRE");
}
}
console.log("Libres: " + (5 - maquinasOcupadas));
}

mostrarTablero();

maquinasOcupadas = 5;
mostrarTablero();