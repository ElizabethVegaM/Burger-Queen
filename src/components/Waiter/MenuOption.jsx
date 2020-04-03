/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';

const MenuOptions = ({
  id, icon, name, price, clickFunc,
}) => (
  <Button size="small" value={id} variant="contained" key={id} onClick={clickFunc} className="menu-option-btn">
    <Container>
      <Row>
        <Col sm={3}>
          <img src={icon} alt="menu-icon" />
        </Col>
        <Col sm={9}>
          <Row>
            <p>{name}</p>
            <p>${price}</p>
          </Row>
        </Col>
      </Row>
    </Container>
  </Button>
);

MenuOptions.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  // eslint-disable-next-line react/require-default-props
  clickFunc: PropTypes.func,
};

export default MenuOptions;
