import React, { useState, useEffect } from 'react';
import './Convertidor.css';
import axios from 'axios';

function Converter() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [conversionResult, setConversionResult] = useState(null);
  const API_KEY = '3f9ea4845c9d4c4f5540323c';
  const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

  useEffect(() => {
    axios.get(`${BASE_URL}/latest/USD`)
      .then(response => {
        const currencyCodes = Object.keys(response.data.conversion_rates);
        setCurrencies(currencyCodes);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleConvert = () => {
    axios.get(`${BASE_URL}/pair/${fromCurrency}/${toCurrency}/${amount}`)
      .then(response => {
        setConversionResult(response.data.conversion_result);
      })
      .catch(error => console.error('Error during conversion:', error));
  };

  return (
    <div className="converter-container">
      <h2>Convierte tu saldo</h2>

      <div className="form-group">
        <label>Ingrese el monto:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Seleccione moneda a convertir:</label>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>


      <div className="form-group">
        <label>A:</label>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleConvert}>Convertir</button>

      {conversionResult && (
        <h3>{`${amount} ${fromCurrency} = ${conversionResult} ${toCurrency}`}</h3>
      )}
    </div>

  );
}

export default Converter;
