const revision = [true, true, true, false, true, true];
 
const sePuedeAbrir = revision.every(r => r === true);
const llamarTecnico = revision.some(r => r === false); // busca los false
 
console.log("¿Se puede abrir?", sePuedeAbrir);   // false
console.log("¿Llamar técnico?", llamarTecnico);  // true
 
if (sePuedeAbrir) {
  console.log("ABRIR");
} else {
  console.log("LLAMAR TECNICO");                 // sale este
}
// Si cambias el false por true: every -> true, some(false) -> false, imprime "ABRIR".
 