import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './styles/ColorBoxStyles';

export default withStyles(styles)(
	class ColorBox extends Component {
		state = {
			copying : false
		};

		handleCopy = () =>
			this.setState({ copying: true }, () => {
				setTimeout(() => this.setState({ copying: false }), 1500);
			});

		render() {
			const { singleColorPalette, paletteId, id, name } = this.props;
			const { copying } = this.state;
			const { ColorBox, copyOverlay, copyMessage, copyText, colorName, button, seeMore, showMessage, showOverlay } = this.props.classes;
			const color = this.props[this.props.format];

			return (
				<div className={ColorBox}>
					<div className={`${copyOverlay} ${copying && showOverlay}`} />
					<div className={`${copyMessage} ${copying && showMessage}`}>
						<h1 className={copyText}>copied!</h1>
						<p className={copyText}>{color}</p>
					</div>
					<span className={colorName}>{name}</span>
					<CopyToClipboard text={color} onCopy={this.handleCopy}>
						<button className={`${button} copyButton`}>copy</button>
					</CopyToClipboard>
					{!singleColorPalette && (
						<Link to={`${paletteId}/${id}`}>
							<span className={seeMore}>more</span>
						</Link>
					)}
				</div>
			);
		}
	}
);
