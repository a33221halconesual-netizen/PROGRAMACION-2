// Entra algo, sale algo
const resultado = Math.max (3, 9, 4); // R: 9. *Math.max* recibe varios números y regresa el valor más grande.
console.log(resultado); // R: 9. *console.log* muestra en la consola el resultado guardado en la variable.


// ParseInt contra Number
parseInt("42px", 10) // R: 42. *parseInt* convierte el inicio del texto en un número entero e ignora lo que viene después.
parseInt("px42, 10") // R: NaN. *parseInt* no puede convertir el texto porque comienza con letras.
parseFloat("3.5kg") // R: 3.5. *parseFloat* convierte el inicio del texto en un número decimal e ignora lo que viene después.
Number("3.5kg") // R: NaN. *Number* intenta convertir todo el texto en un número, pero como contiene letras, no puede hacerlo.
isNaN("abc") // R: true. *isNaN* comprueba si el valor se convierte en un valor que no es un número.
Number.isNaN("abc") // R: false. *Number.isNaN* comprueba si el valor ya es NaN, sin intentar convertirlo primero.


// Los textos no se modifican
const t = "Hola Mundo";
t.toUpperCase(); // R: "HOLA MUNDO". *toUpperCase* convierte el texto a mayúsculas, pero no modifica el texto original ni guarda el resultado.
console.log (t); // R: "Hola Mundo". *console.log* muestra el texto original porque no se guardó el cambio.
const mayus = t.toLocaleUpperCase(); // R: "HOLA MUNDO". *toLocaleUpperCase* convierte el texto a mayúsculas y guarda el resultado en la variable mayus.
console.log(mayus); // R: "HOLA MUNDO". *console.log* muestra el texto convertido a mayúsculas.
const s = "JavaScript";
console.log (s.length, s[0]); // R: 10, "J". *length* cuenta los caracteres del texto y *[0]* obtiene el carácter que está en la primera posición.
console.log(s.at(-1)); // R: "t". *at(-1)* obtiene el último carácter del texto.


// Buscar dentro de un texto 
const frase = "el perro y el gato";
frase.indexOf ("el"); // R: 0. *indexOf* busca la primera aparición del texto indicado y regresa su posición.
frase.indexOf("el", 1) // R: 11. *indexOf* busca "el" a partir de la posición 1 y regresa la posición donde lo encuentra.
frase.lastIndexOf("el") // R: 11. *lastIndexOf* busca la última aparición del texto indicado y regresa su posición.
frase.indexOf ("zorro") // R: -1. *indexOf* regresa -1 cuando el texto que buscamos no se encuentra.
frase.includes("gato") // R: true. *includes* comprueba si el texto contiene la palabra indicada; regresa true si la encuentra.
frase.startsWith("el") // R: true. *startsWith* comprueba si el texto comienza con la palabra indicada.
frase.endsWith("perro") // R: false. *endsWith* comprueba si el texto termina con la palabra indicada.


// Extraer y transformar
const f = "2026-10-19"; 
f.slice(0, 4) // R: "2026". *slice* extrae una parte del texto desde la posición inicial hasta antes de la posición final.
f.slice (5, 7) // R: "10". *slice* extrae los caracteres desde la posición 5 hasta antes de la posición 7.
f.slice (-2) // R: "19". *slice* con un número negativo comienza a contar desde el final del texto y extrae los últimos 2 caracteres.
f.split ("-") // R: ["2026", "10", "19"]. *split* divide el texto en partes cada vez que encuentra el separador indicado y las guarda en un arreglo.
"hola".trim() // R: "hola". *trim* elimina los espacios en blanco que están al inicio y al final del texto
"4".padStart (3, "4") // R: "444". *padStart* agrega caracteres al inicio hasta alcanzar la longitud indicada.
"a-b-c".replaceAll ("-", "+") // R: "a+b+c". *replaceAll* reemplaza todas las apariciones del primer texto indicado por el segundo.


// Acentos y orden alfabético
"é" > "z" // R: true. *>* compara dos textos según su valor Unicode; por eso "é" se considera mayor que "z".
const L = ["b", "á", "a"]; // R: ["b", "á", "a"]. *const* crea una constante que guarda un arreglo de letras.
L.sort() // R: ["a", "b", "á"]. *sort* ordena los elementos del arreglo alfabéticamente según sus valores Unicode.
const es = (x, y) => 
    Text.normalize("NFD").replace(/[-x]/g, "") // *normalize* separa las letras de sus acentos y *replace* elimina los caracteres que coincidan con la expresión indicada.
sinAcentos ("José Ángel Núñez") // R: "Jose Angel Nunez". *sinAcentos* sería una función para quitar los acentos de un texto.