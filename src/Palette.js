import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';
import Footer from './Footer';

export default class Palette extends Component {
	constructor(props) {
		super();
		this.state = { level: 400, format: 'hex' };
	}

	changeLevel = (level) => {
		this.setState({ level });
	};

	changeColorFormat = (format) => this.setState({ format });

	render() {
		return (
			<div className="Palette">
				<Navbar
					changeLevel={this.changeLevel}
					changeColorFormat={this.changeColorFormat}
					level={this.state.level}
					format={this.state.format}
				/>
				<div className="Palette-colors">
					{this.props.colors[this.state.level].map((color) => (
						<ColorBox {...color} format={this.state.format} key={color.id} paletteId={this.props.id}/>
					))}
				</div>
				<Footer paletteName={this.props.paletteName} emoji={this.props.emoji} />
			</div>
		);
	}
}
