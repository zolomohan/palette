import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider';
import './Navbar.css'

export default class Navbar extends Component {

	handleSliderChange = (event, level) => {
		this.props.changeLevel(level);
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
			</nav>
		)
	}
}
