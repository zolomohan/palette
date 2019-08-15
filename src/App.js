import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import Palette from './Palette';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './helpers/seedColors';
import { generatePalette } from './helpers/colorHelper';

export default class App extends Component {
	findPalette = (id) => seedColors.find((palette) => palette.id === id);

	render() {
		return (
			<Switch>
				<Route exact path="/palette/new" render={() => <NewPaletteForm />} />
				<Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
				<Route
					exact
					path="/palette/:id"
					render={(routeProps) => (
						<Palette {...generatePalette(this.findPalette(routeProps.match.params.id))} />
					)}
				/>
				<Route
					exact
					path="/palette/:paletteId/:colorId"
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
