import React from 'react';
import './Pedido.css';
import image7 from './../assets/image7.png';
import image6 from './../assets/image6.png';

const OrderItem = ({ id, date, type, price, image }) => (
  <div className="order-item">
    <img src={image} alt={type} className="order-image" />
    <div className="order-details">
      <span className="order-id">{id}</span>
      <span className="order-type">{type}</span>
      <span className="order-price">${price}</span>
    </div>
    <span className="order-date">{date}</span>
  </div>
);

const Orders = () => (
  <div className="orders">
    <h1 className="orders-title">PEDIDOS</h1>
    <OrderItem
      id="CB-85674010"
      date="12/05/2024"
      type="Coffee - Cafe Negro"
      price="6,00"
      image={image7}
    />
    <OrderItem
      id="CB-85674010"
      date="12/05/2024"
      type="Cold Brews - Cafe Helado"
      price="7,50"
      image={image6}
    />
  </div>
);

export default Orders;
