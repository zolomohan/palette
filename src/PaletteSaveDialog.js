import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class FormDialog extends Component {
	state = {
		newPaletteName : ''
	};

	handleTextFieldChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	componentDidMount() {
		ValidatorForm.addValidationRule('uniquePaletteName', (value) =>
			this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
		);
	}

	render() {
		const { open, toggle, savePalette } = this.props;
		const { newPaletteName } = this.state;
		return (
			<div>
				<Dialog open={open} onClose={toggle} aria-labelledby='form-dialog-title'>
					<ValidatorForm onSubmit={() => savePalette(newPaletteName)}>
						<DialogTitle id='form-dialog-title'>Palette Name</DialogTitle>
						<DialogContent>
							<DialogContentText>
								Please enter a name for your amazing palette and make sure it's unique from the rest.
							</DialogContentText>
							<TextValidator
								fullWidth
								value={newPaletteName}
								placeholder='Enter a Palette Name'
								name='newPaletteName'
								onChange={this.handleTextFieldChange}
								validators={[ 'required', 'uniquePaletteName' ]}
								errorMessages={[ 'Palette Name is Required', 'Palette Name Already Taken' ]}
							/>
							<DialogActions>
								<Button onClick={toggle} color='secondary'>
									Cancel
								</Button>
								<Button type='submit' color='primary'>
									Save
								</Button>
							</DialogActions>
						</DialogContent>
					</ValidatorForm>
				</Dialog>
			</div>
		);
	}
}
