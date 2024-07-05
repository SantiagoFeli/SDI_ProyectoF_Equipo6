import React from 'react';
import './Navbar.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Asegúrate de tener la imagen del logo en la carpeta adecuada

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/Menú" className="nav-link">MENÚ</Link>
        <Link to="/Conócenos" className="nav-link">CONÓCENOS</Link>
      </div>
      <div className="navbar-center">
        <Link to="/">
          <img src={logo} alt="Caracas Coffee" className="navbar-logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/Pedido" className="nav-link">PEDIDO</Link>
        <Link to="/Contacto" className="nav-link">CONTACTO</Link>
        <Button text="Iniciar Sesión" className="login" onClick={() => { /* Lógica para iniciar sesión */ }} />
        <Button text="Regístrate" className="register" onClick={() => { /* Lógica para registrarse */ }} />
      </div>
    </nav>
  );
};

export default Navbar;
