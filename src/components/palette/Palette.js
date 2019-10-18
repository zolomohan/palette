import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';
import Navbar from 'components/palette/Navbar';
import Footer from 'components/palette/Footer';
import styles from 'styles/PaletteStyles';

export default withStyles(styles)(function Palette({
	id,
	emoji,
	colors,
	paletteName,
	classes: { palette, paletteColors }
}) {
	const [ level, setLevel ] = useState(400);
	const [ format, setFormat ] = useState('hex');

	const changeLevel = (level) => setLevel(level),
		changeColorFormat = (format) => setFormat(format);

	return (
		<div className={palette}>
			<Navbar
				changeLevel={changeLevel}
				changeColorFormat={changeColorFormat}
				level={level}
				format={format}
			/>
			<div className={paletteColors}>
				{colors[level].map((color) => (
					<ColorBox
						{...color}
						format={format}
						key={color.id}
						paletteId={id}
						singleColorPalette={false}
					/>
				))}
			</div>
			<Footer paletteName={paletteName} emoji={emoji} />
		</div>
	);
});
