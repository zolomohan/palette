import React, { useState, useEffect, useContext } from 'react';
import useInputState from 'hooks/useInputState';
import { ColorContext, ColorDispatchContext } from 'contexts/color.context';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import ChromePicker from 'react-color';
import chromaContrast from 'helpers/chromaContrast';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/ColorPickerForm';
import { ThemeContext } from 'contexts/theme.context';
import clsx from 'clsx';

function ColorPickerForm(props) {
	const { classes } = props;
	const theme = useContext(ThemeContext);
	const colors = useContext(ColorContext);
	const colorsDispatch = useContext(ColorDispatchContext);
	const [ newColor, setNewColor ] = useState('#000');
	const [ newColorName, setNewColorName, resetNewColorName ] = useInputState();

	function handleColorChange(color) {
		setNewColor(color.hex);
	}

	function handleAddColor() {
		colorsDispatch({ type: 'ADD', color: { name: newColorName, color: newColor } });
		resetNewColorName();
	}

	useEffect(() => {
		ValidatorForm.addValidationRule('uniqueColor', () => colors.every(({ color }) => color !== newColor));
		ValidatorForm.addValidationRule('uniqueColorName', (value) =>
			colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
		);
	});

	return (
		<div>
			<ChromePicker
				color={newColor}
				onChange={handleColorChange}
				className={clsx(classes.picker, {
					[classes.pickerDark]: theme.darkMode
				})}
				disableAlpha
			/>
			<ValidatorForm onSubmit={handleAddColor} instantValidate={false}>
				<TextValidator
					value={newColorName}
					label='Color Name'
					variant='outlined'
					autoComplete={false}
					onChange={setNewColorName}
					validators={[ 'required', 'uniqueColor', 'uniqueColorName' ]}
					errorMessages={[ 'Color Name is Required', 'Color Already Used', 'Color Name Already Taken' ]}
					className={classes.colorNameInput}
					disabled={props.paletteFull}
				/>
				<Button
					type='submit'
					variant='contained'
					disabled={props.paletteFull}
					style={{
						backgroundColor : !props.paletteFull ? newColor : 'grey',
						color           : chromaContrast(newColor) ? '#000' : '#fff'
					}}
					className={classes.addColorBtn}
				>
					{!props.paletteFull ? 'Add Color' : 'Palette Full'}
				</Button>
			</ValidatorForm>
		</div>
	);
}

export default withStyles(styles)(ColorPickerForm);
