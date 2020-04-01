import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import Logo from '../Common/Logo';
import CustomButton from '../Common/CustomButton';

const Welcome = () => (
  <Container>
    <Row>
      <Logo />
    </Row>
    <Row>
      <Link to="/waiter">
        <CustomButton text="Comedor" />
      </Link>
      <Link to="/kitchen">
        <CustomButton text="Cocina" />
      </Link>
    </Row>
  </Container>
);

export default Welcome;
