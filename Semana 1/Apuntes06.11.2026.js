const x = 1234.5678
x.toFixed(2); // R: "1234.57". .toFixed(2): redondea el número a 2 decimales y lo devuelve como texto (string).
typeof x.toFixed(2); // R: "string". typeof: identifica el tipo de dato que devuelve la expresión.
Number(x.toFixed(2)); // R: 1234.57. Number(): convierte el texto (string) en un número (number).
(255).toString(2); // R: "11111111". .toString(2): convierte el número a una cadena de texto utilizando el sistema binario (base 2).
const peso = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN"
}); // R: Crea un formato de moneda mexicana. Intl.NumberFormat(): permite dar formato a números según el idioma y la moneda indicados.
peso.format(x); // R: "$1,234.57". .format(): aplica el formato de moneda al número indicado, agregando el símbolo $, separadores de miles y dos decimales.




Math.round(2.5); // R: 3. .round(): redondea un número al entero más cercano.
Math.round(-2.5); // R: -2. .round(): redondea un número negativo al entero más cercano; cuando termina en .5, lo aproxima hacia arriba (hacia +infinito)

0.1 + 0.2; // R: 0.30000000000000004. JavaScript puede presentar pequeñas imprecisiones al realizar operaciones decimales debido a cómo almacena los números internamente.
0.1 + 0.2 === 0.3; // R: false. ===: compara si dos valores son exactamente iguales; devuelve false porque el resultado de la suma no es exactamente 0.3.