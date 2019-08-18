import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './styles/ColorBoxStyles';

export default withStyles(styles)(
	class ColorBox extends Component {
		constructor(props) {
			super(props);
			this.state = {
				copying : false
			};
		}

		handleCopy = () => {
			this.setState({ copying: true }, () => {
				setTimeout(() => this.setState({ copying: false }), 1500);
			});
		};

		render() {
			const { classes, singleColorPalette, paletteId, id, name } = this.props;
			const color = this.props[this.props.format];
			return (
				<div className={classes.ColorBox}>
					<div className={`${classes.copyOverlay} ${this.state.copying && classes.showOverlay}`} />
					<div className={`${classes.copyMessage} ${this.state.copying && classes.showMessage}`}>
						<h1 className={classes.copyText}>copied!</h1>
						<p className={classes.copyText}>{color}</p>
					</div>
					<span className={classes.colorName}>{name}</span>
					<CopyToClipboard text={color} onCopy={this.handleCopy}>
						<button className={`${classes.button} copyButton`}>copy</button>
					</CopyToClipboard>
					{!singleColorPalette && (
						<Link to={`${paletteId}/${id}`}>
							<span className={classes.seeMore}>more</span>
						</Link>
					)}
				</div>
			);
		}
	}
);
