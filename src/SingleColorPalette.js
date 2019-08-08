import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';

export default class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.getShades();
		this.state = {
			format : 'hex'
		};
	}

	getShades = () => {
		let shades = [];
		for (let shade in this.props.colors) {
			shades.push(this.props.colors[shade].filter((color) => color.id === this.props.colorId)[0]);
		}
		return shades.slice(1);
	};

	changeColorFormat = (format) => this.setState({ format });

	render() {
		return (
			<div className="Palette">
				<Navbar 
					changeColorFormat={this.changeColorFormat}
					format={this.state.format}
				/>
				<div className="Palette-colors">
					{this._shades.map((color) => (
						<ColorBox {...color} format={this.state.format} key={color.name} singleColorPalette />
					))}
				</div>
				<Footer paletteName={this.props.paletteName} emoji={this.props.emoji} />
			</div>
		);
	}
}
