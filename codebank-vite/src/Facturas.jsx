import React, { useState } from "react";
import './Convertidor.css'

function Facturas() {

    const [prestamoResult, setPrestamoResult] = useState(false);
    const [factura, setFactura] = useState('');
    const [monto, setMonto] = useState('');
    const [motivo, setMotivo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (factura && monto) {
            setPrestamoResult(true);
        } else {
            alert("Por favor, complete todos los campos obligatorios.");
        }
    };





    return (
        <div className="converter-container">
            <h2>Pago de Facturas</h2>
            <hr />

            <form className="form-group" onSubmit={(e) => {handleSubmit(e);} }>
            <label>Ingrese el Nro de Factura:</label>
            <input
            className="menu"
            type="number"
            placeholder="Nro. de Factura"
            id="facturaInput"
            onChange={(e) => setFactura(e.target.value)}
            />

            <label>Indique el monto:</label>
            <input
            className="menu"
            type="number"
            placeholder="Monto"
            id="montoInput"
            onChange={(e) => setMonto('$'+e.target.value)}
            />
            <label>Indique motivo de la factura (opcional)</label>
            <input
            className="menu"
            type="text"
            placeholder="Motivo"
            id="motivoInput"
            onChange={(e) => setMotivo(e.target.value)}
            />

            <button className="boton" type="submit">Pagar</button>
            </form>

            {prestamoResult && (
            <div>
            <hr />
            <p>
            <strong>Pago Realizado</strong>
            </p>
            <p>
            <strong>Nro. de Factura:</strong> {factura}
            </p>
            <p>
            <strong>Monto:</strong> {monto}
            </p>
            <p>
            <strong>Motivo:</strong> {motivo}
            </p>
            </div>
            )}
        </div>
        );
}

export default Facturas;