var d = document.getElementById("dibujito");
var ancho = d.width;

var lienso = d.getContext("2d");
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);


function dibujarLinea(color, xinficial, yinicial, xfinal, yfinal) {
    lienso.beginPath();
    lienso.strokeStyle = color;
    lienso.moveTo(xinficial, yinicial);
    lienso.lineTo(xfinal, yfinal);
    lienso.stroke();
    lienso.closePath();
}

function dibujoPorClick() {
    var lineas = parseInt(texto.value);
    var espacio = ancho / lineas;

    paris("red", lineas, 0, espacio, 0, 0, 0, 300)
    paris("blue", lineas, 0, espacio, 300, 0, 0, 0);
    parisInvertido("red", lineas, 0, espacio, 0, 300, 0, 0);

    parisInver("red", lineas, 0, espacio, 300, 0, 300, 300);
    dibujarLinea("blue", 1, 1, 0, 300);
    dibujarLinea("blue", 1, 1, 300, 0);
    dibujarLinea("blue", 300, 1, 300, 300);
    dibujarLinea("blue", 0, 300, 300, 300);

}


function paris(colorcito, lineas, l, espacio, xi, yi, xf, yf) {

    while (l < lineas) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        l++;
    }
}

function parisInvertido(colorcito, lineas, l, espacio, xi, yi, xf, yf) {

    while (l < lineas) {


        yi = yi - espacio;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, xi, yi, xf, yf);
        l++;

    }
}

function parisInver(colorcito, lineas, l, espacio, xi, yi, xf, yf) {

    while (l < lineas) {
        yi = espacio * (l + 1);
        xf = xf - espacio;
        dibujarLinea(colorcito, xi, yi, xf, yf);
        l++;


    }
}