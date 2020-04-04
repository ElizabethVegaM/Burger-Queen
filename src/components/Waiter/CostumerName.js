/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { addCustomerName } from '../../actions/waiter';

const CustomerName = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setName(event.target.value.toUpperCase());
  };

  return (
    <Container className="costumer-container">
      <Row>
        <Col>
          <span>Cliente:</span>
          <Input required type="text" value={name} onChange={handleChange} />
          <Button type="button" onClick={() => dispatch(addCustomerName(name))}>AÑADIR</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerName;
