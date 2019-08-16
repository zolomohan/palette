import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import styles from './styles/NewPaletteFormStyles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default withStyles(styles)(
	class NewPaletteNav extends Component {
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
			const { classes, open, savePalette, openDrawer } = this.props;
			const { newPaletteName } = this.state;

			return (
				<AppBar
					position='fixed'
					color='default'
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar disableGutters={!open}>
						<IconButton
							color='inherit'
							aria-label='Open drawer'
							onClick={openDrawer}
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' color='inherit' noWrap>
							New Palette
						</Typography>
						<ValidatorForm onSubmit={() => savePalette(newPaletteName)}>
							<TextValidator
								value={newPaletteName}
								label='Palette Name'
								name='newPaletteName'
								onChange={this.handleTextFieldChange}
								validators={[ 'required', 'uniquePaletteName' ]}
								errorMessages={[ 'Palette Name is Required', 'Palette Name Already Taken' ]}
							/>
							<Button type='submit' color='primary'>
								Save
							</Button>
						</ValidatorForm>
						<Link to='/' style={{ textDecoration: 'none' }}>
							<Button color='secondary'>Discard</Button>
						</Link>
					</Toolbar>
				</AppBar>
			);
		}
	}
);
