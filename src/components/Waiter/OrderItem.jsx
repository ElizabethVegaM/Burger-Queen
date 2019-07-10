import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { removeItem } from '../../actions/waiter';

class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.removeItemOrder = this.removeItemOrder.bind(this);
  }

  removeItemOrder() {
    const itemToRemove = `${this.props.item}+${this.props.price}`;
    this.props.removeItemFromOrder(itemToRemove);
  }

  render() {
    return (
      <Row>
        <Col sm={12}>
          <input className="totalInput" disabled type="text" value={this.props.item} />
          <input className="totalInput" sm={3} value={this.props.price} />
          <Button type="button" variant="contained" color="primary" onClick={this.removeItemOrder}><i className="fas fa-trash-alt" /></Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});


const mapDispatchToProps = dispatch => ({
  // estos nombres van directo a props por lo que no deben ser iguales a estados o propss
  removeItemFromOrder: removeItem(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderItem);
