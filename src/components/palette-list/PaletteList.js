import React, { useContext } from 'react';
import { PaletteContext } from 'contexts/palette.context';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiniPalette from 'components/palette-list/MiniPalette';
import styles from 'styles/PaletteList';
import 'styles/animations/MiniPaletteFade.css'

export default withStyles(styles)(function PaletteList({
	classes: { root, container, nav, palettes }
}) {
	const paletteList = useContext(PaletteContext);

	return (
		<div className={root}>
			<div className={container}>
				<nav className={nav}>
					<h1>Palette</h1>
					<Link to={`${process.env.PUBLIC_URL}/palette/new`}>
						Create Palette
					</Link>
				</nav>
				<TransitionGroup className={palettes}>
					{paletteList.map((palette) => (
						<CSSTransition key={palette.id} classNames='fade' timeout={500}>
							<MiniPalette {...palette} key={palette.id} />
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
		</div>
	);
});
