// RETO 2: Cuadrados de los pares
const numeros = [1, 2, 3, 4, 5, 6];
// .filter(): selecciona solamente los números pares utilizando el residuo (%). Osea los pares son aquellos que al dividirlos entre 2 el residuo es 0.
const pares = numeros.filter((n) => n % 2 === 0); // R: [2, 4, 6]
// .map(): recorre los números pares y eleva cada uno al cuadrado.
const cuadrados = pares.map((n) => n * n); // R: [4, 16, 36]
// .sort(): ordena los cuadrados de mayor a menor mediante la resta b - a.
const ordenados = cuadrados.sort((a, b) => b - a); // R: [36, 16, 4]
console.log(ordenados); // R: [36, 16, 4]