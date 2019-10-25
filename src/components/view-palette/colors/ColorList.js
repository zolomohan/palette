import React from 'react';
import ColorBox from 'components/view-palette/colors/ColorBox';
import GoBackButton from 'components/view-palette/colors/GoBackButton';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/Palette';

function ColorList(props) {
  const { classes } = props;

	return (
		<main className={classes.paletteColors}>
			{props.colors.map((color) => (
				<ColorBox
          {...color}
          colorsLength={props.colors.length}
					format={props.format}
					paletteId={props.paletteId}
					key={`${color.name}${color.id}`}
					singleColorShades={props.singleColorShades}
				/>
			))}
			{props.singleColorShades && (
				<GoBackButton paletteId={props.paletteId} singleColorShades goBackBox />
			)}
		</main>
	);
}

export default withStyles(styles)(ColorList);
