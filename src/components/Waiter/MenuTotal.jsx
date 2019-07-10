import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-grid-system';
import Button from '@material-ui/core/Button';
import { sendOrderToKitchen, cleanOrder } from '../../actions/waiter';
import OrderItem from './OrderItem';
import firebase from '../Firebase/firestore';



class MenuTotal extends Component {
  constructor(props) {
    super(props);
    this.getSum = this.getSum.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.items = [];
    this.totalPrice = 0;
  }

  getSum = (total, num) => total + num;

  handleSubmit(event) {
    event.preventDefault();
    const db = firebase.firestore();
    let total = {
      client: this.props.waiter.name,
      items: this.items,
      price: this.totalPrice,
    };
    // cambiar a switch/case
    if (this.props.waiter.name !== '') {
      db.settings({
        timestampsInSnapshots: true
      });
      // this.props.orderIsReadyToSend(total)
      this.props.cleanActualOrder()
      db.collection('ordersList').add(total)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
      alert('Pedido enviado exitosamente')
    } else {
      alert('Debe ingresar un nombre')
      return;
      // En React no se deberían usar ni alerts ni console.log
    }
  }

  render() {
    // Se separan los items de sus respectivos precios
    const dividedItem = this.props.waiter.order.map(element => element.split('+'))
    this.items = dividedItem.map(element => element[0])
    const prices = dividedItem.map(element => parseInt(element[1], 10));
    if (this.items !== undefined && this.items.length >= 1) {
      this.totalPrice = prices.reduce(this.getSum);
    }
    return (
      <Container>
        <Row>
          <p>
            CLIENTE: {this.props.waiter.name}
          </p>
        </Row>
        <Row>
          <form onSubmit={this.handleSubmit}>
            {dividedItem.map(element => <OrderItem item={element[0]} price={element[1]} />)}
            <p>TOTAL</p>
            <p>{this.totalPrice}</p>
            <Button type="submit" variant="contained" color="primary">ENVIAR</Button>
          </form>
        </Row>
      </Container>
    )
  }
};

const mapStateToProps = (state) =>{
  return {
    ...state,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
  // estos nombres van directo a props por lo que no deben ser iguales a estados o propss
    orderIsReadyToSend: sendOrderToKitchen(dispatch),
    cleanActualOrder: cleanOrder(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuTotal);
