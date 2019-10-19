import React, { useState } from 'react';
import Link from 'react-router-dom/Link';
import Navbar from 'components/palette/Navbar';
import Footer from 'components/palette/Footer';
import ColorBox from 'components/palette/ColorBox';
import withStyles from '@material-ui/core/styles/withStyles';
import stylesPalette from 'styles/Palette';
import stylesColorBox from 'styles/ColorBox';

function SingleColorPalette(props) {
	const { classes } = props;
	let shades = [];
	for (let shade in props.colors)
		shades.push(props.colors[shade].filter((color) => color.id === props.colorId)[0]);
	shades = shades.slice(1);
	const [ format, setFormat ] = useState('hex');
	return (
		<div className={classes.palette}>
			<Navbar changeColorFormat={setFormat} format={format} singleColorPalette />
			<div className={classes.paletteColors}>
				{shades.map((color) => (
					<ColorBox
						{...color}
						format={format}
						key={color.name}
						singleColorPalette
					/>
				))}
				<Link to={`${process.env.PUBLIC_URL}/palette/${props.id}`}>
					<div className={`${classes.colorBox} goBack`}>
						<button className={classes.button}>Go Back</button>
					</div>
				</Link>
			</div>
			<Footer paletteName={props.paletteName} emoji={props.emoji} />
		</div>
	);
}

export default withStyles({
	...stylesColorBox,
	...stylesPalette
})(SingleColorPalette);
