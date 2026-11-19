let tablero = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

function hayGanador(tablero) {
    // Revisar las tres filas
    for (let i = 0; i < 3; i++) {
        if (
            tablero[i][0] !== " " &&
            tablero[i][0] === tablero[i][1] &&
            tablero[i][1] === tablero[i][2]
        ) {
            return true;
        }
    }

    // Revisar las tres columnas
    for (let j = 0; j < 3; j++) {
        if (
            tablero[0][j] !== " " &&
            tablero[0][j] === tablero[1][j] &&
            tablero[1][j] === tablero[2][j]
        ) {
            return true;
        }
    }

    // Revisar diagonal principal
    if (
        tablero[0][0] !== " " &&
        tablero[0][0] === tablero[1][1] &&
        tablero[1][1] === tablero[2][2]
    ) {
        return true;
    }

    // Revisar diagonal secundaria
    if (
        tablero[0][2] !== " " &&
        tablero[0][2] === tablero[1][1] &&
        tablero[1][1] === tablero[2][0]
    ) {
        return true;
    }

    return false;
}

// Ejemplo de una partida
tablero[0][0] = "X";
tablero[1][1] = "O";
tablero[0][1] = "X";
tablero[2][2] = "O";
tablero[0][2] = "X";

console.log(tablero);
console.log("¿Hay ganador?", hayGanador(tablero));