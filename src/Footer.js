import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/FooterStyles';

function Footer(props) {
	const { classes, paletteName, emoji } = props;
	return (
		<footer className={classes.Footer}>
			<span className={classes.FooterPaletteName}>{paletteName}</span>
			<span className={classes.FooterEmoji}>{emoji}</span>
		</footer>
	);
}

export default withStyles(styles)(Footer);
