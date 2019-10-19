import React, { useState } from 'react';
import Navbar from 'components/palette/Navbar';
import Footer from 'components/palette/Footer';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/Palette';
import ColorList from './ColorList';

function Palette(props) {
	const [ level, setLevel ] = useState(400);
	const [ format, setFormat ] = useState('hex');
	const { classes } = props;

	return (
		<div className={classes.palette}>
			<Navbar
				changeLevel={setLevel}
				changeColorFormat={setFormat}
				level={level}
				format={format}
			/>
			<ColorList
				colors={props.colors}
				level={level}
				format={format}
				paletteId={props.id}
			/>
			<Footer paletteName={props.paletteName} emoji={props.emoji} />
		</div>
	);
}

export default withStyles(styles)(Palette);
