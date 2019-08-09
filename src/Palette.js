import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';

export default withStyles(styles)(
	class Palette extends Component {
		constructor(props) {
			super();
			this.state = { level: 400, format: 'hex' };
		}

		changeLevel = (level) => {
			this.setState({ level });
		};

		changeColorFormat = (format) => this.setState({ format });

		render() {
			const { classes } = this.props;
			return (
				<div className={classes.palette}>
					<Navbar
						changeLevel={this.changeLevel}
						changeColorFormat={this.changeColorFormat}
						level={this.state.level}
						format={this.state.format}
					/>
					<div className={classes.paletteColors}>
						{this.props.colors[this.state.level].map((color) => (
							<ColorBox
								{...color}
								format={this.state.format}
								key={color.id}
								paletteId={this.props.id}
								singleColorPalette={false}
							/>
						))}
					</div>
					<Footer paletteName={this.props.paletteName} emoji={this.props.emoji} />
				</div>
			);
		}
	}
);
