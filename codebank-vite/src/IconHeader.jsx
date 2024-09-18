
import React, { useState } from 'react';
import './IconHeader.css';
import { Link } from 'react-router-dom';




function IconHeader({ icon, label, iClass }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <> {icon == "menu.icon" ? <nav className="navbar">
            <button className="icono" aria-label={label} onClick={toggleMenu}>
                <i className={iClass}></i> </button>
                <ul className={`menu-nav${isMenuOpen ? ' show-menu' : ''}`}>
                    <Link to="/"><li className="menu-item">Inicio</li></Link> 
                    <Link to="/empresas"><li className="menu-item">Empresas</li></Link> 
                    <Link to="/homebanking"><li className="menu-item">Homebanking</li></Link> 
                </ul>
            </nav>
         : <button className="icono" aria-label={label}>
                <i className={iClass}></i>
                </button>}
       
        </>
    );
}

export default IconHeader;