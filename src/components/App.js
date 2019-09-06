import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from './Page';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import CreatePalette from './CreatePalette';
import generateShades from '../helpers/generateShades';
import ColorProvider from '../contexts/color.context';
import { PaletteContext } from '../contexts/palette.context';

export default function App() {
	const palettes = useContext(PaletteContext);
	const palette = (id) => generateShades(palettes.find((palette) => palette.id === id));

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
										<PaletteList />
									</Page>
								)}
							/>
							<Route
								exact
								path={`${process.env.PUBLIC_URL}/palette/new`}
								render={(routeProps) => (
									<Page>
										<ColorProvider>
											<CreatePalette {...routeProps} />
										</ColorProvider>
									</Page>
								)}
							/>
							<Route
								exact
								path={`${process.env.PUBLIC_URL}/palette/:id`}
								render={(routeProps) => (
									<Page>
										<Palette {...palette(routeProps.match.params.id)} />
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
											{...palette(routeProps.match.params.paletteId)}
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
