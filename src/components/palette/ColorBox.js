import clsx from 'clsx';
import React, { memo } from 'react';
import useToggleState from 'hooks/useToggleState';
import Link from 'react-router-dom/Link';
import { CopyToClipboard } from 'react-copy-to-clipboard/';
import { COPY_PHRASES } from 'helpers/constants';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/ColorBox';

function ColorBox(props) {
	const { classes } = props;
	const [ copying, toggleCopying, setCopying ] = useToggleState();
	const handleCopy = () => {
		toggleCopying();
		setTimeout(() => setCopying(false), 1500);
	};
	const color = props[props.format];
	const copyPhrase = COPY_PHRASES[Math.floor(Math.random() * COPY_PHRASES.length)];

	return (
		<div className={classes.colorBox}>
			<div
				className={clsx(classes.copyOverlay, {
					[classes.showOverlay]: copying
				})}
			/>
			<div
				className={clsx(classes.copyMessage, {
					[classes.showMessage]: copying
				})}
			>
				<h1 className={classes.copyText}>{`${copyPhrase.toUpperCase()}!`}</h1>
				<p className={classes.copyText}>{color}</p>
			</div>
			<span className={classes.colorName}>{props.name}</span>
			<CopyToClipboard text={color} onCopy={handleCopy}>
				<button className={`${classes.button} copyButton`}>copy</button>
			</CopyToClipboard>
			{!props.singleColorPalette && (
				<Link to={`${props.paletteId}/${props.id}`}>
					<span className={classes.seeMore}>more</span>
				</Link>
			)}
		</div>
	);
}

export default memo(withStyles(styles)(ColorBox));
