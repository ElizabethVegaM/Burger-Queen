import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import Logo from '../Common/Logo';
import CustomButton from '../Common/CustomButton';
import imageLogo from '../../img/happy-burger.png' 

const Welcome = () => (
  <Container className="welcome-container">
    <Row>
      <Col sm={12}>
        <Logo source={imageLogo} altText="Happy Burger Logo" sourceClass="welcome-logo" />
      </Col>
    </Row>
    <Row>
      <Col sm={6}>
        <Link to="/waiter">
          <CustomButton text="Comedor" btnSize="large" />
        </Link>
      </Col>
      <Col sm={6}>
        <Link to="/kitchen">
          <CustomButton text="Cocina" btnSize="large" />
        </Link>
      </Col>
    </Row>
  </Container>
);

export default Welcome;
