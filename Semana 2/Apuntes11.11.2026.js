function sinRetorno(x) { x * 2; } // R: No devuelve ningún resultado, por eso regresa undefined.
function conRetorno(x) { return x * 2; } // R: Devuelve el resultado de multiplicar x por 2.
function signo(n) { // R: Recibe un número para identificar si es negativo, cero o positivo.
  if (n < 0) return "negativo"; // R: Si el número es menor que 0, devuelve "negativo".
  if (n === 0) return "cero"; // R: Si el número es exactamente 0, devuelve "cero".
  return "positivo"; // R: Si no cumple las condiciones anteriores, devuelve "positivo".
}
// sinRetorno(4) -> undefined. conRetorno(4) -> 8. signo(-3) -> negativo. signo(0) -> cero. signo(9) -> positivo.



function estadisticas(lista) { // R: Recibe una lista de números para calcular sus estadísticas.
  const minimo = Math.min(...lista); // R: Obtiene el número más pequeño de la lista.
  const maximo = Math.max(...lista); // R: Obtiene el número más grande de la lista.
  const suma = lista.reduce((a, b) => a + b, 0); // R: Suma todos los números de la lista.
  return { minimo, maximo, promedio: suma / lista.length }; // R: Devuelve un objeto con el mínimo, máximo y promedio.
}
const { minimo, maximo, promedio } = estadisticas([4, 8, 6]); // R: Ejecuta la función y guarda cada resultado en una variable.
console.log(minimo, maximo, promedio); // R: Muestra los tres resultados en la consola.
// -> 4 8 6



// Calcula (pura)
const conIva = (p) => Math.round(p * 116) / 100; // R: Recibe un precio, calcula el IVA del 16% y devuelve el resultado redondeado a dos decimales.
// Muestra (efecto)
console.log("total", conIva(100)); // R: Muestra en consola el texto "total" y el resultado de la funcion.
// -> total 116

// Trampa: salto de línea tras return
function mal() { // R: Declara una funcion llamada mal.
  return // R: Devuelve undefined porque JavaScript interpreta que el return termina aquí.
  42; // R: Esta línea nunca se utiliza como resultado de la funcion.
}
// mal() -> undefined
// Poner el return hasta el final y simepre poner ; 