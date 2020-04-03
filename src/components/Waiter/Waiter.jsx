/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import MenuHead from './MenuHead';
// import OptionButton from './OptionButton'
import './waiter.css';
import { Container, Row, Col } from 'react-grid-system';
// import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import MenuOption from './MenuOption';
import Header from '../Common/Header';
import CostumerName from './CostumerName';
import CustomButton from '../Common/CustomButton';
// eslint-disable-next-line import/no-named-as-default-member
import MenuTotal from './MenuTotal';
import menu from '../../menu.json';
import { addItem } from '../../actions/waiter';

const Waiter = () => {
  const [showMeals, changeMeal] = useState(false);
  const [fillings, showFillings] = useState(false);
  const toppings = menu.filter(el => el.type === 'topping');
  const sauces = menu.filter(el => el.type === 'sauce');

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
          {showMeals && showMeals.map(el => <MenuOption key={el.id} id={el.id} icon={el.icon} name={el.item} price={el.price} />)}
          {fillings && toppings.map(el => <MenuOption key={el.id} id={el.id} icon={el.icon} name={el.item} price={el.price} />)}
          {fillings && sauces.map(el => <MenuOption key={el.id} id={el.id} icon={el.icon} name={el.item} price={el.price} />)}
        </Col>
        <Col sm={4}>
          <h3>Lista de Pedido</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Waiter;

//   handleChange(event) {
//     this.props.addItemToOrder(event.target.value);
//   }

//   handleSubmit() {
//     this.preventDefault();
//   }

//   render() {
//     const breakfastMenu = Menu.breakfast;
//     const allDayMenu = Menu.allDay;
//     let button;
//     let menuArr;
//     if (breakfastMenu !== undefined && this.state.isBreakfast) {
//       menuArr = Object.entries(breakfastMenu);
//       button = menuArr.map(element => (
//         <MenuItem value={`${element[1].item}+${element[1].price}`}>
//           {element[1].item}
//           {' '}
//           - $
//           {element[1].price}
//         </MenuItem>
//       ));
//     } else if (allDayMenu !== undefined && this.state.isAllDay) {
//       menuArr = Object.entries(allDayMenu);
//       button = menuArr.map(element => (
//         <MenuItem value={`${element[1].item} +${element[1].price}`}>
//           {element[1].item}
//           {' '}
//           - $
//           {element[1].price}
//         </MenuItem>
//       ));
//     }

//     return (
//       <Container className="main-page">
//         <Row>
//           <Col sm={6}>
//             <CostumerName />
//             <Button variant="contained" onClick={this.showBreakfast.bind(this)}>Desayuno</Button>
//             <Button variant="contained" onClick={this.showAllDay.bind(this)}>Almuerzo</Button>
//             <Col sm={12} id="menu-container">
//               <form onSubmit={this.handleSubmit.bind(this)}>
//                 <FormControl>
//                   <InputLabel htmlFor="age-native-simple">Seleccionar</InputLabel>
//                   <Select name="Menu" id="" onChange={this.handleChange.bind(this)}>
//                     {button}
//                   </Select>
//                   <Button type="submit" className="hideBtn">Agregar al pedido</Button>
//                 </FormControl>
//               </form>
//             </Col>
//           </Col>
//           <Col sm={6}>
//             <h3>Lista de Pedido</h3>
//             <MenuTotal />
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// // funcion que recibe el estado desde redux y retorna el estado que necesitan en los props
// const mapStateToProps = state => ({
//   ...state,
// });

// //
// const mapDispatchToProps = dispatch => ({
//   addItemToOrder: addItem(dispatch),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Waiter);

// // connect conecta los componentes con redux y exporta todo
