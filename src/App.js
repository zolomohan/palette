import React, {Component} from 'react';
import Palette from './Palette';
import './App.css';
import seedColors from './seedColors';
import {generatePalette} from './colorHelper'

class App extends Component {
  render(){
		console.log(generatePalette(seedColors[0]))
    return (
      <div className="App">
        <Palette { ...generatePalette(seedColors[0]) } /> 
      </div>
    );
  }
  
}

export default App;
