import React from 'react';
import ColorBox from 'components/palette/ColorBox';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import stylesPalette from 'styles/Palette';
import stylesColorBox from 'styles/ColorBox';

function Palette(props) {
	const { classes } = props;
	return (
		<div className={classes.paletteColors}>
			{props.colors.map((color) => (
				<ColorBox
					{...color}
					format={props.format}
					key={`${color.name}${color.id}`}
					paletteId={props.paletteId}
					singleColorPalette={props.singleColorPalette}
				/>
			))}
			{props.singleColorPalette && (
				<Link to={`${process.env.PUBLIC_URL}/palette/${props.paletteId}`}>
					<div className={`${classes.colorBox} goBack`}>
						<button className={classes.button}>Go Back</button>
					</div>
				</Link>
			)}
		</div>
	);
}

export default withStyles({
	...stylesColorBox,
	...stylesPalette
})(Palette);
