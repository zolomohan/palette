import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiniPalette from './MiniPalette';
import styles from '../styles/PaletteListStyles';
import { PaletteContext } from '../contexts/palette.context';

export default withStyles(styles)(function PaletteList({ classes }) {
	const palettes = useContext(PaletteContext);

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<nav className={classes.nav}>
					<h1>Palette</h1>
					<Link to={`${process.env.PUBLIC_URL}/palette/new`}>Create Palette</Link>
				</nav>
				<TransitionGroup className={classes.palettes}>
					{palettes.map((palette) => (
						<CSSTransition key={palette.id} classNames='fade' timeout={500}>
							<MiniPalette {...palette} key={palette.id} />
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
		</div>
	);
});
