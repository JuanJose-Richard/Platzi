var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");
var xPollo = 400;
var yPollo = 50;
var xVaca = aleatorio(0, 420);

var yVaca = aleatorio(0, 420);
var xCerdo = aleatorio(0, 420);

var yCerdo = aleatorio(0, 420);

var cantidad = aleatorio(1, 3);
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", moverPollo);
var fondo = {
    url: "tile.png",
    cargarOk: false
}
var vaca = {
    url: "vaca.png",
    cargarOk: false
};
var cerdo = {
    url: "cerdo.png",
    cargarOk: false
};
var pollo = {
    url: "pollo.png",
    cargarOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);


vp.addEventListener("mousedown", pulsarMouse);
vp.addEventListener("mousemove", moverMouse);
vp.addEventListener("mouseup", levantarMouse);

function pulsarMouse(evento) {
    estado = 1;
    xPollo = evento.layerX;
    yPollo = evento.layerY;
}

function moverMouse(evento) {
    if (evento.buttons == 1) {
        dibujar();
        papel.drawImage(pollo.imagen, evento.layerX, evento.layerY);
    }
    xPollo = evento.layerX;
    yPollo = evento.layerY;
}

function levantarMouse(evento) {
    estado = 0; //El click suelto
    xPollo = evento.layerX;
    yPollo = evento.layerY;
}


function moverPollo(evento) {

    switch (evento.keyCode) {
        case teclas.DOWN:
            dibujar();
            yPollo++;
            papel.drawImage(pollo.imagen, xPollo, yPollo);
            break;
        case teclas.UP:
            dibujar();
            yPollo--;
            papel.drawImage(pollo.imagen, xPollo, yPollo);

            break;
        case teclas.LEFT:
            dibujar();
            xPollo--;
            papel.drawImage(pollo.imagen, xPollo, yPollo);

            break;
        case teclas.RIGHT:
            dibujar();
            xPollo++;
            papel.drawImage(pollo.imagen, xPollo, yPollo);

            break;
        default:
            console.log("Otra tecla");
            break;
    }

}

function dibujar() {
    if (fondo.cargarOk) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargarOk) {


        for (v = 0; v < cantidad; v++) {
            papel.drawImage(vaca.imagen, vaca.xVaca[v], vaca.yVaca[v]);
            console.log("valorx " + vaca.xVaca[v]);
        }

    }
    if (cerdo.cargarOk) {

        for (c = 0; c < cantidad; c++) {
            papel.drawImage(cerdo.imagen, cerdo.xCerdo[c], cerdo.yCerdo[c]);

        }

    }
    if (pollo.cargarOk) {
        papel.drawImage(pollo.imagen, xPollo, yPollo);
    }
}

function cargarFondo() {
    fondo.cargarOk = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargarOk = true;
    vaca.xVaca = [];
    vaca.yVaca = [];
    for (v = 0; v < cantidad; v++) // se necesita guardar la posicion de los animales para cuando se vuelva a carga el fondo
    {
        vaca.xVaca[v] = aleatorio(0, 7) * 60;

        vaca.yVaca[v] = aleatorio(0, 7) * 60;

    }
    dibujar();

}

function cargarCerdos() {
    cerdo.cargarOk = true;
    cerdo.xCerdo = [];
    cerdo.yCerdo = [];
    for (v = 0; v < cantidad; v++) // se necesita guardar la posicion de los animales para cuando se vuelva a carga el fondo
    {
        cerdo.xCerdo[v] = aleatorio(0, 7) * 60;

        cerdo.yCerdo[v] = aleatorio(0, 7) * 60;

    }
    dibujar();
}

function cargarPollos() {
    pollo.cargarOk = true;
    dibujar();
}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}