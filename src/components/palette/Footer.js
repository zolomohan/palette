import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from 'styles/FooterStyles';

export default withStyles(styles)(function Footer({
	classes     : { Footer, FooterPaletteName, FooterEmoji },
	paletteName,
	emoji
}) {
	return (
		<footer className={Footer}>
			<span className={FooterPaletteName}>{paletteName}</span>
			<span className={FooterEmoji}>{emoji}</span>
		</footer>
	);
});
