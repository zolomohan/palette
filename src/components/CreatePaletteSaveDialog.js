import React, { useState, useEffect, Fragment } from 'react';
import useInputState from '../hooks/useInputState';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

export default function FormDialog({ open, toggleDialog, savePalette, palettes }) {
	const [ stage, setStage ] = useState('form');
	const [ newPaletteName, setNewPaletteName, resetNewPaletteName ] = useInputState();

	function selectEmoji(emoji) {
		setStage('');
		savePalette(newPaletteName, emoji.native);
	}

	function hideDialog() {
		setStage('form');
		resetNewPaletteName();
		toggleDialog();
	}

	useEffect(() => {
		ValidatorForm.addValidationRule('uniquePaletteName', (value) =>
			palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			)
		);
	}, []);

	return (
		<Fragment>
			<Dialog open={open && stage === 'emoji'} onClose={hideDialog}>
				<Picker onSelect={selectEmoji} title='Pick an Emoji' />
			</Dialog>
			<Dialog
				open={open && stage === 'form'}
				onClose={toggleDialog}
				aria-labelledby='form-dialog-title'
			>
				<ValidatorForm onSubmit={() => setStage('emoji')}>
					<DialogTitle id='form-dialog-title'>Palette Name</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please enter a name for your amazing palette and make sure it's unique from
							the rest.
						</DialogContentText>
						<TextValidator
							fullWidth
							autoFocus
							value={newPaletteName}
							placeholder='Enter a Palette Name'
							name='newPaletteName'
							onChange={setNewPaletteName}
							validators={[ 'required', 'uniquePaletteName' ]}
							errorMessages={[ 'Palette Name is Required', 'Palette Name Already Taken' ]}
						/>
						<DialogActions>
							<Button onClick={toggleDialog} color='secondary'>
								Cancel
							</Button>
							<Button type='submit' color='primary'>
								Pick Emoji
							</Button>
						</DialogActions>
					</DialogContent>
				</ValidatorForm>
			</Dialog>
		</Fragment>
	);
}
