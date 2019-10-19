import React from 'react';
import ColorBox from 'components/palette/ColorBox';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/Palette';

function Palette(props) {
  const { classes } = props;
	return (
		<div className={classes.paletteColors}>
			{props.colors[props.level].map((color) => (
				<ColorBox
					{...color}
					format={props.format}
					key={color.id}
					paletteId={props.paletteId}
					singleColorPalette={false}
				/>
			))}
		</div>
	);
}

export default withStyles(styles)(Palette);
