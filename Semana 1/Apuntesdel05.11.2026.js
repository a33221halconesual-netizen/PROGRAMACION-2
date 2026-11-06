// Crear una lista
const lista = ["manzana", "pera", "uva"];
// Agrega un elemento al final de la lista.
lista.push("mango"); // R: ["manzana", "pera", "uva", "mango"]
// Elimina el último elemento de la lista.
lista.pop(); // R: ["manzana", "pera"]
// Agrega un elemento al inicio de la lista.
lista.unshift("fresa"); // R: ["fresa", "manzana", "pera", "uva"]
// Elimina el primer elemento de la lista.
lista.shift(); // R: ["pera", "uva"]
// Elimina n elementos desde la posición i y agrega x en esa posición.
lista.splice(1, 1, "kiwi"); // R: ["manzana", "kiwi", "uva"]
// Copia los elementos desde la posición i hasta antes de la posición j.
lista.slice(0, 2); // R: ["manzana", "pera"]
// Une la lista original con otra lista y devuelve una nueva lista.
lista.concat(["naranja", "sandia"]); // R: ["manzana", "pera", "uva", "naranja", "sandia"]


//Codigo 2
// arreglo.splice(inicio, cantidad, elemento1, elemento2)
let frutas = ["manzana", "naranja", "uva", "pera"];
let resultado = frutas.splice(1, 2);
let reemplazarElemento = frutas.splice(3, 1, "piña");
let insertarElemento = frutas.splice(1, 0, "pera", "uva");



// Codigo 3
const b = [1, 2, 3, 4, 5];
console.log(b.splice(1, 2));
// → [ 2, 3 ]
console.log(b);
// → [ 1, 4, 5 ]
b.splice(1, 0, "x", "y");
console.log(b);
// → [ 1, 'x', 'y', 4, 5 ]
console.log(b.slice(1, 3));
// → [ 'x', 'y' ] (b no cambia) 
//Codigo 4
const b = [1, 2, 3, 4, 5];
console.log(b.splice(1, 2)); // R: [2, 3]. .splice(): elimina 2 elementos comenzando desde la posición 1.
console.log(b); // R: [1, 4, 5]. Muestra cómo quedó la lista después de eliminar los elementos.
b.splice(1, 0, "x", "y"); // R: No devuelve una lista en consola. .splice(): agrega "x" y "y" desde la posición 1 sin eliminar elementos.
console.log(b); // R: [1, "x", "y", 4, 5]. Muestra la lista después de agregar los elementos.
console.log(b.slice(1, 3)); // R: ["x", "y"]. .slice(): copia los elementos desde la posición 1 hasta antes de la posición 3, sin modificar la lista original.

// Codigo 5
const n = [5, 12, 8, 130, 44];
n.indexOf(8); // R: 2. .indexOf(): busca el elemento indicado y devuelve su posición dentro de la lista.
n.includes(130); // R: true. .includes(): comprueba si el elemento existe dentro de la lista y devuelve true o false.
n.find((x) => x > 10); // R: 12. .find(): busca el primer elemento que cumple la condición indicada y devuelve su valor.
n.findIndex((x) => x > 10); // R: 1. .findIndex(): busca el primer elemento que cumple la condición y devuelve su posición.
n.find((x) => x > 1000); // R: undefined. .find(): devuelve undefined cuando ningún elemento cumple la condición.
n.some((x) => x > 100); // R: true. .some(): comprueba si al menos un elemento cumple la condición.
n.every((x) => x > 5); // R: false. .every(): comprueba si todos los elementos cumplen la condición.



// Codigo 6. 
const precios = [100, 250, 80, 400];
precios.map((p) => p + 20); // R: [120, 270, 100, 420]. .map(): recorre la lista y transforma cada elemento, en este caso suma 20 a cada precio.
precios.filter((p) => p > 150); // R: [250, 400]. .filter(): recorre la lista y crea una nueva con los elementos que cumplen la condición, en este caso los precios mayores a 150.
precios.reduce((acum, p) => acum + p, 0); // R: 830. .reduce(): recorre la lista y acumula sus valores para obtener un solo resultado, en este caso suma todos los precios.





// Codigo 7
const nums = [10, 9, 1, 100];
[...nums].sort(); // R: [1, 10, 100, 9]. .sort(): ordena los elementos de menor a mayor según su valor como texto (orden alfabético).
[...nums].sort((a, b) => a - b); // R: [1, 9, 10, 100]. .sort(): ordena los números de menor a mayor mediante una resta entre los elementos.
[...nums].sort((a, b) => b - a); // R: [100, 10, 9, 1]. .sort(): ordena los números de mayor a menor invirtiendo el orden de la resta.