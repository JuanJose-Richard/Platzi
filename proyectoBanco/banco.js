var bancoCliente = "union";
var cuentaCliente = "corriente";
var saldoCliente = 20000;
var bancoDestino = "fie";
var cuentaDestino = "corriente";
var horaTransferencia = 20;
var transferir = 10000;

//1 millon
if (horaTransferencia > 9 && horaTransferencia <= 12 || horaTransferencia > 15 && horaTransferencia <= 20 && cuentaCliente == "corriente" && bancoDestino == "union" && saldoCliente > transferir) {
    console.log("Tranferencia exitosa su transaccion no tiene comision");
}
if (horaTransferencia > 9 && horaTransferencia <= 12 || horaTransferencia > 15 && horaTransferencia <= 20) {
    if (cuentaCliente == "corriente") {
        if (bancoDestino == "union") {
            if (saldoCliente > transferir) {
                console.log("Tranferencia exitosa su transaccion no tiene comision");
            } else {
                console.log("Usted no cuenta con saldo sufiente");
            }
        } else {
            transferir = transferir + 100;
            console.log("su tranferencia tiene una comision de: 100, su monto transferido es" + transferir);
        }
    } else {
        console.log("Usted no tiene una cuenta corriente");
    }
} else {
    console.log("Usted esta fuera de horario de atencion");
}