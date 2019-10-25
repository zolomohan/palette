import React, { useContext } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/Footer';
import { ThemeContext } from 'contexts/theme.context';

function Footer(props) {
	const { classes } = props;
	const theme = useContext(ThemeContext);
	return (
		<footer
			className={classes.Footer}
			style={{ backgroundColor: theme.darkMode ? '#222' : '#f6f7fb' }}
		>
			<span
				className={classes.FooterPaletteName}
				style={{ color: theme.darkMode ? '#f6f7fb' : '#525252' }}
			>
				{props.paletteName}
			</span>
			<span className={classes.FooterEmoji}>{props.emoji}</span>
		</footer>
	);
}

export default withStyles(styles)(Footer);
