/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Kitchen from './components/Kitchen/Kitchen';
// import Main from './components/Waiter/Waiter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Kitchen />
      </div>
    );
  }
}

export default App;
