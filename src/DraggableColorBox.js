import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import chroma from 'chroma-js';

const isLightColor = (color) => (color === undefined ? '#fff' : chroma(color).luminance() <= 0.1 ? '#fff' : '#000');

const styles = {
	root       : {
		width           : '20%',
		height          : '25%',
		position        : 'relative',
		margin          : '0 auto',
		display         : 'inline-block',
		marginBottom    : '-6px',
		transition      : 'all 0.1s linear',
		backgroundColor : (props) => props.color.color
	},
	boxContent : {
		position       : 'absolute',
		width          : '100%',
		left           : '0',
		bottom         : '0',
		letterSpacing  : '1px',
		textTransform  : 'uppercase',
		fontSize       : '12px',
		padding        : '10px',
		color          : (props) => isLightColor(props.color.color),
		display        : 'flex',
		justifyContent : 'space-between',
		alignItems     : 'flex-end'
	},
	deleteIcon : {
		cursor     : 'pointer',
		transform  : 'scale(1)',
		transition : '0.1s transform linear',
		'&:hover'  : {
			transform : 'scale(1.2)'
		}
	}
};

export default withStyles(styles)(function DraggableColorBox(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<div className={classes.boxContent}>
				<span className={classes.colorName}>{props.color.name}</span>
				<DeleteIcon className={classes.deleteIcon} />
			</div>
		</div>
	);
});
