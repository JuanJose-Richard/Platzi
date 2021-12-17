var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pocacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pocacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
//in me muestra el indice hay casos donde necesitamos el indice entonces utilizaremos in
//of me muestra la instancia
for (var pakin of coleccion) {
    pakin.mostrar();
}
//en este caso solo se puede utlizar in no of por que imagenes no tiene valor en los indices
for (var x in imagenes) {
    console.log(x);
}