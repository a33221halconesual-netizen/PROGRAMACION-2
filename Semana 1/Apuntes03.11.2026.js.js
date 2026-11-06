
// Funcion para calcular el promedio de un arreglo
function promedio(arr) {

    // Si el arreglo esta vacio, devuelve 0
    if (arr.length == 0) {
        return 0;
    }

    // Variable que acumulara la suma de las calificaciones
    let suma = 0;

    // Ciclo que recorre todos los elementos del arreglo
    for (let i = 0; i < arr.length; i++) {

        // Suma cada calificacion al acumulador
        suma = suma + arr[i];
    }

    // Divide la suma entre la cantidad de elementos y devuelve el promedio
    return suma / arr.length;
}

// Pedimos las tres calificaciones y las convertimos a numeros
let cal1 = Number(prompt("Ingresa la primera calificacion:"));
let cal2 = Number(prompt("Ingresa la segunda calificacion:"));
let cal3 = Number(prompt("Ingresa la tercera calificacion:"));

// Guardamos las tres calificaciones en un arreglo
let calificaciones = [cal1, cal2, cal3];

// Llamamos a la funcion y guardamos el promedio obtenido
let resultado = promedio(calificaciones);

// Comprobamos si el promedio es mayor o igual a 6
if (resultado >= 6) {

    // Mostramos el promedio con dos decimales y el mensaje Aprobado
    console.log(resultado.toFixed(2) + " Aprobado");
} 
else {
    // Si no cumple la condicion, mostramos el mensaje Reprobado
    console.log(resultado.toFixed(2) + " Reprobado");
}