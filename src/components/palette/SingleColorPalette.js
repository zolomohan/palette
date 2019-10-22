import React, { useState } from 'react';
import Navbar from 'components/palette/Navbar';
import Footer from 'components/palette/Footer';
import withStyles from '@material-ui/core/styles/withStyles';
import stylesPalette from 'styles/Palette';
import stylesColorBox from 'styles/ColorBox';
import ColorList from 'components/palette/ColorList';

function SingleColorPalette(props) {
	const { classes } = props;
	let shades = [];
	for (let shade in props.colors)
		shades.push(props.colors[shade].filter((color) => color.id === props.colorId)[0]);
	shades = shades.slice(1);
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

export default withStyles({
	...stylesColorBox,
	...stylesPalette
})(SingleColorPalette);
