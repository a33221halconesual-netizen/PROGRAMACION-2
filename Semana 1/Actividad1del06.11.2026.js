// Funcion para redondear un numero a los decimales indicados
function redondear(n, decimales) {
    return Number(n.toFixed(decimales)); // .toFixed(): redondea el numero y lo convierte en texto. Number(): convierte el resultado nuevamente a numero.
}

// Probamos la funcion
console.log(redondear(3.14159, 2)); // R: 3.14. redondear(): redondea el numero a 2 decimales.

// Comprobamos el tipo de dato que devuelve la funcion
console.log(typeof redondear(3.14159, 2)); // R: "number". typeof: identifica el tipo de dato que devuelve la funcion.