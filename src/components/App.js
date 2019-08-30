import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from './Page';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import CreatePalette from './CreatePalette';
import seedColors from '../helpers/seedColors';
import { generatePalette } from '../helpers/generateShades';

export default class App extends Component {
	state = {
		palettes : JSON.parse(window.localStorage.getItem('palettes')) || seedColors
	};

	findPalette = (id) => this.state.palettes.find((palette) => palette.id === id);

	savePalette = (newPalette) =>
		this.setState({ palettes: [ ...this.state.palettes, newPalette ] }, this.syncLocalStorage);

	deletePalette = (id) =>
		this.setState(
			(currentState) => ({ palettes: currentState.palettes.filter((palette) => palette.id !== id) }),
			this.syncLocalStorage
		);

	syncLocalStorage = () => window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));

	render() {
		return (
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition key={location.key} classNames='page' timeout={100}>
							<Switch location={location}>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/`}
									render={() => (
										<Page>
											<PaletteList palettes={this.state.palettes} deletePalette={this.deletePalette} />
										</Page>
									)}
								/>

								<Route
									exact
									path={`${process.env.PUBLIC_URL}/palette/new`}
									render={(routeProps) => (
										<Page>
											<CreatePalette savePalette={this.savePalette} {...routeProps} palettes={this.state.palettes} />
										</Page>
									)}
								/>

								<Route
									exact
									path={`${process.env.PUBLIC_URL}/palette/:id`}
									render={(routeProps) => (
										<Page>
											<Palette {...generatePalette(this.findPalette(routeProps.match.params.id))} />
										</Page>
									)}
								/>

								<Route
									exact
									path={`${process.env.PUBLIC_URL}/palette/:paletteId/:colorId`}
									render={(routeProps) => (
										<Page>
											<SingleColorPalette
												colorId={routeProps.match.params.colorId}
												{...generatePalette(this.findPalette(routeProps.match.params.paletteId))}
											/>
										</Page>
									)}
								/>

								<Route render={() => <Page variant='404' />} />
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		);
	}
}
