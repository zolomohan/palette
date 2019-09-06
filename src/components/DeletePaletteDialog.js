import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DispatchContext } from '../contexts/palette.context';

export default function AlertDialog({ open, id, toggleDeleteModal }) {
	const paletteDispatch = useContext(DispatchContext);

	const handleDelete = () => {
		toggleDeleteModal();
		paletteDispatch({ type: 'DELETE', id: id });
	};

	return (
		<Dialog
			open={open}
			onClose={toggleDeleteModal}
			aria-labelledby='alert-dialog-title'
			aria-describedby='Delete Palette Confirmation'
		>
			<DialogTitle>Are You Sure?</DialogTitle>
			<DialogContent>
				<DialogContentText>
					This action is irreversible. All Your Colors will be lost. Are you sure you want to Delete
					your palette?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={toggleDeleteModal} color='primary'>
					Cancel
				</Button>
				<Button color='secondary' onClick={handleDelete}>
					Yes, I'm Sure
				</Button>
			</DialogActions>
		</Dialog>
	);
}
