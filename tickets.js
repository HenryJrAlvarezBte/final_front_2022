let montoAPagar = 0;

let precioEntrada = 200.00;


function Resumen() {

    let cantidad = document.getElementById("cantidad").value;
    
    let categoria = document.getElementById("categoria").value;

    if (categoria == "Estudiante") {
    montoAPagar = parseFloat(cantidad * precioEntrada * (1 - 0.80));
    } else if (categoria == "Trainee") {
    montoAPagar = parseFloat(cantidad * precioEntrada * (1 - 0.50));
    } else if (categoria == "Junior") {
    montoAPagar = parseFloat(cantidad * precioEntrada * (1 - 0.15));
    } else {
        document.getElementById("total-pagar").innerHTML = " Error, revise la información";
    }

    document.getElementById("total-pagar").innerHTML = " Total a Pagar: $ " + montoAPagar.toFixed(2) + " pesos.";

}