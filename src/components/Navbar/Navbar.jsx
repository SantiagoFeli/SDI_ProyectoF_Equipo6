import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/400X112 2.png'; // Asegúrate de tener la ruta correcta al archivo de imagen

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-buttons">
        <Link to="/iniciar-sesion" className="btn btn-outline">INICIAR SESIÓN</Link>
        <Link to="/registrarse" className="btn btn-primary">REGÍSTRATE</Link>
      </div>
      <div className="navbar-divider"></div>
      <div className="navbar-menu-container">
        <ul className="navbar-menu">
          <li><Link to="/menu">MENÚ</Link></li>
          <li><Link to="/conocenos">CONÓCENOS</Link></li>
          <li className="navbar-logo"><Link to="/"><img src={logo} alt="Caracas Coffee Logo" /></Link></li>
          <li><Link to="/pedido">PEDIDO</Link></li>
          <li><Link to="/contacto">CONTACTO</Link></li>
        </ul>
      </div>
      <div className="navbar-bottom-line"></div>
    </nav>
  );
};

export default Navbar;