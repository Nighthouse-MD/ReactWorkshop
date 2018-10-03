import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import FoodList from './components/FoodList'

class App extends Component {
  render() {
    return (
      <div className={"container"}>
        <NavBar />
        <FoodList />
      </div>
    );
  }
}

export default App;
