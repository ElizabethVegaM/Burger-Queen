import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Greeting extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Button variant="contained" onClick={this.showWaiter}>Registrar Pedido</Button>
    );
  }
}

export default Greeting;
