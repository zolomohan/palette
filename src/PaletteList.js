import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';

export default withStyles(styles)(
	class PaletteList extends Component {
		render() {
			const { classes, palettes } = this.props;
			return (
				<div className={classes.root}>
					<div className={classes.container}>
						<nav>
							<h1>Palette</h1>
						</nav>
						<div className={classes.palettes}>
							{palettes.map((palette) => <MiniPalette {...palette} key={palette.id} />)}
						</div>
					</div>
				</div>
			);
		}
	}
);
