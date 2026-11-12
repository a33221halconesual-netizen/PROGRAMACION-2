// 6PROPINAS Y CUENTA
// CALCULAR PROPINA: calcula cuanto dinero se dejara de propina.
function calcularPropina(subtotal, porcentaje) {
    let propina = subtotal * porcentaje / 100; // Multiplica el subtotal por el porcentaje y divide entre 100 para obtener la propina.
    return Math.round(propina * 100) / 100; // Redondea la propina a dos decimales y devuelve el resultado.
}

// TOTAL CON PROPINA: calcula el total que se debe pagar.
function totalConPropina(subtotal, porcentaje) {
    let propina = calcularPropina(subtotal, porcentaje); // R: Llama a calcularPropina() para obtener la cantidad de propina.
    let total = subtotal + propina; // R: Suma el subtotal y la propina para obtener el total.
    return Math.round(total * 100) / 100; // R: Redondea el total a dos decimales y devuelve el resultado.
}

//  DIVIDIR CUENTA: divide el total entre varias personas.
function dividirCuenta(total, personas) {
    let cantidad = total / personas; // R: Divide el total de la cuenta entre el numero de personas.
    return Math.round(cantidad * 100) / 100; // R: Redondea la cantidad que pagara cada persona a dos decimales.
}

// CALCULADORA INTERACTIVA DE PROPINAS Y CUENTA
let subtotal = Number(prompt("Ingresa el subtotal de la cuenta:")); // R: Pide al usuario el subtotal y convierte el dato a numero.
let porcentaje = Number(prompt("¿Que porcentaje de propina deseas dejar?")); // R: Pregunta que porcentaje de propina desea agregar.

// COMPROBAR QUE LOS DATOS SEAN CORRECTOS
if (Number.isNaN(subtotal) || subtotal <= 0 || Number.isNaN(porcentaje) || porcentaje < 0) { // R: Comprueba que el subtotal sea mayor que 0 y que el porcentaje no sea negativo.
    console.log("Error: Ingresa cantidades validas."); // R: Muestra un mensaje si los datos ingresados no son correctos.
} else {
    let propina = calcularPropina(subtotal, porcentaje); // R: Ejecuta calcularPropina() para obtener la cantidad de propina.
    let total = totalConPropina(subtotal, porcentaje); // R: Ejecuta totalConPropina() para obtener el total de la cuenta.
    console.log("----- RESUMEN DE LA CUENTA -----"); // R: Muestra el titulo del resumen.
    console.log("Subtotal: $" + subtotal.toFixed(2)); // R: Muestra el subtotal con dos decimales.
    console.log("Porcentaje de propina: " + porcentaje + "%"); // R: Muestra el porcentaje de propina elegido.
    console.log("Propina: $" + propina.toFixed(2)); // R: Muestra la cantidad de dinero que se dejara de propina.
    console.log("Total con propina: $" + total.toFixed(2)); // R: Muestra el total que se debe pagar.

    // OPCION PARA DIVIDIR LA CUENTA
    let opcion = prompt("¿Deseas dividir la cuenta? Escribe SI o NO").toUpperCase(); // R: Pregunta si el usuario desea dividir la cuenta y convierte su respuesta a mayusculas.
    if (opcion === "SI") { // R: Comprueba si el usuario eligio dividir la cuenta.
        let personas = Number(prompt("¿Entre cuantas personas deseas dividir la cuenta?")); // R: Pregunta el numero de personas y convierte el dato a numero.
        if (Number.isNaN(personas) || personas <= 0 || !Number.isInteger(personas)) { // R: Comprueba que el numero de personas sea valido y que sea un numero entero.
            console.log("Error: Ingresa un numero de personas valido."); // R: Muestra un mensaje si la cantidad de personas no es correcta.

        } else {
            let porPersona = dividirCuenta(total, personas); // R: Ejecuta dividirCuenta() para calcular cuanto pagara cada persona.
            console.log("Personas: " + personas); // R: Muestra el numero de personas que dividiran la cuenta.
            console.log("Total por persona: $" + porPersona.toFixed(2)); // R: Muestra cuanto debe pagar cada persona.
        }

    } else if (opcion === "NO") { // R: Comprueba si el usuario no desea dividir la cuenta.
        console.log("La cuenta sera pagada completa por una persona."); // R: Muestra un mensaje indicando que no se dividira la cuenta.
    } else {
        console.log("Opcion no valida."); // R: Muestra un aviso si el usuario no escribio SI o NO.
    }
}