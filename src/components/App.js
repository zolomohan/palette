import React from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from './Page';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import CreatePalette from './CreatePalette';
import seedColors from '../helpers/seedColors';
import generateShades from '../helpers/generateShades';
import paletteReducer from '../reducers/palettes.reducer.js';

export default function App() {
	const [ palettes, dispatch ] = useLocalStorageState(paletteReducer, 'palettes', seedColors[0].colors);
	const findPalette = (id) => palettes.find((palette) => palette.id === id);
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
										<PaletteList palettes={palettes} dispatch={dispatch} />
									</Page>
								)}
							/>
							<Route
								exact
								path={`${process.env.PUBLIC_URL}/palette/new`}
								render={(routeProps) => (
									<Page>
										<CreatePalette dispatch={dispatch} {...routeProps} palettes={palettes} />
									</Page>
								)}
							/>
							<Route
								exact
								path={`${process.env.PUBLIC_URL}/palette/:id`}
								render={(routeProps) => (
									<Page>
										<Palette {...generateShades(findPalette(routeProps.match.params.id))} />
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
											{...generateShades(findPalette(routeProps.match.params.paletteId))}
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
