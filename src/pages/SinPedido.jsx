import React from 'react';
import './SinPedido.css';
import cafe from './../assets/cafe.png';

const NoOrders = () => (
  <div className="no-orders">
    <h1 className="orders-title">PEDIDOS</h1>
    <div className="no-orders-content">
      <img
        src={cafe}
        alt="No Orders"
        className="no-orders-image"
      />
      <p className="no-orders-text">No hay Pedidos activos</p>
      <p className="make-order-text">Haz un Pedido</p>
    </div>
  </div>
);

export default NoOrders;
