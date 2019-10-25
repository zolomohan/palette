import React, { useState, useEffect, Fragment, useContext } from 'react';
import { PaletteContext } from 'contexts/palette.context';
import useInputState from 'hooks/useInputState';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

export default function SavePaletteDialog(props) {
  const palettes = useContext(PaletteContext);
  const paletteName = () =>
		props.renameMode
			? palettes.filter((palette) => palette.id === props.paletteId)[0].paletteName
      : '';
      
	const [ stage, setStage ] = useState('form');
	const [ newPaletteName, setNewPaletteName, resetNewPaletteName ] = useInputState(paletteName());
	
	const selectEmoji = (emoji) => {
		setStage('');
		props.savePalette(newPaletteName, emoji.native);
	};

	const hideDialog = () => {
		setStage('form');
		resetNewPaletteName();
		props.toggleDialog();
	};

	const onNameSubmit = () => setStage('emoji');

	useEffect(() => {
		ValidatorForm.addValidationRule('uniquePaletteName', (value) =>
			palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			)
		);
	}, []);

	return (
		<Fragment>
			<Dialog open={props.open && stage === 'emoji'} onClose={hideDialog}>
				<Picker onSelect={selectEmoji} title='Pick an Emoji' />
			</Dialog>
			<Dialog open={props.open && stage === 'form'} onClose={props.toggleDialog}>
				<ValidatorForm onSubmit={onNameSubmit}>
					<DialogTitle>Palette Name</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please enter a name for your amazing palette and make sure
							it's unique from the rest.
						</DialogContentText>
						<TextValidator
							fullWidth
							autoFocus
							value={newPaletteName}
							name='newPaletteName'
							placeholder='Enter a Palette Name'
							onChange={setNewPaletteName}
							validators={[ 'required', 'uniquePaletteName' ]}
							errorMessages={[
								'Palette Name is Required',
								'Palette Name Already Taken'
							]}
						/>
						<DialogActions>
							<Button onClick={props.toggleDialog} color='secondary'>
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
