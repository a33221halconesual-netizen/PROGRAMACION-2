// ACTIVIDAD: DOS FUNCIONES PARA LA BIBLIOTECA


// 1. ES PRIMO: comprueba si un numero es primo y devuelve true o false.
function esPrimo(n) {
    if (n <= 1) return false; // R: Los numeros negativos, el 0 y el 1 no son primos.

    for (let i = 2; i <= Math.sqrt(n); i++) { // R: Prueba los divisores desde 2 hasta la raiz cuadrada del numero.
        if (n % i === 0) return false; // R: Si el residuo es 0, significa que el numero tiene otro divisor.
    }

    return true; // R: Si no encontro divisores, el numero es primo.
}


// PRUEBAS DE LA FUNCION ES PRIMO

console.log(esPrimo(7)); // R: true. El 7 solamente se divide entre 1 y 7.
console.log(esPrimo(1)); // R: false. El 1 no es primo.
console.log(esPrimo(0)); // R: false. El 0 no es primo.
console.log(esPrimo(-5)); // R: false. Los numeros negativos no son primos.
console.log(esPrimo(10)); // R: false. El 10 se puede dividir entre 2 y 5.


// 2. CONVERTIR TEMPERATURA: convierte entre Celsius, Fahrenheit y Kelvin.

function convertirTemperatura(v, de, a) {
    let celsius; // R: Variable donde guardaremos la temperatura convertida a Celsius.

    if (de === "C") { // R: Comprueba si la temperatura original esta en Celsius.
        celsius = v; // R: Si ya esta en Celsius, conserva el mismo valor.
    } else if (de === "F") { // R: Comprueba si la temperatura original esta en Fahrenheit.
        celsius = (v - 32) * 5 / 9; // R: Convierte Fahrenheit a Celsius.
    } else if (de === "K") { // R: Comprueba si la temperatura original esta en Kelvin.
        celsius = v - 273.15; // R: Convierte Kelvin a Celsius.
    } else {
        return "Unidad de origen no valida"; // R: Avisa si la unidad de origen no es C, F o K.
    }

    if (a === "C") { // R: Comprueba si queremos el resultado en Celsius.
        return celsius; // R: Devuelve la temperatura en Celsius.
    } else if (a === "F") { // R: Comprueba si queremos el resultado en Fahrenheit.
        return (celsius * 9 / 5) + 32; // R: Convierte Celsius a Fahrenheit.
    } else if (a === "K") { // R: Comprueba si queremos el resultado en Kelvin.
        return celsius + 273.15; // R: Convierte Celsius a Kelvin.
    } else {
        return "Unidad de destino no valida"; // R: Avisa si la unidad de destino no es C, F o K.
    }
}


// CONVERSION INTERACTIVA DE TEMPERATURA

let valor = Number(prompt("Ingresa la temperatura que deseas convertir:")); // R: Pide la temperatura y la convierte a numero.

let de = prompt("Ingresa la unidad de origen: C, F o K").toUpperCase(); // R: Pregunta en que unidad esta la temperatura.

let a = prompt("Ingresa la unidad de destino: C, F o K").toUpperCase(); // R: Pregunta a que unidad desea convertirla.

let resultado = convertirTemperatura(valor, de, a); // R: Ejecuta la funcion con los datos ingresados.

console.log("Temperatura original: " + valor + " " + de); // R: Muestra la temperatura original.

console.log("Temperatura convertida: " + resultado + " " + a); // R: Muestra el resultado de la conversion.


// PRUEBAS DE LA FUNCION CONVERTIR TEMPERATURA

console.log(convertirTemperatura(100, "C", "F")); // R: 212. Convierte 100 Celsius a Fahrenheit.
console.log(convertirTemperatura(0, "C", "K")); // R: 273.15. Convierte 0 Celsius a Kelvin.
console.log(convertirTemperatura(32, "F", "C")); // R: 0. Convierte 32 Fahrenheit a Celsius.
console.log(convertirTemperatura(300, "K", "C")); // R: 26.85. Convierte 300 Kelvin a Celsius.


// 3. FILTRAR LOS NUMEROS PRIMOS DEL 1 AL 50

let numeros = []; // R: Arreglo donde guardaremos los numeros del 1 al 50.

for (let i = 1; i <= 50; i++) { // R: Recorre los numeros desde 1 hasta 50.
    numeros.push(i); // R: Agrega cada numero al arreglo.
}

let primos = numeros.filter((n) => esPrimo(n)); // R: filter() conserva solamente los numeros que cumplen la funcion esPrimo().

console.log("Numeros primos del 1 al 50:", primos); // R: Muestra todos los numeros primos encontrados.