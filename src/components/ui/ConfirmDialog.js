import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfirmDialog({ open,content, onCancel, onSure }) {
	return (
		<Dialog
			open={open}
			onClose={onCancel}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
			fontFamily='Blinker'
		>
			<DialogTitle>Are You Sure?</DialogTitle>
			<DialogContent>
				<DialogContentText>
          {content}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onCancel} color='primary'>
					Cancel
				</Button>
				<Button color='secondary' autoFocus onClick={onSure}>
					Yes, I'm Sure
				</Button>
			</DialogActions>
		</Dialog>
	);
}
