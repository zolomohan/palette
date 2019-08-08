import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './Navbar.css';

export default class Navbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			snackbarOpen : false
		};
	}

	handleSliderChange = (event, level) => {
		this.props.changeLevel(level);
	};

	handleFormatChange = (event) => {
		this.props.changeColorFormat(event.target.value);
		this.setState({ snackbarOpen: true });
	};

	closeSnackbar = () => {
		this.setState({ snackbarOpen: false });
	};

	render() {
		return (
			<nav className="Navbar">
				<Link to="/" style={{ textDecoration: 'none' }}>
					<span className="Navbar-brand">palette</span>
				</Link>
				{this.props.level && (
					<div className="Navbar-slider">
						<span className="Navbar-slider-text">{this.props.level}</span>
						<Slider
							defaultValue={this.props.level}
							step={100}
							min={100}
							max={900}
							onChange={this.handleSliderChange}
						/>
					</div>
				)}

				<div className="Navbar-select">
					<Select value={this.props.format} onChange={this.handleFormatChange}>
						<MenuItem value="hex">HEX - #abcdef</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					message={<span id="message-id">Format Changed to {this.props.format.toUpperCase()}</span>}
					anchorOrigin={{
						vertical   : 'bottom',
						horizontal : 'left'
					}}
					open={this.state.snackbarOpen}
					autoHideDuration={3000}
					ContentProps={{
						'aria-describedby' : 'message-id'
					}}
					onClose={this.closeSnackbar}
					action={[
						<IconButton onClick={this.closeSnackbar} color="inherit" key="Close Snackbar">
							<CloseIcon />
						</IconButton>
					]}
				/>
			</nav>
		);
	}
}
