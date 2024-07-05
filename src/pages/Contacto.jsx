import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Contacto.css';
import logo from '../assets/LOGO_GRANDE_2.png';


const Contacto = () => {
  return (
    <div className="contacto">
      <Navbar />
      <main className="contacto-content">
        <div className="contacto-section">
          <img src={logo} alt="Caracas Coffee Logo" className="logo" />
          <h1>CONTÁCTANOS</h1>
          <p className="contact-info"><strong>CORREO ELECTRÓNICO:</strong> <span>CcsCoffeeBar@gmail.com</span></p>
          <p className="contact-info"><strong>NÚMERO DEL LOCAL:</strong> <span>0212152351</span></p>
          <p className="contact-info"><strong>WhatsApp:</strong> <span>04141247083</span></p>
        </div>
        <div className="map-feedback-section">
          <div className="map-section">
            <h2>UBICACIÓN</h2>
            <img src="/path/to/map-image.png" alt="Ubicación del local" className="map" />
            <p>Distribuidor Metropolitano Caracas, 1060, Miranda</p>
          </div>
          <div className="feedback-section">
            <h2>FEEDBACK</h2>
            <p>Si desea realizar un reclamo o una crítica constructiva utilice el recuadro</p>
            <textarea placeholder="Comentario" className="feedback-input"></textarea>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
