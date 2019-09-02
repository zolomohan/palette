import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import stylesPalette from '../styles/PaletteStyles';
import stylesColorBox from '../styles/ColorBoxStyles';

export default withStyles({ ...stylesColorBox, ...stylesPalette })(
	function SingleColorPalette({
		classes,
		paletteName,
		emoji,
		id,
		colors,
		colorId
	}) {
		let shades = [];
		for (let shade in colors) shades.push(colors[shade].filter((color) => color.id === colorId)[0]);
		shades = shades.slice(1);
		const [ format, setFormat ] = useState('hex');
		const { palette, paletteColors, button } = classes;
		return (
			<div className={palette}>
				<Navbar changeColorFormat={setFormat} format={format} singleColorPalette />
				<div className={paletteColors}>
					{shades.map((color) => <ColorBox {...color} format={format} key={color.name} singleColorPalette />)}
					<Link to={`${process.env.PUBLIC_URL}/palette/${id}`}>
						<div className={`${classes.ColorBox} goBack`}>
							<button className={button}>Go Back</button>
						</div>
					</Link>
				</div>
				<Footer paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
);
