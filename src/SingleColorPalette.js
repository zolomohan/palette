import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import stylesPalette from './styles/PaletteStyles';
import stylesColorBox from './styles/ColorBoxStyles';

export default withStyles({...stylesColorBox, ...stylesPalette})(
	class SingleColorPalette extends Component {
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
			const { classes, paletteName, emoji, id } = this.props;
			const { palette, paletteColors, button } = classes;
			const { format } = this.state;
			
			return (
				<div className={palette}>
					<Navbar changeColorFormat={this.changeColorFormat} format={format} singleColorPalette />
					<div className={paletteColors}>
						{this._shades.map((color) => (
							<ColorBox {...color} format={format} key={color.name} singleColorPalette />
						))}
						<Link to={`${process.env.PUBLIC_URL}/palette/${id}`}>
							<div className={`${classes.ColorBox} goBack`}>
								<button className={button}>Go Back</button>
							</div>
						</Link>
					</div>
					<Footer paletteName={paletteName} emoji={emoji} />
				</div>
			);
		}
	}
);
