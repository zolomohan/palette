import React, { useState } from 'react';
import Navbar from 'components/palette/Navbar';
import Footer from 'components/palette/Footer';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/Palette';
import ColorList from 'components/palette/colors/ColorList';
import { singleColorShades } from 'helpers/generateShades';

function SingleColorPalette(props) {
	const { classes } = props;
	const shades = singleColorShades(props.colors, props.colorId);
	const [ format, setFormat ] = useState('hex');
	return (
		<div className={classes.palette}>
			<Navbar changeColorFormat={setFormat} format={format} />
			<ColorList 
        colors={shades}
        format={format}
        paletteId={props.id}
        singleColorPalette
      />
			<Footer paletteName={props.paletteName} emoji={props.emoji} />
		</div>
	);
}

export default withStyles(styles)(SingleColorPalette);
