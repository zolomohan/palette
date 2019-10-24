import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from 'components/Page';
import Palette from 'components/palette/Palette';
import PaletteList from 'components/palette-list/PaletteList';
import CreatePalette from 'components/create-palette/CreatePalette';
import generateShades from 'helpers/generateShades';
import ColorProvider from 'contexts/color.context';
import { PaletteContext } from 'contexts/palette.context';
import 'styles/animations/PageTransition.css';

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
								render={({ history }) => (
									<Page>
										<ColorProvider>
											<CreatePalette history={history} />
										</ColorProvider>
									</Page>
								)}
							/>
							<Route
								exact
								path={`${process.env.PUBLIC_URL}/palette/:id`}
								render={(route) => (
									<Page>
										<Palette
											singleColorShades={false}
											palette={palette(route.match.params.id)}
										/>
									</Page>
								)}
							/>
							<Route
								exact
								path={`${process.env
									.PUBLIC_URL}/palette/:paletteId/:colorId`}
								render={(route) => (
									<Page>
										<Palette
											colorId={route.match.params.colorId}
											singleColorShades={true}
											palette={palette(
												route.match.params.paletteId
											)}
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
