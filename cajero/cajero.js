var billetes = [];
billetes["50"] = "50.jpg";
billetes["20"] = "20.jpg";
billetes["10"] = "10.jpg";

class Billete {
    constructor(v, c) {
        this.imagen = new Image();
        this.valor = v;
        this.cantidad = c;
        this.imagen.src = billetes[this.valor];
    }

}


function entregarDinero() {
    saldoCajero.innerHTML = "Consultar saldo para la siguiente operacion";
    b.style.display = 'none';
    cajaNumber.style.display = 'none';
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for (var bi of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);

            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);

        }

    }
    if (dinero > 0) {

        resultado.innerHTML = "soy un cajero pobre y no tengo suficiente dinero";
    } else {
        for (var e of entregado) {
            if (e.cantidad > 0) {
                resultado.innerHTML += "<h2> billetes " + e.cantidad + " de:</h2>"
                resultado.innerHTML += "<img src=" + e.imagen.src + " id='billetes' width='250' height='150' />";

            }

        }
    }
}

function sumaCajero() {
    var rsaldo = 0;
    var rsobra = 0;
    var result = 0;

    b.style.display = 'inline';
    cajaNumber.style.display = 'inline';
    resultado.innerHTML = "";
    for (var sa of entregado) {
        rsobra += sa.valor * sa.cantidad;

    }
    for (var so of caja) {
        rsaldo += so.valor * so.cantidad;

    }
    result = rsaldo - rsobra;
    saldoCajero.innerHTML = "El cajero cuenta con " + result + "<br/> Puede continuar";
    return rsaldo;
}



var caja = [];
var entregado = [];
caja.push(new Billete(50, 50));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));

var dinero = 0;
var div = 0;
var papeles = 0;
var cajaNumber = document.getElementById("dinero");
var resultado = document.getElementById("resultado");
var saldoCajero = document.getElementById("saldo");
var ba = document.getElementById("consultar");
ba.addEventListener("click", sumaCajero);
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);