import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/MiniPaletteStyles';

export default withStyles(styles)(function MiniPalette(props) {
	const { classes, paletteName, emoji, id, colors, deletePalette } = props;
	return (
		<div className={classes.root}>
			<DeleteIcon className={classes.deleteIcon} onClick={() => deletePalette(id)} />
			<Link to={`palette/${id}`} style={{ textDecoration: 'none', color: '#525252' }}>
				<div className={classes.colors}>
					{colors.map((color) => (
						<div className={classes.miniBox} style={{ backgroundColor: color.color }} key={color.name} />
					))}
				</div>
				<h5 className={classes.title}>
					{paletteName} <span className={classes.emoji}>{emoji}</span>
				</h5>
			</Link>
		</div>
	);
});
