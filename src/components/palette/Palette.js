import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';
import Navbar from 'components/palette/Navbar';
import Footer from 'components/palette/Footer';
import styles from 'styles/Palette';

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
			<div className={classes.paletteColors}>
				{props.colors[level].map((color) => (
					<ColorBox
						{...color}
						format={format}
						key={color.id}
						paletteId={props.id}
						singleColorPalette={false}
					/>
				))}
			</div>
			<Footer paletteName={props.paletteName} emoji={props.emoji} />
		</div>
	);
};

export default withStyles(styles)(Palette);
