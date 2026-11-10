// 1. DECLARACION: funcion descuento con porcentaje predeterminado de 10.
function descuento(precio, porcentaje = 10) {
    return precio - (precio * porcentaje / 100); // R: Calcula el descuento y lo resta al precio original.
}
console.log(descuento(200)); // R: 180. Aplica el 10% de descuento.
console.log(descuento(200, 25)); // R: 150. Aplica el 25% de descuento.

// 2. EXPRESION CON CONST: funcion promedio que recibe cualquier cantidad de notas.
const promedio = function (...notas) {
    if (notas.length === 0) return 0; // R: Si no hay notas, devuelve 0.
    const suma = notas.reduce((a, b) => a + b, 0); // R: Suma todas las notas utilizando reduce().
    return suma / notas.length; // R: Divide la suma entre la cantidad de notas.
};
console.log(promedio(8, 9, 10)); // R: 9. Calcula el promedio de las tres notas.
console.log(promedio()); // R: 0. No se ingresaron notas.


// 3. FUNCION FLECHA: recibe una funcion y un valor, y aplica la funcion dos veces.
const aplicarDosVeces = (fn, x) => fn(fn(x)); // R: Ejecuta fn con x y vuelve a ejecutar fn con el primer resultado.
console.log(aplicarDosVeces((n) => n * 2, 3)); // R: 12. Primero 3 * 2 = 6 y despues 6 * 2 = 12.