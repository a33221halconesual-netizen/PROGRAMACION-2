// Texto con las calificaciones separadas por comas
const texto = "8, 9.5, x, 7, , 10";

// .split(): separa el texto cada vez que encuentra una coma y crea un arreglo.
let calificaciones = texto.split(","); // R: ["8", " 9.5", " x", " 7", " ", " 10"]

// .map() y .trim(): recorren el arreglo y eliminan los espacios al inicio y al final de cada elemento.
calificaciones = calificaciones.map((x) => x.trim()); // R: ["8", "9.5", "x", "7", "", "10"]

// .filter(): elimina los textos vacíos para conservar solamente los valores que tienen contenido.
calificaciones = calificaciones.filter((x) => x !== ""); // R: ["8", "9.5", "x", "7", "10"]

// .map() y Number(): convierten cada texto en un número.
calificaciones = calificaciones.map((x) => Number(x)); // R: [8, 9.5, NaN, 7, 10]

// .filter() y Number.isNaN(): eliminan los valores que no son números válidos.
calificaciones = calificaciones.filter((x) => !Number.isNaN(x)); // R: [8, 9.5, 7, 10]

// .reduce(): suma todas las calificaciones y las acumula en un solo resultado.
let suma = calificaciones.reduce((acum, x) => acum + x, 0); // R: 34.5

// Calculamos el promedio dividiendo la suma entre la cantidad de calificaciones válidas.
let promedio = suma / calificaciones.length; // R: 8.625

// .toFixed(2): redondea el promedio a 2 decimales y lo devuelve como texto.
console.log("El promedio es: " + promedio.toFixed(2)); // R: El promedio es: 8.63