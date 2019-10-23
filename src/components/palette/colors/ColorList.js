import React from 'react';
import ColorBox from 'components/palette/colors/ColorBox';
import GoBackButton from 'components/palette/colors/GoBackButton';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/Palette';

function Palette(props) {
	const { classes } = props;
	return (
		<main className={classes.paletteColors}>
			{props.colors.map((color) => (
				<ColorBox
					{...color}
					format={props.format}
					paletteId={props.paletteId}
					key={`${color.name}${color.id}`}
					singleColorPalette={props.singleColorPalette}
				/>
			))}
			{props.singleColorPalette && <GoBackButton paletteId={props.paletteId} />}
		</main>
	);
}

export default withStyles(styles)(Palette);
