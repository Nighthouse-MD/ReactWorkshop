import React, { Component } from 'react';
import './App.css';
import Fridge from './Components/Fridge';

class App extends Component {
  render() {
    return (
      <div className='fridge'>
        <Fridge />
      </div>
    );
  }
}

export default App;
