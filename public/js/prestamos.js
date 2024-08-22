function calcularPrestamo() {
  
    document.getElementById("resultadoPrestamo").innerHTML = "";
    
 
    let monto = Number(document.getElementById("importe").value);
    let meses = Number(document.getElementById("meses").value);
    let interes = Number(document.getElementById("interes").value);
 
    if (monto > 0 && meses > 0) {
       
        let cuota = monto / meses;
        let interesMensual = (monto * interes / 100) / meses;
        let cuotaTotal = cuota + interesMensual;
        
        
        let interesTotal = interesMensual * meses;
        let pagoTotal = cuotaTotal * meses;
        
       
        document.getElementById("resultadoPrestamo").innerHTML =
            `<p><strong>Detalles del Préstamo:</strong></p>
            <p><strong>Cuota Mensual:</strong> ${cuota.toFixed(2)}</p>
            <p><strong>Interés Mensual:</strong> ${interesMensual.toFixed(2)}</p>
            <p><strong>Pago Total por Mes:</strong> ${cuotaTotal.toFixed(2)}</p>
            <p><strong>Interés Total:</strong> ${interesTotal.toFixed(2)}</p>
            <p><strong>Pago Total:</strong> ${pagoTotal.toFixed(2)}</p>`;
    } else {
       
        alert("Ingrese un Número positivo para el monto y el plazo en meses.");
    }
}