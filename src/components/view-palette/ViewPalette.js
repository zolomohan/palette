import React, { useState, useContext } from 'react';
import { PaletteDispatchContext } from 'contexts/palette.context';
import Navbar from 'components/view-palette/Navbar';
import Footer from 'components/view-palette/Footer';
import withStyles from '@material-ui/core/styles/withStyles';
import ColorList from 'components/view-palette/colors/ColorList';
import { singleColorShades } from 'helpers/generateShades';
import styles from 'styles/Palette';

function ViewPalette(props) {
	const { classes } = props;
	const [ level, setLevel ] = useState(400);
	const [ format, setFormat ] = useState('hex');

	const paletteDispatch = useContext(PaletteDispatchContext);

	const renamePalette = (newPaletteName, emoji) => {
		const newId = newPaletteName.toLowerCase().replace(/ /g, '-');
		paletteDispatch({
			type    : 'RENAME',
			id      : props.palette.id,
			newName : newPaletteName,
			newId   : newId,
			emoji   : emoji
		});
		props.route.history.push(`${process.env.PUBLIC_URL}/palette/${newId}`);
	};

	const colors = props.singleColorShades
		? singleColorShades(props.palette.colors, props.colorId)
		: props.palette.colors[level];

	return (
		<div className={classes.palette}>
			<Navbar
				paletteId={props.palette.id}
				level={level}
				format={format}
				changeLevel={setLevel}
				renamePalette={renamePalette}
				changeColorFormat={setFormat}
				singleColorShades={props.singleColorShades}
			/>
			<ColorList
				format={format}
				colors={colors}
				paletteId={props.palette.id}
				singleColorShades={props.singleColorShades}
			/>
			<Footer paletteName={props.palette.paletteName} emoji={props.palette.emoji} />
		</div>
	);
}

export default withStyles(styles)(ViewPalette);
