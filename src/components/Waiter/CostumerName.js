/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { addCustomerName } from '../../actions/waiter';

class CustomerName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value.toUpperCase() });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveCustomerName(this.state.value.toUpperCase());
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <form onSubmit={this.handleSubmit}>
              <label>
                Nombre Cliente:
                <Input required type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <Button type="submit">AÑADIR</Button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

//
const mapDispatchToProps = dispatch => ({
  // estos nombres van directo a props por lo que no deben ser iguales a estados o propss
  saveCustomerName: addCustomerName(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerName);
