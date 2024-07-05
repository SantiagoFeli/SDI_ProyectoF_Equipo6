import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/menu">MENÚ</Link></li>
        <li><Link to="/conocenos">CONÓCENOS</Link></li>
        <li className="navbar-logo"><Link to="/"><img src="../../assets/400X112 2.png" alt="Caracas Coffee Logo" /></Link></li>
        <li><Link to="/pedido">PEDIDO</Link></li>
        <li><Link to="/contacto">CONTACTO</Link></li>
      </ul>
      <div className="navbar-buttons">
        <Link to="/iniciar-sesion" className="btn btn-outline">iniciar sesión</Link>
        <Link to="/registrarse" className="btn btn-primary">regístrate</Link>
      </div>
    </nav>
  );
};

export default Navbar;

