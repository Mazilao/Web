import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {


  return (
    <div className="header-museu">
      <header>
        <div className="logo">
          <h1><Link to="/home">Independência do Brasil</Link></h1>
          <p><Link to="/home">Um Compromisso com o País</Link></p>
        </div>

        <nav>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/persson'>Historia</Link></li>
            <li><Link to='/persson'>Personagens</Link></li>
            <li><Link to='/contato'>Documentos</Link></li>
            <li><Link to='/contato'>Galeria</Link></li>
            <li><Link to='/contato'>Contato</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
