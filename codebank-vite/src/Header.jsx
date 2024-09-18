import React, { useState } from 'react';
import { Link } from "react-router-dom";
import BarraNav from "./BarraNav";
import IconHeader from "./IconHeader";
import Logo from "./Logo";
import Formulario from './Formulario';
import './Header.css';

function Header({items}) {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <header className='header'>
      <Logo logo="" />
      <BarraNav
        items={items} accion={handleOpenPopup}
      />
      <div className='iconos'>
        <IconHeader iClass={"fa-solid fa-magnifying-glass"} />
        <IconHeader iClass={"fa-solid fa-user"} />
        <IconHeader icon={"menu.icon"} iClass={"fa-solid fa-bars"} />
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={handleClosePopup}>X</button>
            <Formulario closePopup={handleClosePopup} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
