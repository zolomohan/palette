import React, { useContext } from 'react';
import { PaletteContext } from 'contexts/palette.context';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import MiniPalette from 'components/palette/list/MiniPalette';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/PaletteList';
import LightModeBackground from 'assets/backgrounds/LightMode.svg';
import DarkModeBackground from 'assets/backgrounds/DarkMode.svg';
import { ThemeContext } from 'contexts/theme.context';

function PaletteList({ classes }) {
	const paletteList = useContext(PaletteContext);
	const theme = useContext(ThemeContext);

	return (
		<div
			className={classes.root}
			style={{
				backgroundColor : theme.darkMode ? '#2e2e2e' : '#3f3383',
				backgroundImage : `url(${theme.darkMode ? DarkModeBackground : LightModeBackground})`
			}}
		>
			<div className={classes.container}>
				<nav className={classes.nav}>
					<h1>Palette</h1>
					<Link to={`${process.env.PUBLIC_URL}/palette/new`}>Create Palette</Link>
					<a onClick={theme.toggleDarkMode}>{theme.darkMode ? 'Light Mode' : 'Dark Mode'}</a>
				</nav>
				<TransitionGroup className={classes.palettes}>
					{paletteList.map((palette) => (
						<CSSTransition key={palette.id} classNames='fade' timeout={500}>
							<MiniPalette {...palette} key={palette.id} />
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
		</div>
	);
}

export default withStyles(styles)(PaletteList);
