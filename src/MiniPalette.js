import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles'

const styles = {
	root:{
		backgroundColor: 'white',
		borderRadius: '5px',
		padding: '0.5em',
		position: 'realtive',
		overflow: 'hidden',
		'&:hover':{
			cursor: 'pointer'
		},
		border: '1px solid black'
	},
	colors:{
		backgroundColor: 'grey'
	},
	title:{
		display: 'flex',
		justifyContent: 'space-between',
		margin: '0',
		color: 'black',
		fontSize: '1rem',
		paddingTop: '0.5rem',
		position: 'relative'
	},
	emoji: {
		marginLeft: '1.5rem',
		fontSize: '1.1rem'
	}
}

function MiniPalette(props) {

	const { classes, paletteName, emoji, id } = props;

	return (
		<div className = {classes.root}>
			<div className = { classes.colors } />
			<h5 className = { classes.title }>
				<Link to = {`palette/${id}`} style={{textDecoration: 'none', color: '#525252'}}>
				
				{paletteName} <span className = {classes.emoji}>{emoji}</span>
				</Link>
			</h5>
		</div>
	);
}

export default withStyles(styles)(MiniPalette)