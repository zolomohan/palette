import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/ColorBox';

function GoBackButton(props) {
  const { classes } = props;
	return (
		<Link to={`${process.env.PUBLIC_URL}/palette/${props.paletteId}`}>
			<div className={classes.colorBox}>
				<button className={classes.button}>Go Back</button>
			</div>
		</Link>
	);
}

export default withStyles(styles)(GoBackButton);
