import React, { useContext } from 'react';
import { ThemeContext } from 'contexts/theme.context';
import Slider from '@material-ui/core/Slider';
import styles from 'styles/navbar/ViewPalette';
import withStyles from '@material-ui/core/styles/withStyles';

function LevelSlider(props) {
	const { classes } = props;
	const theme = useContext(ThemeContext);

	const changeColorLevel = (event, level) => props.onChange(level);

	return (
		<div className={classes.NavbarSlider}>
			<span className={classes.NavbarSliderText} style={{ color: theme.darkMode ? '#fff' : '#323232' }}>
				{props.level}
			</span>
      <Slider 
        defaultValue={props.level} 
        step={100} 
        min={100} 
        max={900} 
        onChange={changeColorLevel} 
      />
		</div>
	);
}

export default withStyles(styles)(LevelSlider);
