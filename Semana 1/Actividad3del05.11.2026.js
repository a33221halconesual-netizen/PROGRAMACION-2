// RETO 3: Orden en español
const frutas = ["pera", "Manzana", "uva", "Árbol"];
// .sort(): ordena alfabéticamente utilizando localeCompare para comparar las palabras en español.
const ordenadas = [...frutas].sort((a, b) => a.localeCompare(b, "es", { sensitivity: "base" })); // R: ["Árbol", "Manzana", "pera", "uva"]
console.log(ordenadas); 