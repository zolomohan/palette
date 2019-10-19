import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function SnackBar({ open, message, onClose, horizontalOrigin = 'left' }) {
	return (
		<Snackbar
			message={<span>{message}</span>}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: horizontalOrigin
			}}
			open={open}
			autoHideDuration={3000}
			onClose={onClose}
			action={[
				<IconButton onClick={onClose} color='inherit' key='Close Snackbar'>
					<CloseIcon />
				</IconButton>
			]}
		/>
	);
}
