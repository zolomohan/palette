import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ThemeContext } from 'contexts/theme.context';
import classes from 'styles/Dialog.module.css';

export default function ConfirmDialog(props) {
	const theme = useContext(ThemeContext);
	return (
		<Dialog open={props.open} onClose={props.onCancel}>
			<DialogTitle className={theme.darkMode && classes.darkBackground}>
				<span className={classes.title}>Are You Sure?</span>
			</DialogTitle>
			<DialogContent className={theme.darkMode && classes.darkBackground}>
				<DialogContentText>
					<span className={classes.content}>{props.content}</span>
				</DialogContentText>
			</DialogContent>
			<DialogActions className={theme.darkMode && classes.darkBackground}>
				<Button onClick={props.onCancel} color='secondary'>
					Cancel
				</Button>
				<Button onClick={props.onSure} color='primary'>
					Yes, I'm Sure
				</Button>
			</DialogActions>
		</Dialog>
	);
}
