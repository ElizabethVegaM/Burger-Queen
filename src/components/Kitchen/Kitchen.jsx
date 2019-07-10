/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from '../Firebase/firestore';

class Kitchen extends Component {
  constructor() {
    super();
    this.state = {
      ordersList: [],
    };
  }

  componentWillMount() {
    const db = firebase.firestore();
    db.collection('ordersList')
      .onSnapshot((snapshot) => {
        if (snapshot.size) {
          const messages = [];
          snapshot.forEach(doc => messages.push(doc.data()));
          this.setState({
            ordersList: messages,
          });
        } else {
          this.setState({ ordersList: null });
        }
      });
  }

  render() {
    return (
      <Container>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Pedido</TableCell>
                <TableCell align="right">Cliente</TableCell>
                <TableCell align="right">Estado</TableCell>
                <TableCell align="right">Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.ordersList.map(row => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {row.items}
                  </TableCell>
                  <TableCell align="right">{row.client}</TableCell>
                  <TableCell align="right">En preparación</TableCell>
                  <TableCell align="right">En preparación</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    );
  }
}

export default Kitchen;
