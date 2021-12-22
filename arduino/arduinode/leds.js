//Traemos jf como la variable donde va cargar johnny-five
var jf = require("johnny-five");
//Creamos la variable circuito y creamos un clase de tipo Board 
var circuito = new jf.Board();
//decimos cuando el circuito este listo dispare la funcion prender

circuito.on("ready", prender);

function prender() {
    //Puerto en el que se va correr el led
    var led = new jf.Led(13);
    //parpadear
    led.blink(500);
    //ejecutar en la consola con node leds.js (nombredel js)  
}