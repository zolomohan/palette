import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/FooterStyles';

function Footer(props) {
	const { classes, paletteName, emoji } = props;
	const { Footer, FooterPaletteName, FooterEmoji } = classes;
	return (
		<footer className={Footer}>
			<span className={FooterPaletteName}>{paletteName}</span>
			<span className={FooterEmoji}>{emoji}</span>
		</footer>
	);
}

export default withStyles(styles)(Footer);
