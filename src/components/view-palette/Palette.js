import React, { useState } from 'react';
import Navbar from 'components/view-palette/Navbar';
import Footer from 'components/view-palette/Footer';
import withStyles from '@material-ui/core/styles/withStyles';
import ColorList from 'components/view-palette/colors/ColorList';
import { singleColorShades } from 'helpers/generateShades';
import styles from 'styles/Palette';

function Palette(props) {
	const [ level, setLevel ] = useState(400);
	const [ format, setFormat ] = useState('hex');
  const { classes } = props;

	const colors = props.singleColorShades
    ? singleColorShades(props.palette.colors, props.colorId)
		: props.palette.colors[level];

	return (
		<div className={classes.palette}>
			<Navbar
				level={level}
				format={format}
				changeLevel={setLevel}
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

export default withStyles(styles)(Palette);
