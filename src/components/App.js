import React, { useContext } from 'react';
import { ThemeContext } from 'contexts/theme.context';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from 'components/Page';
import ViewPalette from 'components/view-palette/ViewPalette';
import PaletteList from 'components/palette-list/PaletteList';
import CreatePalette from 'components/create-edit-palette/CreateAndEdit';
import generateShades from 'helpers/generateShades';
import ColorProvider from 'contexts/color.context';
import { PaletteContext } from 'contexts/palette.context';
import seedColors from 'helpers/seedColors';
import 'styles/animations/PageTransition.css';

export default function App() {
	const theme = useContext(ThemeContext);
	const palettes = useContext(PaletteContext);

	const findPalette = (route) => palettes.find((palette) => palette.id === route.match.params.paletteId);

	const MUITheme = createMuiTheme({
		overrides : {
			MuiSlider : {
				thumb  : { color: theme.darkMode ? '#a68efb' : '#5142b2' },
				track  : { color: theme.darkMode ? '#a68efb' : '#5142b2' },
				active : { color: theme.darkMode ? '#ebe2ff' : '#a68efb' }
			}
		},
		palette   : {
			primary   : { main: theme.darkMode ? '#bfa9fd' : '#5142b2' },
			secondary : { main: theme.darkMode ? '#ee7e70' : '#d83125' },
			type      : theme.darkMode ? 'dark' : 'light'
		}
	});

	return (
		<ThemeProvider theme={MUITheme}>
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
											<ColorProvider initialColors={seedColors[0].colors}>
												<CreatePalette route={route} />
											</ColorProvider>
										</Page>
									)}
								/>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/palette/:paletteId`}
									render={(route) => {
										let palette = findPalette(route);
										return palette === undefined ? (
											<Redirect to={`${process.env.PUBLIC_URL}/notfound`} />
										) : (
											<Page>
												<ViewPalette
													singleColorShades={false}
													palette={generateShades(palette)}
												/>
											</Page>
										);
									}}
								/>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/palette/:paletteId/edit`}
									render={(route) => {
										return (
											<Page>
												<ColorProvider initialColors={findPalette(route).colors}>
													<CreatePalette editMode />
												</ColorProvider>
											</Page>
										);
									}}
								/>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/palette/:paletteId/:colorId`}
									render={(route) => {
										let palette = findPalette(route);
										if (
											palette === undefined ||
											palette.colors.filter(
												(color) =>
													color.name.toLowerCase().replace(/ /g, '-') ===
													route.match.params.colorId
											).length === 0
										)
											return <Redirect to={`${process.env.PUBLIC_URL}/notfound`} />;
										return (
											<Page>
												<ViewPalette
													singleColorShades={true}
													palette={generateShades(palette)}
													colorId={route.match.params.colorId}
												/>
											</Page>
										);
									}}
								/>
								<Route render={() => <Page variant='404' />} />
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		</ThemeProvider>
	);
}
