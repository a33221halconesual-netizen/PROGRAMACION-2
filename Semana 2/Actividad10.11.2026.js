// RETO INTEGRADOR: LA CAFETERIA DEL CAMPUS

// TEXTO ORIGINAL CON LAS VENTAS DEL DIA
const registro = "  Café: 35.50; té verde : 28 ;Pan Dulce:18.5; CAFÉ:35.5;; galleta de avena: 22.10;  Té Verde:28 ; Jugo de naranja: 40; pan dulce : 18.50; Café Americano: abc; galleta de avena:22.1; ;Jugo de Naranja:40 ; Sándwich:55.75; té verde: -10; :15; Pan dulce:18.5; Café :35.5 ; Sándwich : 55.75 ; galleta de avena:";


// 1. LIMPIAR REGISTRO: separa las ventas y elimina los datos incorrectos.
function limpiarRegistro(texto) {
    let ventas = texto.split(";"); // R: Separa el texto cada vez que encuentra un punto y coma.
    let limpias = []; // R: Arreglo donde guardaremos las ventas correctas.

    for (let i = 0; i < ventas.length; i++) { // R: Recorre todas las ventas del registro.
        let partes = ventas[i].split(":"); // R: Separa el producto y el precio.
        if (partes.length !== 2) continue; // R: Descarta ventas que no tengan producto y precio separados.

        let producto = partes[0].trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // R: Quita espacios, convierte a minusculas y elimina acentos.
        let precio = Number(partes[1].trim()); // R: Convierte el precio de texto a numero.

        if (producto !== "" && !Number.isNaN(precio) && precio > 0) { // R: Comprueba que el producto y el precio sean validos.
            limpias.push({ producto: producto, precio: precio }); // R: Guarda la venta correcta en el arreglo.
        }
    }

    return limpias; // R: Devuelve el arreglo con las ventas limpias.
}


// 2. SUMAR: recibe cualquier cantidad de precios y devuelve su suma redondeada.
const sumar = function (...precios) {
    let total = precios.reduce((a, b) => a + b, 0); // R: Suma todos los precios.
    return Number(total.toFixed(2)); // R: Redondea el resultado a dos decimales y lo convierte a numero.
};


// 3. RESUMEN POR PRODUCTO: cuenta las ventas y suma sus ingresos.
const resumenPorProducto = (ventas) => {
    let resumen = []; // R: Arreglo donde guardaremos el resumen de cada producto.

    for (let i = 0; i < ventas.length; i++) { // R: Recorre todas las ventas.
        let producto = ventas[i].producto; // R: Obtiene el nombre del producto.
        let precio = ventas[i].precio; // R: Obtiene el precio de la venta.
        let posicion = resumen.findIndex((x) => x.producto === producto); // R: Busca si el producto ya existe en el resumen.

        if (posicion === -1) { // R: Comprueba si el producto todavía no está registrado.
            resumen.push({ producto: producto, veces: 1, ingreso: precio }); // R: Agrega el producto con su primera venta.
        } else {
            resumen[posicion].veces++; // R: Aumenta la cantidad de veces que se vendió.
            resumen[posicion].ingreso = sumar(resumen[posicion].ingreso, precio); // R: Acumula el ingreso del producto.
        }
    }

    resumen.sort((a, b) => { // R: Ordena los productos según sus ingresos.
        if (b.ingreso !== a.ingreso) return b.ingreso - a.ingreso; // R: Coloca primero el mayor ingreso.
        return a.producto.localeCompare(b.producto, "es"); // R: Si empatan, ordena alfabeticamente en español.
    });

    return resumen; // R: Devuelve el resumen ordenado.
};


// 4. DESCUENTO: calcula un descuento del 15% si no se indica otro porcentaje.
function descuento(precio, porcentaje = 15) {
    return precio - (precio * porcentaje / 100); // R: Calcula y resta el descuento al precio.
}


// 5. APLICAR A TODOS: aplica una funcion a cada elemento de una lista.
function aplicarATodos(lista, fn) {
    return lista.map((x) => fn(x)); // R: Recorre la lista y aplica la funcion recibida.
}


// 6. PRODUCTO AL AZAR: elige un producto aleatorio de las ventas.
function productoAlAzar(ventas) {
    if (ventas.length === 0) return "No hay productos"; // R: Comprueba que existan ventas.
    let posicion = Math.floor(Math.random() * ventas.length); // R: Genera una posicion aleatoria.
    return ventas[posicion].producto; // R: Devuelve el producto elegido.
}


// 7. CAPITALIZAR: pone la primera letra en mayuscula y las demas en minuscula.
function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase(); // R: Cambia el formato del nombre del producto.
}


// PROCESO DEL PROGRAMA
let ventas = limpiarRegistro(registro); // R: Limpia el registro y guarda las ventas correctas.
let resumen = resumenPorProducto(ventas); // R: Agrupa los productos y calcula sus ingresos.
let precios = ventas.map((x) => x.precio); // R: Obtiene los precios de todas las ventas.
let total = sumar(...precios); // R: Suma todos los precios utilizando la funcion sumar.
let preciosConDescuento = aplicarATodos(precios, descuento); // R: Aplica el descuento del 15% a todos los precios.
let promocion = productoAlAzar(ventas); // R: Selecciona un producto al azar para la promocion.


// REPORTE FINAL
console.log("========== REPORTE DE LA CAFETERIA =========="); // R: Muestra el titulo del reporte.
console.log("PRODUCTOS VENDIDOS:"); // R: Indica el inicio de la lista de productos.
for (let i = 0; i < resumen.length; i++) { // R: Recorre los productos del resumen.
    console.log(capitalizar(resumen[i].producto) + " | Veces vendido: " + resumen[i].veces + " | Ingreso: $" + resumen[i].ingreso.toFixed(2)); // R: Imprime el producto, las ventas y el ingreso.
}
console.log("---------------------------------------------"); // R: Separa la lista del total.
console.log("TOTAL DE VENTAS: $" + total.toFixed(2)); // R: Muestra el ingreso total de la cafeteria.
console.log("PRODUCTO DE LA PROMOCION: " + capitalizar(promocion)); // R: Muestra el producto elegido al azar.
console.log("---------------------------------------------"); // R: Separa el reporte de la prueba de descuentos.
console.log("PRECIOS CON DESCUENTO DEL 15%:"); // R: Muestra la prueba de las funciones de descuento.
console.log(preciosConDescuento); // R: Imprime los precios despues de aplicar el descuento.
console.log("============================================="); // R: Finaliza el reporte.