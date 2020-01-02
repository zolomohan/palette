import React, { useState, useEffect, Fragment, useContext } from 'react';
import { PaletteContext } from 'contexts/palette.context';
import { ThemeContext } from 'contexts/theme.context';
import useInputState from 'hooks/useInputState';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import classes from 'styles/Dialog.module.css';
import 'emoji-mart/css/emoji-mart.css';

export default function SavePaletteDialog(props) {
	const palettes = useContext(PaletteContext);
	const theme = useContext(ThemeContext);

	const [ stage, setStage ] = useState('form');
	const [ newPaletteName, setNewPaletteName, resetNewPaletteName ] = useInputState();

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
			palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
		);
	}, []);

	return (
		<Fragment>
			<Dialog open={props.open && stage === 'emoji'} onClose={hideDialog}>
				<Picker onSelect={selectEmoji} title='Pick an Emoji' darkMode={theme.darkMode}/>
			</Dialog>
			<Dialog open={props.open && stage === 'form'} onClose={props.toggleDialog}>
				<ValidatorForm onSubmit={onNameSubmit}>
					<DialogTitle className={theme.darkMode && classes.darkBackground}>
						<span className={classes.title}>Palette Name</span>
					</DialogTitle>
					<DialogContent className={theme.darkMode && classes.darkBackground}>
						<DialogContentText>
							<span className={classes.content}>
								Please enter a name for your amazing palette and make sure it's unique from the rest.
							</span>
						</DialogContentText>
						<TextValidator
							fullWidth
							autoFocus
							value={newPaletteName}
							placeholder='Enter a Palette Name'
							onChange={setNewPaletteName}
							validators={[ 'required', 'uniquePaletteName' ]}
							errorMessages={[ 'Palette Name is Required', 'Palette Name Already Taken' ]}
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
