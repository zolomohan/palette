import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import MiniPalette from './MiniPalette';
// import './PaletteList.css'

const styles = {
	root: {
		backgroundColor: 'blue',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		height: '100vh'
	},
	container: {
		width: '60%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap',
		color: 'white',
	},
	nav:{	
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between'
	},
	palettes:{
		display: 'grid',
		boxSizing: 'border-box',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '5%',
		width: '100%'
	}
}

class PaletteList extends Component {
	render() {

		const {classes , palettes} = this.props;

		return (
			<div className={classes.root}>
				<div className = {classes.container}>
					<nav>
						<h1>Palette</h1>
					</nav>
					<div className = {classes.palettes}>
						{palettes.map(palette => (<MiniPalette {...palette}/>))}
					</div>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(PaletteList);

// <Link to = {`palette/${palette.id}`}>{palette.paletteName}</Link>