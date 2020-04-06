import React from 'react';
import { Col } from 'react-grid-system';
import PropTypes from 'prop-types';
import {
  List, ListItem, ListItemText, ListItemSecondaryAction, Button,
} from '@material-ui/core';

const OrderItem = ({ item, price, clickFunc }) => (
  <Col sm={12}>
    <List>
      <ListItem>
        <ListItemText primary={item} secondary={`$${price}`} className="order-text" />
      </ListItem>
      <ListItemSecondaryAction>
        <Button type="button" variant="contained" onClick={clickFunc} className="delete-btn"><i className="fas fa-trash-alt" /></Button>
      </ListItemSecondaryAction>
    </List>
  </Col>
);

OrderItem.propTypes = {
  item: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  // eslint-disable-next-line react/require-default-props
  clickFunc: PropTypes.func,
};

export default OrderItem;
