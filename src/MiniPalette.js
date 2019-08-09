import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
	const { classes, paletteName, emoji, id, colors } = props;

	return (
		<Link to={`palette/${id}`} style={{ textDecoration: 'none', color: '#525252' }}>
			<div className={classes.root}>
				<div className={classes.colors}>
					{colors.map((color) => (
						<div className={classes.miniBox} style={{ backgroundColor: color.color }} key={color.name} />
					))}
				</div>
				<h5 className={classes.title}>
					{paletteName} <span className={classes.emoji}>{emoji}</span>
				</h5>
			</div>
		</Link>
	);
}

export default withStyles(styles)(MiniPalette);
