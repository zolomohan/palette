import React, {Component} from 'react';
import Palette from './Palette';
import PaletteList from './PaletteList'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import seedColors from './seedColors';
import {generatePalette} from './colorHelper'

class App extends Component {

	findPalette = id => seedColors.find( palette => (palette.id === id))

  render(){
    return (
			<Switch>
				<Route exact path = '/' render = {() => <PaletteList palettes = {seedColors} />} />
				<Route exact path = '/palette/:id' render = { routeProps => <Palette { ...generatePalette(this.findPalette(routeProps.match.params.id)) } /> } />
			</Switch>
    );
  }
  
}

export default App;
