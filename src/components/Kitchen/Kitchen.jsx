/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
import React, { useState, useEffect } from 'react';
import './kitchen.css';
import { Container, Row, Col } from 'react-grid-system';
import Header from '../Common/Header';
import firebase from '../Firebase/firestore';

const Kitchen = () => {
  const [everyOrder, getOrders] = useState(null);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('ordersList')
      .onSnapshot((snapshot) => {
        if (snapshot.size) {
          const orders = [];
          snapshot.forEach(doc => orders.push(doc.data()));
          getOrders({
            ordersList: orders,
          });
        } else {
          getOrders({ ordersList: null });
        }
      });
  });

  return (
    <Container className="main-page">
      <Header text="Estado de Pedidos" />
      <Row className="main-orders-container kitchen-container">
        {everyOrder && everyOrder.ordersList.map(order => (
          <Col sm={2} className="kitchen-order-container">
            <p>{order.time}</p>
            <p className="kitchen-client-name">{`Cliente: ${order.client}`}</p>
            <p>Pedido:</p>
            <ul>
              {order.items.map(item => <li>{item.item}</li>)}
            </ul>
            <p>{`Total: $${order.price}`}</p>
            <p>{`Estado: ${order.status}`}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Kitchen;
