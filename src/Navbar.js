import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './Navbar.css'

export default class Navbar extends Component {

	handleSliderChange = (event, level) => {
		this.props.changeLevel(level);
	}

	handleFormatChange = (event) => {
		this.props.changeColorFormat(event.target.value);
	}

	render() {
		return (
			<nav className='Navbar'>
				<div className='Navbar-brand'>palette</div>
				<div className='Navbar-slider'>
					<span className='Navbar-slider-text'>{this.props.level}</span>
					<Slider
						defaultValue = {this.props.level}
						step = {100}
						min = {100}
						max = {900}
						onChange = {this.handleSliderChange}
					/>
				</div>
				<div className='Navbar-select'>
					<Select value = {this.props.format}  onChange = { this.handleFormatChange } >
						<MenuItem value='hex'>Hex - #abcdef</MenuItem>
						<MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
						<MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
					</Select>
				</div>
			</nav>
		)
	}
}
