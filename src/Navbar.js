import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles/NavbarStyles';

export default withStyles(styles)(
	class Navbar extends Component {
		state = {
			snackbarOpen : false
		};

		handleSliderChange = (event, level) => this.props.changeLevel(level);

		handleFormatChange = (event) => {
			this.props.changeColorFormat(event.target.value);
			this.setState({ snackbarOpen: true });
		};

		closeSnackbar = () => this.setState({ snackbarOpen: false });

		render() {
			const { handleFormatChange, handleSliderChange, closeSnackbar, props, state } = this;
			const { classes, level, format } = props;
			const { Navbar, NavbarBrand, NavbarSlider, NavbarSliderText, NavbarSelect } = classes;
			return (
				<nav className={Navbar}>
					<Link to={`${process.env.PUBLIC_URL}/`} style={{ textDecoration: 'none' }}>
						<span className={NavbarBrand}>palette</span>
					</Link>
					{level && (
						<div className={NavbarSlider}>
							<span className={NavbarSliderText}>{level}</span>
							<Slider defaultValue={level} step={100} min={100} max={900} onChange={handleSliderChange} />
						</div>
					)}

					<div className={NavbarSelect}>
						<Select value={format} onChange={handleFormatChange}>
							<MenuItem value='hex'>HEX</MenuItem>
							<MenuItem value='rgb'>RGB</MenuItem>
							<MenuItem value='rgba'>RGBA</MenuItem>
						</Select>
					</div>
					<Snackbar
						message={<span id='message-id'>Format Changed to {format.toUpperCase()}</span>}
						anchorOrigin={{
							vertical   : 'bottom',
							horizontal : 'left'
						}}
						open={state.snackbarOpen}
						autoHideDuration={3000}
						ContentProps={{
							'aria-describedby' : 'message-id'
						}}
						onClose={closeSnackbar}
						action={[
							<IconButton onClick={closeSnackbar} color='inherit' key='Close Snackbar'>
								<CloseIcon />
							</IconButton>
						]}
					/>
				</nav>
			);
		}
	}
);
