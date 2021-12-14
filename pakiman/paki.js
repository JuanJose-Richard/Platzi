var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pocacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";



class Pakiman {
    constructor(nombre, vida, ataque) {
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;

        this.imagen.src = imagenes[this.nombre];


    }
    hablar() {
        alert(this.nombre);
    }
    mostrar() {
        document.write(this.imagen);
    }
}

var cauchin = new Pakiman("Cauchin", 100, 30);
var pocacho = new Pakiman("Pocacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
pocacho.mostrar();