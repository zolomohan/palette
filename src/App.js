import React, {Component} from 'react';
import Palette from './Palette';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import seedColors from './seedColors';
import {generatePalette} from './colorHelper'
import { palette } from '@material-ui/system';

class App extends Component {

	findPalette = id => seedColors.find( palette => (palette.id === id))

  render(){
    return (
			<Switch>
				<Route exact path = '/' render = {() => <h1>Home Page</h1>} />
				<Route exact path = '/palette/:id' render = { routeProps => <Palette { ...generatePalette(this.findPalette(routeProps.match.params.id)) } /> } />
			</Switch>
    );
  }
  
}

export default App;
