const fs = require("fs");

function testarSoma(num1, num2) {
    return num1 + num2;
}

function testarPrimo(num1) {
    var contador = 0;
    var x;
    for (x = 1; x <= num1; x++) { //Verifica as divisibilidades do numero inserio
        if (num1 % x == 0) {
            contador++;
        }
    }

    if (contador == 2) {
        return "O numero eh primo";
    } else {
        return "O numero nao eh primo";
    }
}

module.exports = {
    testarSoma,
    testarPrimo

}