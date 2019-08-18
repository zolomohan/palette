import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {

	const { open, deletePalette, id } = props;
	
	function closeDialog() {
		props.toggle(false);
	}
	
	function handleDelete() {
		props.toggle(false);
		deletePalette(id);
	}

	return (
		<Dialog
			open={open}
			onClose={closeDialog}
			aria-labelledby='alert-dialog-title'
			aria-describedby='Delete Palette Confirmation'
		>
			<DialogTitle>Are You Sure?</DialogTitle>
			<DialogContent>
				<DialogContentText>
					This action is irreversible. All Your Colors will be lost. Are you sure you want to Delete your palette?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={closeDialog} color='primary'>
					Cancel
				</Button>
				<Button color='secondary' onClick={handleDelete}>
					Yes, I'm Sure
				</Button>
			</DialogActions>
		</Dialog>
	);
}
