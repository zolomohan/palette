import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/Footer';

function Footer(props) {
	const { classes } = props;
	return (
		<footer className={classes.Footer}>
			<span className={classes.FooterPaletteName}>{props.paletteName}</span>
			<span className={classes.FooterEmoji}>{props.emoji}</span>
		</footer>
	);
}

export default withStyles(styles)(Footer);
