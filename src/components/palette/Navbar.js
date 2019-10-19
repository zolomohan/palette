import React from 'react';
import useToggleState from 'hooks/useToggleState';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SnackBar from 'components/ui/Snackbar';
import styles from 'styles/navbar/Palette';

function Navbar(props) {
	const [ formatSnackbar, toggleFormatSnackbar ] = useToggleState();
	const { classes } = props;

	const changeColorLevel = (event, level) => props.changeLevel(level);
	
	const changeColorFormat = (event) => {
		props.changeColorFormat(event.target.value);
		toggleFormatSnackbar();
	};

	return (
		<nav className={classes.Navbar}>
			<Link to={`${process.env.PUBLIC_URL}/`} style={{ textDecoration: 'none' }}>
				<span className={classes.NavbarBrand}>palette</span>
			</Link>
			{props.level && (
				<div className={classes.NavbarSlider}>
					<span className={classes.NavbarSliderText}>{props.level}</span>
					<Slider
						defaultValue={props.level}
						step={100}
						min={100}
						max={900}
						onChange={changeColorLevel}
					/>
				</div>
			)}
			<div className={classes.NavbarSelect}>
				<Select value={props.format} onChange={changeColorFormat}>
					<MenuItem value='hex'>HEX</MenuItem>
					<MenuItem value='rgb'>RGB</MenuItem>
					<MenuItem value='rgba'>RGBA</MenuItem>
				</Select>
			</div>
			<SnackBar
				message={`Format Changed to ${props.format.toUpperCase()}`}
				open={formatSnackbar}
				onClose={toggleFormatSnackbar}
			/>
		</nav>
	);
};

export default withStyles(styles)(Navbar);
