import React, { useContext } from 'react';
import { PaletteContext } from 'contexts/palette.context';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Link from 'react-router-dom/Link';
import MiniPalette from 'components/palette-list/MiniPalette';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/PaletteList';
import 'styles/animations/MiniPaletteFade.css';

function PaletteList({ classes }) {
	const paletteList = useContext(PaletteContext);

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<nav className={classes.nav}>
					<h1>Palette</h1>
					<Link to={`${process.env.PUBLIC_URL}/palette/new`}>
						Create Palette
					</Link>
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
