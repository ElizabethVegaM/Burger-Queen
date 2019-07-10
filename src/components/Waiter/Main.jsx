/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// import MenuHead from './MenuHead';
// import MenuOptions from './MenuOptions';
// import OptionButton from './OptionButton'
import './main.css';
import { Container, Row, Col } from 'react-grid-system';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import CostumerName from './CostumerName';
// eslint-disable-next-line import/no-named-as-default-member
import MenuTotal from './MenuTotal';
import { getMenu, addItem } from '../../actions/waiter';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBreakfast: false,
    };
    this.showBreakfast = this.showBreakfast.bind(this);
    this.showAllDay = this.showAllDay.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getMenuFromFile();
  }

  showBreakfast() {
    this.setState({ isBreakfast: true });
    this.setState({ isAllDay: false });
  }

  showAllDay() {
    this.setState({ isBreakfast: false });
    this.setState({ isAllDay: true });
  }

  handleChange(event) {
    this.props.addItemToOrder(event.target.value);
  }

  handleSubmit() {
    this.preventDefault();
  }

  render() {
    const breakfastMenu = this.props.waiter.menu.breakfast;
    const allDayMenu = this.props.waiter.menu.allDay;
    let button;
    let menuArr;
    if (breakfastMenu !== undefined && this.state.isBreakfast) {
      menuArr = Object.entries(breakfastMenu);
      button = menuArr.map(element => (
        <MenuItem value={`${element[1].item}+${element[1].price}`}>
          {element[1].item}
          {' '}
          - $
          {element[1].price}
        </MenuItem>
      ));
    } else if (allDayMenu !== undefined && this.state.isAllDay) {
      menuArr = Object.entries(allDayMenu);
      button = menuArr.map(element => (
        <MenuItem value={`${element[1].item} +${element[1].price}`}>
          {element[1].item}
          {' '}
          - $
          {element[1].price}
        </MenuItem>
      ));
    }

    return (
      <Container className="main-page">
        <Row>
          <Col sm={6}>
            <CostumerName />
            <Button variant="contained" onClick={this.showBreakfast}>Desayuno</Button>
            <Button variant="contained" onClick={this.showAllDay}>Almuerzo</Button>
            <Col sm={12} id="menu-container">
              <form onSubmit={this.handleSubmit}>
                <FormControl>
                  <InputLabel htmlFor="age-native-simple">Seleccionar</InputLabel>
                  <Select name="Menu" id="" onChange={this.handleChange}>
                    {button}
                  </Select>
                  <Button type="submit" className="hideBtn">Agregar al pedido</Button>
                </FormControl>
              </form>
            </Col>
          </Col>
          <Col sm={6}>
            <h3>Lista de Pedido</h3>
            <MenuTotal />
          </Col>
        </Row>
      </Container>
    );
  }
}

// funcion que recibe el estado desde redux y retorna el estado que necesitan en los props
const mapStateToProps = state => ({
  ...state,
});

//
const mapDispatchToProps = dispatch => ({
  // estos nombres van directo a props por lo que no deben ser iguales a estados o propss
  getMenuFromFile: getMenu(dispatch),
  addItemToOrder: addItem(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

// connect conecta los componentes con redux y exporta todo
