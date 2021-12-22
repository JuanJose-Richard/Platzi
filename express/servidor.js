var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado) {
    resultado.send("Este es el home");
}

function cursos(peticion, resultado) {
    resultado.send("Estos son los cursos");
}
//En la misma red wifi solo abrir con la ip de nuestro pc
//192.168.1.16:8989
aplicacion.listen(8989);