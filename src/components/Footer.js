import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/FooterStyles';

export default withStyles(styles)(function Footer({ classes, paletteName, emoji }) {
	const { Footer, FooterPaletteName, FooterEmoji } = classes;
	return (
		<footer className={Footer}>
			<span className={FooterPaletteName}>{paletteName}</span>
			<span className={FooterEmoji}>{emoji}</span>
		</footer>
	);
});
