import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({ open, toggle }) {
	return (
		<Dialog
			open={open}
			onClose={toggle}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
			fontFamily='Blinker'
		>
			<DialogTitle>Are You Sure?</DialogTitle>
			<DialogContent>
				<DialogContentText>
					This action is irreversible. All Your Colors will be lost. Are you sure you want
					to Discard your palette?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={toggle} color='primary'>
					Cancel
				</Button>
				<Link
					to={`${process.env.PUBLIC_URL}/`}
					style={{ textDecoration: 'none' }}
					onClick={toggle}
				>
					<Button color='secondary' autoFocus>
						Yes, I'm Sure
					</Button>
				</Link>
			</DialogActions>
		</Dialog>
	);
}
