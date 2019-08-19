import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import ChromePicker from 'react-color';
import Button from '@material-ui/core/Button';
import { isDarkColor } from './helpers/brightnessChecker';
import styles from './styles/ColorPickerFormStyles'

export default withStyles(styles)(
	class ColorPickerForm extends Component {
		
		state = {
			newColor     : '#000',
			newColorName : ''
		};

		handleColorChange = (newColor) => this.setState({ newColor: newColor.hex });

		handleTextFieldChange = (evt) => this.setState({ [evt.target.name]: evt.target.value });

		handleAddColor = () => {
			this.props.addColor({ name: this.state.newColorName, color: this.state.newColor });
			this.setState({ newColorName: '' });
		};

		componentDidMount() {
			ValidatorForm.addValidationRule('uniqueColor', () =>
				this.props.colors.every(({ color }) => color !== this.state.newColor)
			);
			ValidatorForm.addValidationRule('uniqueColorName', (value) =>
				this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
			);
		}

		render() {
			const { handleAddColor, handleColorChange, handleTextFieldChange, state, props } = this;
			const { newColor, newColorName } = state;
			const { paletteFull, classes } = props;
			const { picker, colorNameInput, addColorBtn } = classes;

			return (
				<div>
					<ChromePicker color={newColor} onChange={handleColorChange} className={picker} disabled={paletteFull} />
					<ValidatorForm onSubmit={handleAddColor} instantValidate={false}>
						<TextValidator
							value={newColorName}
							label='Color Name'
							variant='outlined'
							name='newColorName'
							onChange={handleTextFieldChange}
							validators={[ 'required', 'uniqueColor', 'uniqueColorName' ]}
							errorMessages={[ 'Color Name is Required', 'Color Already Used', 'Color Name Already Taken' ]}
							className={colorNameInput}
							disabled={paletteFull}
						/>
						<Button
							type='submit'
							variant='contained'
							disabled={paletteFull}
							style={{
								backgroundColor : !paletteFull ? newColor : 'grey',
								color           : isDarkColor(newColor),
							}}
							className={addColorBtn}
						>
							{!paletteFull ? 'Add Color' : 'Palette Full'}
						</Button>
					</ValidatorForm>
				</div>
			);
		}
	}
);
