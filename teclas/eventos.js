var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x;
var y;


cuadrito.addEventListener("mousedown", pulsarMouse);
cuadrito.addEventListener("mousemove", moverMouse);
cuadrito.addEventListener("mouseup", levantarMouse);

function pulsarMouse(evento) {
    estado = 1;
    x = evento.layerX;
    y = evento.layerY;
}

function moverMouse(evento) {
    if (evento.buttons == 1) {
        dibujarLinea("red", x, y, evento.layerX, evento.layerY, papel);
    }
    x = evento.layerX;
    y = evento.layerY;
}

function levantarMouse(evento) {
    estado = 0; //El click suelto
    x = evento.layerX;
    y = evento.layerY;
}


function dibujarLinea(color, xinficial, yinicial, xfinal, yfinal, lienso) {
    lienso.beginPath();
    lienso.strokeStyle = color;
    lienso.lineWidth = 3;
    lienso.moveTo(xinficial, yinicial);
    lienso.lineTo(xfinal, yfinal);
    lienso.stroke();
    lienso.closePath();
}

function dibujarTeclado(evento) {
    var colorcito = "pink";
    var movimietno = 1;
    switch (evento.keyCode) {
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimietno, papel);
            y = y + movimietno;
            break;
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimietno, papel);
            y = y - movimietno;
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimietno, y, papel);
            x = x - movimietno;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimietno, y, papel);
            x = x + movimietno;
            break;
        default:
            console.log("Otra tecla");
            break;
    }

}