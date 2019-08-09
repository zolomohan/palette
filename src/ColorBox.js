import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import chroma from 'chroma-js';
import './ColorBox.css';

const styles = {
	ColorBox   : {
		width                 : '20%',
		height                : (props) => (props.singleColorPalette ? '50%' : '25%'),
		position              : 'relative',
		margin                : '0 auto',
		display               : 'inline-block',
		marginBottom          : '-4px',
		transition            : 'all 0.1s linear',
		backgroundColor       : (props) => props[props.format],
		'&:hover $copyButton' : {
			opacity : '1'
		}
	},

	copyButton : {
		cursor          : 'pointer',
		width           : '100px',
		height          : '30px',
		top             : '50%',
		left            : '50%',
		display         : 'inline-block',
		position        : 'absolute',
		marginLeft      : '-50px',
		marginTop       : '-15px',
		textAlign       : 'center',
		textTransform   : 'uppercase',
		background      : 'none',
		border          : 'none',
		backgroundColor : 'rgba(255, 255, 255, 0.3)',
		outline         : 'none',
		fontSize        : '1rem',
		lineHeight      : '30px',
		opacity         : 0,
		transition      : '0.1s opacity linear',
		color           : (props) => (chroma(props[props.format]).luminance() <= 0.1 ? '#fff' : '#000')
	},

	colorName  : {
		position      : 'absolute',
		left          : '0px',
		bottom        : '0px',
		letterSpacing : '1px',
		textTransform : 'uppercase',
		fontSize      : '12px',
		padding       : '10px',
		color         : (props) => (chroma(props[props.format]).luminance() <= 0.1 ? '#fff' : '#000')
	},

	seeMore    : {
		position        : 'absolute',
		bottom          : '0px',
		right           : '0px',
		backgroundColor : 'rgba(255, 255, 255, 0.2)',
		textTransform   : 'uppercase',
		textAlign       : 'center',
		lineHeight      : '30px',
		padding         : '0 8px',
		height          : '30px',
		border          : 'none',
		color           : (props) => (chroma(props[props.format]).luminance() <= 0.5 ? '#fff' : '#000')
	},

	copyText   : {
		color : (props) => (chroma(props[props.format]).luminance() <= 0.5 ? '#fff' : '#000')
	}
};

export default withStyles(styles)(
	class ColorBox extends Component {
		constructor(props) {
			super(props);

			this.state = {
				copied : false
			};
		}

		handleCopy = () => {
			this.setState({ copied: true }, () => {
				setTimeout(() => this.setState({ copied: false }), 1500);
			});
		};

		render() {
			const { classes, singleColorPalette, paletteId, id } = this.props;
			const color = this.props[this.props.format];
			return (
				<div className={classes.ColorBox}>
					<div className={`copy-overlay ${this.state.copied && 'show'}`} style={{ backgroundColor: color }} />
					<div className={`copy-message ${this.state.copied && 'show'}`}>
						<h1 className={classes.copyText}>copied!</h1>
						<p className={classes.copyText}>{color}</p>
					</div>
					<span className={classes.colorName}>{this.props.name}</span>
					<CopyToClipboard text={color} onCopy={this.handleCopy}>
						<button className={classes.copyButton}>copy</button>
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
