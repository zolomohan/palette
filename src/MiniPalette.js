import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
	root    : {
		backgroundColor : 'white',
		borderRadius    : '5px',
		padding         : '0.5em',
		position        : 'realtive',
		overflow        : 'hidden',
		'&:hover'       : {
			cursor : 'pointer'
		}
	},
	colors  : {
		backgroundColor : '#dae1e4',
		height          : '150px',
		widthL          : '100%',
		borderRadius    : '5px',
		overflow        : 'hidden'
	},
	title   : {
		display        : 'flex',
		justifyContent : 'space-between',
		margin         : '0',
		color          : 'black',
		fontSize       : '1rem',
		paddingTop     : '0.5rem',
		position       : 'relative'
	},
	emoji   : {
		margin   : '0 auto',
		fontSize : '1.1rem'
	},
	miniBox : {
		display      : 'inline-block',
		height       : '25%',
		width        : '20%',
		position     : 'relative',
		margin       : '0 auto',
		marginBottom : '-4px'
	}
};

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
