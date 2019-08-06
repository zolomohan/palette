import React, {Component} from 'react';
import Palette from './Palette';
import './App.css';
import seedColors from './seedColors';
import {generatePalette} from './colorHelper'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Palette { ...generatePalette(seedColors[4]) } /> 
      </div>
    );
  }
  
}

export default App;
