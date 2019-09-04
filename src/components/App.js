import React from 'react';
import usePaletteState from '../hooks/usePaletteState';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from './Page';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import CreatePalette from './CreatePalette';
import seedColors from '../helpers/seedColors';
import generateShades from '../helpers/generateShades';

export default function App() {
	const [ palettes, findPalette, savePalette, deletePalette ] = usePaletteState(seedColors);
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
										<PaletteList palettes={palettes} deletePalette={deletePalette} />
									</Page>
								)}
							/>
							<Route
								exact
								path={`${process.env.PUBLIC_URL}/palette/new`}
								render={(routeProps) => (
									<Page>
										<CreatePalette savePalette={savePalette} {...routeProps} palettes={palettes} />
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
