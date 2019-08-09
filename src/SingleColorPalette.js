import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import stylesPalette from './styles/PaletteStyles';
import stylesColorBox from './styles/ColorBoxStyles';

const styles = { ...stylesColorBox, ...stylesPalette };

export default withStyles(styles)(
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
			const { classes } = this.props;
			return (
				<div className={classes.palette}>
					<Navbar changeColorFormat={this.changeColorFormat} format={this.state.format} />
					<div className={classes.paletteColors}>
						{this._shades.map((color) => (
							<ColorBox {...color} format={this.state.format} key={color.name} singleColorPalette />
						))}
						<Link to={`/palette/${this.props.id}`}>
							<div className={`${classes.ColorBox} goBack`}>
								<button className={classes.button}>Go Back</button>
							</div>
						</Link>
					</div>
					<Footer paletteName={this.props.paletteName} emoji={this.props.emoji} />
				</div>
			);
		}
	}
);
