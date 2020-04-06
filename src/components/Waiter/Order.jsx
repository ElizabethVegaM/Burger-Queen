import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-grid-system';
import Button from '@material-ui/core/Button';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { cleanOrder, removeItem } from '../../actions/waiter';
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
    if (order.length >= 1) {
      addTotal(prices.reduce(add));
    } else {
      addTotal(0);
    }
  }, [order]);

  const sendOrder = () => {
    const db = firebase.firestore();
    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const total = {
      time,
      client: name,
      items: order,
      price: orderTotal,
      status: 'En Cola',
    };
    console.log(total);
    if (name.length > 1 && order) {
      db.collection('ordersList').add(total)
        .then((docRef) => {
          alert(`Pedido enviado exitosamente ${docRef}`);
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
        Cliente:
          <span>{name}</span>
        </p>
      </Row>
      <Row className="order-list">
        {order && order.map(el => <OrderItem key={el.id} item={el.item} price={el.price} clickFunc={() => dispatch(removeItem(el))} />)}
      </Row>
      <div className="order-total-container">
        <Row>
          <p>
            TOTAL:
            <span>{`$ ${orderTotal}`}</span>
          </p>
        </Row>
        <Row>
          <Button type="button" variant="contained" color="primary" onClick={() => sendOrder()}>ENVIAR</Button>
        </Row>
      </div>
    </Container>
  );
};

export default Order;
