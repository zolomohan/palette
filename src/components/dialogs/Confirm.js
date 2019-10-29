import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ThemeContext } from 'contexts/theme.context';

const darkBackground = { backgroundColor: '#333', color: '#fff' };

export default function ConfirmDialog(props) {
	const theme = useContext(ThemeContext);
	return (
		<Dialog
			open={props.open}
			onClose={props.onCancel}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
			fontFamily='Blinker'
		>
			<DialogTitle style={theme.darkMode ? darkBackground : {}}>
				Are You Sure?
			</DialogTitle>
			<DialogContent style={theme.darkMode ? darkBackground : {}}>
				<DialogContentText>{props.content}</DialogContentText>
			</DialogContent>
			<DialogActions style={theme.darkMode ? darkBackground : {}}>
				<Button onClick={props.onCancel} color='primary'>
					Cancel
				</Button>
				<Button color='secondary' autoFocus onClick={props.onSure}>
					Yes, I'm Sure
				</Button>
			</DialogActions>
		</Dialog>
	);
}
