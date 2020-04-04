import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-grid-system';
import Button from '@material-ui/core/Button';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { cleanOrder } from '../../actions/waiter';
import OrderItem from './OrderItem';
import firebase from '../Firebase/firestore';

const Order = () => {
  const { name, order } = useSelector(state => ({
    name: state.waiter.name,
    order: state.waiter.order,
  }), shallowEqual);
  const dispatch = useDispatch();
  const [orderTotal, addTotal] = useState(0);

  const add = (total, num) => total + num;

  useEffect(() => {
    const prices = order.map(el => el.price);
    if (order && order.length >= 1) {
      addTotal(prices.reduce(add));
    }
  }, [order]);

  const sendOrder = () => {
    const db = firebase.firestore();
    const total = {
      client: name,
      items: order,
      price: orderTotal,
    };
    if (name.length > 2 && order) {
      db.settings({
        timestampsInSnapshots: true,
      });
      db.collection('ordersList').add(total)
        .then((docRef) => {
          alert(`Pedido enviado exitosamente${docRef}`);
          dispatch(cleanOrder());
          addTotal(0);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    }
  };

  return (
    <Container>
      <Row>
        <p>
        CLIENTE:
          <span>{name}</span>
        </p>
      </Row>
      <Row>
        {order && order.map(el => <OrderItem key={el.id} item={el.item} price={el.price} />)}
        <p>TOTAL</p>
        <p>{orderTotal}</p>
        <Button type="button" variant="contained" color="primary" onClick={() => sendOrder()}>ENVIAR</Button>
      </Row>
    </Container>
  );
};

export default Order;