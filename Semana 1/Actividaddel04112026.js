function contarVocales(txt) { // Funcion para contar las vocales de un texto
// Convertimos el texto a minusculas y quitamos los acentos
    let texto = txt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // NFD: Separa los caracteres acentuados en dos partes: la letra y su acento. .replace(/[\u0300-\u036f]/g, "") : Elimina los acentos que se separaron en el paso anterior.
    let vocales = texto.split("").filter(letra => "aeiou".includes(letra));     // Separamos las letras y filtramos solamente las vocales
    return vocales.length;     // Regresamos la cantidad de vocales encontradas
}

// Funcion para identificar las vocales con acento
function vocalesAcentuadas(txt) {     // Separamos las letras y buscamos las vocales que tienen acento
    let vocales = txt.split("").filter(letra => "áéíóúÁÉÍÓÚ".includes(letra));   // Regresamos las vocales encontradas
    return vocales;
}

// Funcion para comprobar si un texto es palindromo
function esPalindromo(txt) {
    let texto = txt.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");     // Convertimos el texto a minusculas y quitamos los acentos
    texto = texto.replaceAll(" ", "");     // Quitamos los espacios del texto
    let invertido = texto.split("").reverse().join("");     // Separamos las letras, las invertimos y las volvemos a unir
    return texto === invertido;     // Comparamos el texto original con el texto invertido
}


let palabra = prompt("Ingresa una palabra:"); // Pedimos al usuario que ingrese una palabra
let cantidad = contarVocales(palabra); // Calculamos la cantidad de vocales de la palabra
let acentos = vocalesAcentuadas(palabra); // Buscamos las vocales que tienen acento
console.log('Ingresaste la palabra "' + palabra + '" y tiene ' + cantidad + ' vocales.'); // Mostramos la palabra ingresada y su cantidad de vocales


if (acentos.length > 0) {// Comprobamos si la palabra tiene vocales con acento
    // Mostramos las vocales acentuadas
    console.log('La palabra "' + palabra + '" tiene estas vocales con acento: ' + acentos.join(", "));
} else {
    console.log('La palabra "' + palabra + '" no tiene vocales con acento.');// Indicamos que no tiene vocales acentuadas
}

let frase = prompt("Ingresa una palabra/frase para comprobar si es palindroma:");// Pedimos otra palabra o frase para comprobar si es palindroma
let resultado = esPalindromo(frase);// Comprobamos si el texto es palindromo

// Mostramos si es o no es palindromo
if (resultado == true) {
    console.log('La palabra o frase "' + frase + '" SI es palindroma.');
} 
else {
    console.log('La palabra o frase "' + frase + '" NO es palindroma.');
}