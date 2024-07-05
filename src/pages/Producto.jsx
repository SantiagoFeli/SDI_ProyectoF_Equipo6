import React from 'react';
import './Producto.css';
import coffeeImage from './../assets/image7.png';

const Coffee = () => {
  return (
    <div className="container">
      <h1>COFFEE</h1>
      <h2>CARACAS COFFEE</h2>
      <p>Café caliente con base de café arábiga, intenso chocolate, chips de chocolate, leche, hielo y chocolate.</p>

      <div className="options">
        <div className="option">
          <h3>Tamaño</h3>
          <button>S</button>
          <button>M</button>
          <button>L</button>
        </div>
        <div className="option">
          <h3>Tipo de leche</h3>
          <button>ninguna</button>
        </div>
        <div className="option">
          <h3>Sabor</h3>
          <button>ninguno</button>
        </div>
        <div className="option">
          <h3>Edulcorante</h3>
          <button>ninguno</button>
        </div>
        <div className="option">
          <h3>Toppings</h3>
          <button>ninguno</button>
        </div>
      </div>

      <div className="details">
        <div className="ingredients">
          <h3>Ingredientes</h3>
          <p>
            café preparado, hielo, crema de macadamia [crema dulce de vainilla (crema, mono y diglicéridos, carragenano), leche, jarabe de vainilla (azúcar, agua, sabores naturales, sorbato de potasio, ácido cítrico)], salsa de chocolate blanco y moca (azúcar, leche desnatada condensada, aceite de coco, manteca de cacao, sabor natural, sal, sorbato de potasio, monoglicéridos), jarabe sabor a macadamia (azúcar, agua, sabores naturales (nueces de macadamia), sal, sorbato de potasio, ácido cítrico), cobertura para galletas tostadas (azúcar, galletas crumbradas (harina de arroz blanco, harina de avena, azúcar, aceite de palma, azúcar invertido, sabor natural, bicarbonato de soda), sabores naturales, sal), jugo concentrado de frutas y verduras para colorear (manzana, zanahoria), glaseado de proteína de maíz, cúrcuma (para colorear)].
          </p>
        </div>
        <div className="nutrition">
          <h3>Datos Nutricionales por Porción</h3>
          <p>Calorías: 6</p>
          <p>Grasa saturada: 0%</p>
          <p>Colesterol: 0%</p>
          <p>Sodio: 1%</p>
          <p>Carbohidratos totales: 0%</p>
          <p>Azúcares totales: 0%</p>
          <p>Vitamina D: 0%</p>
          <p>Calcio: 2%</p>
          <p>Potacio: 4%</p>
          <p>Cafeína: 200 mg</p>
        </div>
      </div>

      <button className="order-button">REALIZAR PEDIDO</button>

      <img src={coffeeImage} alt="Dunkin Coffee" className="coffee-image" />
    </div>
  );
};

export default Coffee;