var matriz =require('./datosJson')

function buscarValor(matriz, valor) {
    var filasEncontradas = [];
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === valor) {
                filasEncontradas.push(matriz[i]);
                break; // Terminar la búsqueda en esta fila después de encontrar el valor
            }
        }
    }
    if (filasEncontradas.length === 0) {
        
        console.log("El valor no se encuentra en la matriz.");
    }
    return filasEncontradas; // Devolver todas las filas encontradas que contienen el valor
}


// Función para imprimir una tabla en la consola
function imprimirTabla(filasEncontradas) {
    // Encabezado de la tabla
    console.log("┌───────────┬───────────┬───────────┬───────────┐");
    console.log("│ Columna 1 │ Columna 2 │ Columna 3 │ Columna 4 │");
    console.log("├───────────┼───────────┼───────────┼───────────┤");

    // Imprimir cada fila
    for (var i = 0; i < filasEncontradas.length; i++) {
        var fila = filasEncontradas[i];
        var filaString = "│";
        // Imprimir cada elemento de la fila
        for (var j = 0; j < fila.length; j++) {
            filaString += " " + fila[j].toString().padEnd(10) + " │";
        }
        console.log(filaString);
    }

    // Pie de la tabla
    console.log("└───────────┴───────────┴───────────┴───────────┘");
}

// Suponiendo que tienes definida la función buscarValor que devuelve las filas encontradas
var filasEncontradas = buscarValor(matriz, "ZAC-ANT.LACEJA4-B2-C600");
if (filasEncontradas.length > 0) {
    imprimirTabla(filasEncontradas);
    console.log(filasEncontradas.length);
} else {
    console.log("No se encontraron filas con el valor.");
}
