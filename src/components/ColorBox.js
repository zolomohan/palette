import React, { memo } from 'react';
import useToggleState from '../hooks/useToggleState';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from '../styles/ColorBoxStyles';

export default memo(
	withStyles(styles)(function ColorBox(props) {
		const [ copying, toggleCopying, setCopying ] = useToggleState();
		const { classes, singleColorPalette, paletteId, id, name, format } = props;
		const {
			colorBox,
			copyOverlay,
			copyMessage,
			copyText,
			colorName,
			button,
			seeMore,
			showMessage,
			showOverlay
		} = classes;
		const color = props[format];
		return (
			<div className={colorBox}>
				<div className={`${copyOverlay} ${copying && showOverlay}`} />
				<div className={`${copyMessage} ${copying && showMessage}`}>
					<h1 className={copyText}>copied!</h1>
					<p className={copyText}>{color}</p>
				</div>
				<span className={colorName}>{name}</span>
				<CopyToClipboard
					text={color}
					onCopy={() => {
						toggleCopying();
						setTimeout(() => setCopying(false), 1500);
					}}
				>
					<button className={`${button} copyButton`}>copy</button>
				</CopyToClipboard>
				{!singleColorPalette && (
					<Link to={`${paletteId}/${id}`}>
						<span className={seeMore}>more</span>
					</Link>
				)}
			</div>
		);
	})
);
