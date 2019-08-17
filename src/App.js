import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './helpers/seedColors';
import { generatePalette } from './helpers/colorHelper';

export default class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = {
			palettes : savedPalettes || seedColors
		};
	}

	findPalette = (id) => this.state.palettes.find((palette) => palette.id === id);

	savePalette = (newPalette) => {
		this.setState({ palettes: [ ...this.state.palettes, newPalette ] }, () =>
			window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
		);
	};

	deletePalette = (id) => {
		this.setState(
			(currentState) => ({ palettes: currentState.palettes.filter((palette) => palette.id !== id) }),
			() => window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
		);
	};

	render() {
		return (
			<Switch>
				<Route
					exact
					path='/palette/new'
					render={(routeProps) => (
						<NewPaletteForm savePalette={this.savePalette} {...routeProps} palettes={this.state.palettes} />
					)}
				/>
				<Route
					exact
					path='/'
					render={() => <PaletteList palettes={this.state.palettes} deletePalette={this.deletePalette} />}
				/>
				<Route
					exact
					path='/palette/:id'
					render={(routeProps) => <Palette {...generatePalette(this.findPalette(routeProps.match.params.id))} />}
				/>
				<Route
					exact
					path='/palette/:paletteId/:colorId'
					render={(routeProps) => (
						<SingleColorPalette
							colorId={routeProps.match.params.colorId}
							{...generatePalette(this.findPalette(routeProps.match.params.paletteId))}
						/>
					)}
				/>
			</Switch>
		);
	}
}
