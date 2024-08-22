function calculoPesoDolar(cantidad, opcion) {
    let valor_dolar = 1355; // Actualizado el 22/08/24 09:38 AM https://dolarhoy.com/
    if (opcion == 1) {
        return (cantidad / valor_dolar).toFixed(2);
    } else {
        return (cantidad * valor_dolar).toFixed(2);
    }
}

function cambiarTxt() {
    var monedas = ["dolares","pesos"];
    var label = document.getElementById("txtIngrese"); 
    var opcion = document.getElementById("moneda").value;
    label.innerText = "Ingrese monto en "+monedas[opcion]+" a convertir: ";
}
function calcular() {
    var monedas = ["Pesos","Dolares"];

    var cantidad = document.getElementById("cantidad").value; 

    var opcion = document.getElementById("moneda").value;

    var resultado = calculoPesoDolar(cantidad, opcion);

    var p = document.getElementById("resultado");

    p.innerText = "Son "+resultado + " " + monedas[opcion];

    
}




