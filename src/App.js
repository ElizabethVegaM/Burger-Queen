/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './components/Common/Header';
import Welcome from './components/WelcomePage/Welcome';
import Kitchen from './components/Kitchen/Kitchen';
import Waiter from './components/Waiter/Waiter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/waiter">
              <Waiter />
            </Route>
            <Route path="/kitchen">
              <Kitchen />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
