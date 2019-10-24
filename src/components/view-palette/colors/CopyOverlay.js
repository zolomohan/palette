import clsx from 'clsx';
import React from 'react';
import { COPY_PHRASES } from 'helpers/constants';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/CopyOverlay';

function CopyOverlay(props) {
  const { classes } = props;
  const copyPhrase = COPY_PHRASES[Math.floor(Math.random() * COPY_PHRASES.length)];
	return (
    <>
			<div
				className={clsx(classes.copyOverlay, {
					[classes.showOverlay]: props.open
				})}
			/>
			<div
				className={clsx(classes.copyMessage, {
					[classes.showMessage]: props.open
				})}
			>
				<h1 className={classes.copyText}>{`${copyPhrase.toUpperCase()}!`}</h1>
				<p className={classes.copyText}>{props.color}</p>
			</div>
		</>
	);
}

export default withStyles(styles)(CopyOverlay);
