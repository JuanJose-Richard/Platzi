var numeros = 1;
while (numeros <= 100) {
    if (esDivisible(numeros, 3) && esDivisible(numeros, 5)) {
        document.write(numeros + " FIZZ-BUZZ");
    } else if (esDivisible(numeros, 3)) {
        document.write(numeros + " FIZZ");
    } else if (esDivisible(numeros, 5)) {
        document.write(numeros + " BUZZ");
    } else {
        document.write(numeros);
    }
    document.write("<br/>");

    numeros++;
}

function esDivisible(num, divisor) {
    if (num % divisor == 0) {
        return true;
    } else {
        return false;
    }
}