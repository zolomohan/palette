import React from 'react';
import useToggleState from 'hooks/useToggleState';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styles from 'styles/Navbar';

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
			<Snackbar
				message={
					<span id='message-id'>Format Changed to {format.toUpperCase()}</span>
				}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}
				open={formatSnackbar}
				autoHideDuration={3000}
				ContentProps={{
					'aria-describedby': 'message-id'
				}}
				onClose={toggleFormatSnackbar}
				action={[
					<IconButton
						onClick={toggleFormatSnackbar}
						color='inherit'
						key='Close Snackbar'
					>
						<CloseIcon />
					</IconButton>
				]}
			/>
		</nav>
	);
});
