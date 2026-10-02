const finalistas = ["Ana", "Beto", "Caro", "Dani"];
 
// 1. Una línea por finalista
finalistas.forEach((f, i) => {
  console.log("Puesto " + (i + 1) + ": " + f.toUpperCase());
});
 
// 2. Lo que devuelve forEach
const resultadoForEach = finalistas.forEach(f => f.toUpperCase());
console.log(resultadoForEach); // undefined
 
// 3. Lo mismo con map
const resultadoMap = finalistas.map(f => f.toUpperCase());
console.log(resultadoMap); // [ 'ANA', 'BETO', 'CARO', 'DANI' ]