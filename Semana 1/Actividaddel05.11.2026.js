// RETO 1: Promedio de aprobados
const calificaciones = [9, 5, 8, 6.5]; // Calificaciones de Ana, Beto, Carla y Dino.
// .filter(): selecciona solamente las calificaciones mayores o iguales a 6.
const aprobados = calificaciones.filter((calificacion) => calificacion >= 6); // R: [9, 8, 6.5]
// .reduce(): suma todas las calificaciones aprobadas y las acumula en un solo resultado.
const suma = aprobados.reduce((acum, calificacion) => acum + calificacion, 0); // R: 23.5
// Calculamos el promedio dividiendo la suma entre la cantidad de aprobados.
const promedio = suma / aprobados.length; // R: 7.833333...
console.log("El promedio de los aprobados es: " + promedio.toFixed(2)); // R: El promedio de los aprobados es: 7.83





