import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Fridge from './components/Fridge'

class App extends Component {
  render() {
    return (
      <div className={"container"}>
        <NavBar />
        <Fridge />
      </div>
    );
  }
}

export default App;
