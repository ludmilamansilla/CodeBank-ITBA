import React, { useState } from 'react';
import Logo from "./Logo";
import './Formulario.css';

function Formulario({ closePopup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return false;
    }
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!specialCharRegex.test(password)) {
      setError('La contraseña debe contener al menos un carácter especial.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {

      console.log('Username:', username);
      console.log('Password:', password);
      closePopup();

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión en <Logo logo="" /></h2>
      <div>
        <label>Nombre de Usuario:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Clave digital:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>


      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Ingresar</button>



    </form>
  );
}

export default Formulario;
