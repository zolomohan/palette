import React from 'react';
import useToggleState from 'hooks/useToggleState';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SnackBar from 'components/ui/Snackbar';
import styles from 'styles/navbar/Palette';

export default withStyles(styles)(function Navbar({
	level,
	format,
	changeLevel,
	changeColorFormat,
	classes: { Navbar, NavbarBrand, NavbarSlider, NavbarSliderText, NavbarSelect }
}) {
	const [ formatSnackbar, toggleFormatSnackbar ] = useToggleState();

	return (
		<nav className={Navbar}>
			<Link to={`${process.env.PUBLIC_URL}/`} style={{ textDecoration: 'none' }}>
				<span className={NavbarBrand}>palette</span>
			</Link>
			{level && (
				<div className={NavbarSlider}>
					<span className={NavbarSliderText}>{level}</span>
					<Slider
						defaultValue={level}
						step={100}
						min={100}
						max={900}
						onChange={(event, level) => changeLevel(level)}
					/>
				</div>
			)}

			<div className={NavbarSelect}>
				<Select
					value={format}
					onChange={(event) => {
						changeColorFormat(event.target.value);
						toggleFormatSnackbar();
					}}
				>
					<MenuItem value='hex'>HEX</MenuItem>
					<MenuItem value='rgb'>RGB</MenuItem>
					<MenuItem value='rgba'>RGBA</MenuItem>
				</Select>
			</div>
			<SnackBar
				message={`Format Changed to ${format.toUpperCase()}`}
				open={formatSnackbar}
				onClose={toggleFormatSnackbar}
			/>
		</nav>
	);
});
