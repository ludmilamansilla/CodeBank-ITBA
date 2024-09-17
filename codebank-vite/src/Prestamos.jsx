import { useState } from "react";
import './Convertidor.css'

function Prestamos() {


    const [cuotaTotal, setCuotaTotal] = useState(0);
    const [interesMensual, setInteresMensual] = useState(0);
    const [interesTotal, setInteresTotal] = useState(0);
    const [totalPrestamo, setTotalPrestamo] = useState(0);

    const [prestamoResult, setPrestamoResult] = useState(false);

    function calcularPrestamo (amount,interes,meses){

        if (amount > 0 && meses > 0 && interes > 0) {
            let interesTotal = amount * interes * meses * 30 / (100 * 360);
            let totalPrestamo = amount + interesTotal;
            let cuotaTotal = totalPrestamo / meses;
            let interesMensual = interesTotal / meses;
            let prestamoResult = true;


            setCuotaTotal(cuotaTotal.toFixed(2));
            setInteresMensual(interesMensual.toFixed(2));
            setInteresTotal(interesTotal.toFixed(2));
            setTotalPrestamo(totalPrestamo.toFixed(2));
            setPrestamoResult(prestamoResult);

        } else {
            
       
        alert("Ingrese un Nro. positivo para el monto, el plazo en meses y el interes.");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        calcularPrestamo((parseInt(document.getElementById("monto").value)),
        (parseInt(document.getElementById("interes").value)),
        (parseInt(document.getElementById("meses").value)));
    }

    return (
        <div className="converter-container">
            <h2>Calcula tu Prestamo</h2>
            <hr />

            <form className="form-group" onSubmit={handleSubmit}>
                <label>Ingrese el monto:</label>
                <input className='menu'
                    type="number"
                    id="monto"
                />

                <label>Indique el plazo en meses:</label>
                <input className='menu'
                    type="number"
                    id="meses"
                />
                <label>Indique el interes anual:</label>
                <input className='menu'
                    type="number"
                    id="interes"
                />

                <button className='boton'>Convertir</button>
            </form>

            {prestamoResult && (
                <div>
                    <hr />
                    <p><strong>Detalles del Préstamo:</strong></p>
                    <p><strong>Cuota Mensual:</strong> ${cuotaTotal}</p>
                    <p><strong>Interés Mensual:</strong> ${interesMensual}</p>
                    <p><strong>Interés Total:</strong> ${interesTotal}</p>
                    <p><strong>Pago Total:</strong> ${totalPrestamo}</p>
                </div>
            )}
        </div>
    );
}

export default Prestamos;