import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function SnackBar(props) {
	return (
		<Snackbar
			message={<span>{props.message}</span>}
			anchorOrigin={{
				vertical   : 'bottom',
				horizontal : props.horizontalOrigin
			}}
			open={props.open}
			autoHideDuration={3000}
			onClose={props.onClose}
			action={[
				<IconButton onClick={props.onClose} color='inherit' key='Close Snackbar'>
					<CloseIcon />
				</IconButton>
			]}
		/>
	);
}

SnackBar.defaultProps = {
	horizontalOrigin : 'left'
};
