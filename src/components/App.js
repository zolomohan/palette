import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from 'components/Page';
import Palette from 'components/view-palette/ViewPalette';
import PaletteList from 'components/palette-list/PaletteList';
import CreatePalette from 'components/create-edit-palette/CreateAndEdit';
import generateShades from 'helpers/generateShades';
import ColorProvider from 'contexts/color.context';
import { PaletteContext } from 'contexts/palette.context';
import seedColors from 'helpers/seedColors';
import 'styles/animations/PageTransition.css';

export default function App() {
	const palettes = useContext(PaletteContext);
	const palette = (route) =>
		generateShades(
			palettes.find((palette) => palette.id === route.match.params.paletteId)
		);

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
								render={(route) => (
									<Page>
										<ColorProvider
											initialColors={seedColors[0].colors}
										>
											<CreatePalette route={route} />
										</ColorProvider>
									</Page>
								)}
							/>
							<Route
								exact
								path={`${process.env.PUBLIC_URL}/palette/:paletteId`}
								render={(route) => (
									<Page>
										<Palette
											singleColorShades={false}
											palette={palette(route)}
										/>
									</Page>
								)}
							/>
							<Route
								exact
								path={`${process.env.PUBLIC_URL}/palette/:paletteId/edit`}
								render={(route) => {
									return (
										<Page>
											<ColorProvider
												initialColors={
													palettes.find(
														(palette) =>
															palette.id ===
															route.match.params.paletteId
													).colors
												}
											>
												<CreatePalette route={route} editMode />
											</ColorProvider>
										</Page>
									);
								}}
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
											palette={palette(route)}
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
