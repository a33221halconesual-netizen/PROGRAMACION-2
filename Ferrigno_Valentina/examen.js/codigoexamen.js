//A1
console.log ("5" + 3, "5" - 3, "5" * "2", Number (""), Number("abc")); // Pienso que lo que imprimira es que los numeros que estan entre comillas  ... Y lo que imprimio es "Live reload enabled."

// A2
const a = [10, 9, 1, 100];
a.sort(); // sort* ordena los elementos del arreglo alfabéticamente.
const t= "hola"; // aqui declara una constante llamada hola
t.toUpperCase(); // toUpperCase* convierte el texto a mayúsculas, pero no modifica el texto original ni guarda el resultado.
console.log(a, t); //  console.log* muestra el texto original porque no se guardó el cambio.

// A3
console.log(saludar());
function saludar() { return "hola"; } // crea una funcion saludar y te regresa un spring diciendo hola
try { console.log (despedir()); } catch (e) { console.log (e.name); } // catch es para atrapar los errorer 
const despedir = () => "adios"; // Aqui hace una constante de "adios"

// A4 - Pienso que lo que imprimira es el tipo de dato que regresara Y lo que imprimio es Live reload enabled.
let x = 10;
function f() { x = 20 ; let y = 5; return y; }
f();
console.log (x, typeof y);

// A5 pienso que: a se ignora. b vale 2. el resto se junta y se hace arreglo
function g (a, b = 2, ... resto) {return resto.length + b; } 
console.log (g(1 , 5, 7, 8, 9));

// Parte B. no va a funcionar por el suma / validos.length;
function promedioMayores(lista, minimo = 0 ) {
    const validos = lista.filter ((n) => n > minimo );
    let suma = 0;
    for (var i = 0; i <= validos.length; i++) {
        suma += validos[i];
    }
    return 
    suma / validos.length;
}
console.log(promedioMayores)(([3, 8, 6, 2], 3));
console.log(promedioMayores([1, 2], 5));

// PARTE C
function convertirTemperatura(v, de, a) {
    let celsius; // Variable donde guardaremos la temperatura convertida a Celsius.
    if (de === "C") { // Comprueba si la temperatura original esta en Celsius.
        celsius = v; // Si ya esta en Celsius, conserva el mismo valor.
    } else if (de === "F") { // Comprueba si la temperatura original esta en Fahrenheit.
        celsius = (v - 32) * 5 / 9; // Convierte Fahrenheit a Celsius.
    } else if (de === "K") { // Comprueba si la temperatura original esta en Kelvin.
        celsius = v - 273.15; // Convierte Kelvin a Celsius.
    } else {
        return "Unidad de origen no valida"; //  Avisa si la unidad de origen no es C, F o K.
    }

    if (a === "C") { // Comprueba si queremos el resultado en Celsius.
        return celsius; //  Devuelve la temperatura en Celsius.
    } else if (a === "F") { // Comprueba si queremos el resultado en Fahrenheit.
        return (celsius * 9 / 5) + 32; //  Convierte Celsius a Fahrenheit.
    } else if (a === "K") { //Comprueba si queremos el resultado en Kelvin.
        return celsius + 273.15; //  Convierte Celsius a Kelvin.
    } else {
        return "Unidad de destino no valida"; // Avisa si la unidad de destino no es C, F o K.
    }
}

// PARTE E
// Datos: Valentina Ferrigno Navarro, 13/11/2026 , hora de inicio 11:35 - 1:30 pm 

// PREGUNTAS DE RESCATE 
// 1. Menciona 2 luchadores  laguneros famosos: Dr. WAGNER JR , JOSE ANGEL NAJERA SANCHEZ
// 2. Cuál es mi segundo nombre? Eden
// 3. Victor ayer andaba de 3 formas distintas: curioso. trabajador y feliz