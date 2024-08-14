import React from "react";
import "./Header.css"

function Header(){
    return(
      <header className="header">
        <div className="logo-container">
          <img src="src/images/616430.png" alt="Logo" className="logo" />
        </div>
        <nav>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link">Inicio</a></li>
            <li><a href="#about" className="nav-link">Sobre Nosotros</a></li>
            <li><a href="#contact" className="nav-link">Contacto</a></li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;
