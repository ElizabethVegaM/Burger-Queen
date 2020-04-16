/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
import React, { useState, useEffect } from 'react';
import './kitchen.css';
import { Container, Row, Col } from 'react-grid-system';
import Button from '@material-ui/core/Button';
import Header from '../Common/Header';
import firebase from '../Firebase/firestore';

const Kitchen = () => {
  const [everyOrder, getOrders] = useState(null);
  const [historyOrders, getHistory] = useState(null);
  const db = firebase.firestore();

  useEffect(() => {
    db.collection('ordersList')
      .onSnapshot((snapshot) => {
        if (snapshot.size) {
          const orders = [];
          snapshot.forEach((doc) => {
            orders.push({
              order: doc.data(),
              id: doc.id,
            });
          });
          getOrders(orders.filter(order => order.order.status !== 'Listo'));
          getHistory(orders.filter(order => order.order.status === 'Listo'));
        } else {
          getOrders({ ordersList: null });
        }
      });
  });

  const finishOrder = (ref) => {
    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    db.collection('ordersList').doc(ref)
      .update({
        status: 'Listo',
      })
      .then(() => {
        alert('Orden terminada');
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  };

  return (
    <Container className="main-page">
      <Header text="Estado de Pedidos" />
      <Row className="main-orders-container kitchen-container">
        {everyOrder && everyOrder.map(order => (
          <Col sm={2} className="kitchen-order-container">
            <p>{order.order.time}</p>
            <p className="kitchen-client-name">{`Cliente: ${order.order.client}`}</p>
            <p>Pedido:</p>
            <ul>
              {order.order.items.map(item => <li>{item.item}</li>)}
            </ul>
            <p>{`Total: $${order.order.price}`}</p>
            <p>{`Estado: ${order.order.status}`}</p>
            <Button type="button" className="button" onClick={finishOrder(order.id)}>
          Terminar orden
            </Button>
          </Col>
        ))}
      </Row>
      <Col sm={12} className="history-orders-container">
        <p>Pedidos Anteriores</p>
        <Row>
          {historyOrders && historyOrders.map(order => (
            <Col sm={1} className="history-order">
              <p>{`Cliente: ${order.order.client}`}</p>
              <p>{`Hora: ${order.order.time}`}</p>
            </Col>
          ))}
        </Row>
      </Col>
    </Container>
  );
};

export default Kitchen;
