import React from 'react';
import './Contacto.css';

const Contacto = () => {
    return (
        <div className="contacto">
            <h1>CONTÁCTANOS</h1>
            <div className="contacto-content">
                <div className="contacto-info">
                    <img src="logo.png" alt="CCS Coffee Bar Logo" className="contacto-logo" />
                    <h2>Correo Electrónico:</h2>
                    <p>CcsCoffeeBar@gmail.com</p>
                    <h2>Número del Local:</h2>
                    <p>0212152351</p>
                    <h2>WhatsApp:</h2>
                    <p>04141247083</p>
                </div>
                <div className="contacto-mapa-feedback">
                    <div className="contacto-mapa">
                        <h2>UBICACIÓN</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12564.540153097852!2d-66.8862318207569!3d10.464366819407038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a59fa9f5f2835%3A0xd2567074fbf56872!2sUniversidad%20Metropolitana!5e0!3m2!1ses!2sve!4v1678439351421!5m2!1ses!2sve"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <p>Distribuidor Metropolitano Caracas, 1060, Miranda</p>
                    </div>
                    <div className="contacto-feedback">
                        <h2>FEEDBACK</h2>
                        <p>Si desea realizar un reclamo o una crítica constructiva utilice el recuadro</p>
                        <textarea placeholder="Comentario"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacto;
