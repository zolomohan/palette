import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';

export default withStyles(styles)(
	class PaletteList extends Component {
		render() {
			const { classes, palettes, deletePalette } = this.props;
			return (
				<div className={classes.root}>
					<div className={classes.container}>
						<nav className={classes.nav}>
							<h1>Palette</h1>
							<Link to='/palette/new'>Create Palette</Link>
						</nav>
						<TransitionGroup className={classes.palettes}>
							{palettes.map((palette) => (
								<CSSTransition key={palette.id} classNames='fade' timeout={500}>
									<MiniPalette {...palette} key={palette.id} deletePalette={deletePalette} />
								</CSSTransition>
							))}
						</TransitionGroup>
					</div>
				</div>
			);
		}
	}
);
