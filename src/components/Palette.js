import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/PaletteStyles';

export default withStyles(styles)(
	class Palette extends Component {
		state = {
			level  : 400,
			format : 'hex'
		};

		changeLevel = (level) => this.setState({ level });

		changeColorFormat = (format) => this.setState({ format });

		render() {
			const { changeColorFormat, changeLevel, props, state } = this;
			const { classes, colors, id, emoji, paletteName } = props;
			const { level, format } = state;
			const { palette, paletteColors } = classes;
			return (
				<div className={palette}>
					<Navbar changeLevel={changeLevel} changeColorFormat={changeColorFormat} level={level} format={format} />
					<div className={paletteColors}>
						{colors[level].map((color) => (
							<ColorBox {...color} format={format} key={color.id} paletteId={id} singleColorPalette={false} />
						))}
					</div>
					<Footer paletteName={paletteName} emoji={emoji} />
				</div>
			);
		}
	}
);
