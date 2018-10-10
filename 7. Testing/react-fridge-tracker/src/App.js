import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import NavBar from './components/NavBar';
import Fridge from './components/Fridge';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className={"container"}>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/fridge' component={Fridge} />
        </Switch>
      </div>
    );
  }
}

export default App;
