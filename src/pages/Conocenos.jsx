import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Conocenos.css';
import logo from './../assets/LOGO_GRANDE_1.png';

const Conocenos = () => {
  return (
    <div className="conocenos-container">
      <div className="conocenos-header">
        <h1 className="conocenos-title">NOSOTROS</h1>
        <div className="conocenos-logo">
          <img src={logo} alt="Caracas Coffee Logo" />
        </div>
      </div>
      <div className="conocenos-content">
        <div className="conocenos-text">
          <p>Caracas Coffee abrió sus puertas en el año 2024 dentro de la Universidad Metropolitana, con el objetivo de ofrecer a los estudiantes una experiencia de café excepcional.</p>
          <p>Fundado por un grupo de apasionados por el café, el local se ha destacado por servir una selección de cafés originales, cuidadosamente tostados y preparados, que brindan a los clientes un sabor único e inigualable. Además de su exquisito café, Caracas Coffee ofrece un menú variado de deliciosos desayunos, creados para satisfacer los gustos y necesidades de la comunidad universitaria.</p>
          <p>Con un ambiente acogedor y un equipo comprometido, Caracas Coffee se ha convertido en un destino favorito entre los estudiantes, quienes disfrutan de una experiencia de café inolvidable en el corazón de la universidad.</p>
        </div>
      </div>
    </div>
  );
};

export default Conocenos;