import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

export default class FormDialog extends Component {
	state = {
		newPaletteName : '',
		stage          : 'form'
	};

	handleTextFieldChange = (evt) => this.setState({ [evt.target.name]: evt.target.value });

	openEmojiDialog = () => this.setState({ stage: 'emoji' });

	selectEmoji = (emoji) => {
		this.setState({ stage: '' });
		this.props.savePalette(this.state.newPaletteName, emoji.native);
	};

	hideDialog = () => this.setState({ stage: 'form', newPaletteName: '' }, this.props.toggle);

	componentDidMount() {
		ValidatorForm.addValidationRule('uniquePaletteName', (value) =>
			this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
		);
	}

	render() {
		const { handleTextFieldChange, openEmojiDialog, selectEmoji, hideDialog, props, state } = this;
		const { open, toggle } = props;
		const { newPaletteName, stage } = state;
		return (
			<div>
				<Dialog open={open && stage === 'emoji'} onClose={hideDialog}>
					<Picker onSelect={selectEmoji} title='Pick an Emoji' />
				</Dialog>
				<Dialog open={open && stage === 'form'} onClose={toggle} aria-labelledby='form-dialog-title'>
					<ValidatorForm onSubmit={openEmojiDialog}>
						<DialogTitle id='form-dialog-title'>Palette Name</DialogTitle>
						<DialogContent>
							<DialogContentText>
								Please enter a name for your amazing palette and make sure it's unique from the rest.
							</DialogContentText>
							<TextValidator
								fullWidth
								autoFocus
								value={newPaletteName}
								placeholder='Enter a Palette Name'
								name='newPaletteName'
								onChange={handleTextFieldChange}
								validators={[ 'required', 'uniquePaletteName' ]}
								errorMessages={[ 'Palette Name is Required', 'Palette Name Already Taken' ]}
							/>
							<DialogActions>
								<Button onClick={toggle} color='secondary'>
									Cancel
								</Button>
								<Button type='submit' color='primary'>
									Pick Emoji
								</Button>
							</DialogActions>
						</DialogContent>
					</ValidatorForm>
				</Dialog>
			</div>
		);
	}
}
