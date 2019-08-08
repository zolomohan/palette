import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
	render() {
		return (
			<footer className="Footer">
				<span className="Footer-paletteName">{this.props.paletteName}</span>
				<span className="Footer-emoji">{this.props.emoji}</span>
			</footer>
		);
	}
}
