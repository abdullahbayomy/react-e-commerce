import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Aux from './hoc/auxilliary';
import './App.css';

import Products from './containers/Products/Products';
import ViewCart from './containers/ViewCart/ViewCart';
import Navbar from './components/Layout/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <Aux>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Products} />
          <Route path='/viewcart' exact component={ViewCart} />
        </Switch>
      </Aux>
    );
  }
}

export default App;
