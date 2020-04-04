import React, { useState } from 'react';
import './waiter.css';
import { Container, Row, Col } from 'react-grid-system';
import { useDispatch } from 'react-redux';
import MenuOption from './MenuOption';
import Header from '../Common/Header';
import CostumerName from './CostumerName';
import CustomButton from '../Common/CustomButton';
import Order from './Order';
import menu from '../../menu.json';
import { addItem } from '../../actions/waiter';

const Waiter = () => {
  const [showMeals, changeMeal] = useState(false);
  const [fillings, showFillings] = useState(false);
  const toppings = menu.filter(el => el.type === 'topping');
  const sauces = menu.filter(el => el.type === 'sauce');
  const dispatch = useDispatch();

  const showMenu = (element) => {
    switch (element) {
      case 'burgers':
        showFillings(true);
        changeMeal(menu.filter(el => el.type === 'burger'));
        break;
      case 'sides':
        showFillings(false);
        changeMeal(menu.filter(el => el.type === 'side'));
        break;
      case 'drinks':
        showFillings(false);
        changeMeal(menu.filter(el => el.type === 'drink'));
        break;
      default:
        break;
    }
  };

  return (
    <Container className="main-page">
      <Header text="Registro de Pedidos" />
      <Row className="main-orders-container">
        <Col sm={8}>
          <CostumerName />
          <CustomButton text="Hamburguesas" btnSize="large" clickFunc={() => showMenu('burgers')} cssClass="large-menu-btn" />
          <CustomButton text="Acompañamientos" btnSize="large" clickFunc={() => showMenu('sides')} cssClass="large-menu-btn" />
          <CustomButton text="Bebestibles" btnSize="large" clickFunc={() => showMenu('drinks')} cssClass="large-menu-btn" />
          {showMeals && showMeals.map(el => <MenuOption key={el.id} id={el.id} icon={el.icon} name={el.item} price={el.price} clickFunc={() => dispatch(addItem(el))} />)}
          {fillings && <h5>Ingredientes</h5>}
          {fillings && toppings.map(el => <MenuOption key={el.id} id={el.id} icon={el.icon} name={el.item} price={el.price} clickFunc={() => dispatch(addItem(el))} />)}
          {fillings && <h5>Salsas</h5>}
          {fillings && sauces.map(el => <MenuOption key={el.id} id={el.id} icon={el.icon} name={el.item} price={el.price} clickFunc={() => dispatch(addItem(el))} />)}
        </Col>
        <Col sm={4}>
          <h3>Lista de Pedido</h3>
          <Order />
        </Col>
      </Row>
    </Container>
  );
};

export default Waiter;
