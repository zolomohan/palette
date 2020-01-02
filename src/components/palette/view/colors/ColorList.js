import React, { useContext } from 'react';
import ColorBox from 'components/palette/view/colors/ColorBox';
import GoBackButton from 'components/palette/view/colors/GoBackButton';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/ViewPalette';
import { ThemeContext } from 'contexts/theme.context';

function ColorList(props) {
	const { classes } = props;
	const theme = useContext(ThemeContext);
	return (
		<main
			className={classes.colorList}
			style={{ backgroundColor: theme.darkMode ? '#555' : '#eee' }}
		>
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
