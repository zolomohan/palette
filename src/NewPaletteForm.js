import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChromePicker from 'react-color';
import Button from '@material-ui/core/Button';
import styles from './styles/NewPaletteFormStyles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import randomHex from './helpers/randomColor';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';

export default withStyles(styles, { withTheme: true })(
	class NewPaletteForm extends Component {
		state = {
			open           : true,
			newColor       : randomHex(),
			newColorName   : '',
			newPaletteName : '',
			colors         : []
		};

		handleDrawerOpen = () => {
			this.setState({ open: true });
		};

		handleDrawerClose = () => {
			this.setState({ open: false });
		};

		handleColorChange = (newColor) => {
			this.setState({ newColor: newColor.hex });
		};

		handleTextFieldChange = (evt) => {
			this.setState({ [evt.target.name]: evt.target.value });
		};

		handleSavePalette = () => {
			const newPalette = {
				paletteName : this.state.newPaletteName,
				id          : this.state.newPaletteName.toLowerCase().replace(/ /g, '-'),
				emoji       : 'EN',
				colors      : this.state.colors
			};
			this.props.savePalette(newPalette);
			this.props.history.push('/');
		};

		addColor = () => {
			this.setState({
				colors       : [
					...this.state.colors,
					{
						color : this.state.newColor,
						name  : this.state.newColorName
					}
				],
				newColorName : ''
			});
		};

		deleteColor = (deleteColor) => {
			this.setState({ colors: this.state.colors.filter((color) => color.color !== deleteColor.color) });
		};

		randomColor = () => {
			const randomColor = randomHex();
			this.setState({ newColor: randomColor, newColorName: randomColor }, this.addColor);
		};

		clearPalette = () => {
			this.setState({ colors: [] });
		};

		onSortEnd = ({ oldIndex, newIndex }) => {
			this.setState({ colors: arrayMove(this.state.colors, oldIndex, newIndex) });
		};

		componentDidMount() {
			ValidatorForm.addValidationRule('uniqueColor', () =>
				this.state.colors.every(({ color }) => color !== this.state.newColor)
			);
			ValidatorForm.addValidationRule('uniqueColorName', (value) =>
				this.state.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
			);
			ValidatorForm.addValidationRule('uniquePaletteName', (value) =>
				this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
			);
		}

		render() {
			const { classes } = this.props;
			const { open, newColor, newColorName, newPaletteName } = this.state;

			return (
				<div className={classes.root}>
					<CssBaseline />
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
								onClick={this.handleDrawerOpen}
								className={clsx(classes.menuButton, open && classes.hide)}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant='h6' color='inherit' noWrap>
								New Palette
							</Typography>
							<ValidatorForm onSubmit={this.handleSavePalette}>
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
							<Button color='secondary'>Discard</Button>
						</Toolbar>
					</AppBar>
					<Drawer
						className={classes.drawer}
						variant='persistent'
						anchor='left'
						open={open}
						classes={{
							paper : classes.drawerPaper
						}}
					>
						<div className={classes.drawerHeader}>
							<Typography variant='h5'>Pick a Color</Typography>
							<IconButton onClick={this.handleDrawerClose}>
								<ChevronLeftIcon />
							</IconButton>
						</div>
						<Divider />
						<div>
							<Button color='secondary' onClick={this.clearPalette}>
								Clear Palette
							</Button>
							<Button color='primary' onClick={this.randomColor}>
								Random Color
							</Button>
						</div>
						<ChromePicker color={newColor} onChange={this.handleColorChange} />
						<ValidatorForm onSubmit={this.addColor}>
							<TextValidator
								value={newColorName}
								name='newColorName'
								onChange={this.handleTextFieldChange}
								validators={[ 'required', 'uniqueColor', 'uniqueColorName' ]}
								errorMessages={[ 'Color Name is Required', 'Color Already Used', 'Color Name Already Taken' ]}
							/>
							<Button type='submit' variant='contained' style={{ backgroundColor: newColor, transition: 'none' }}>
								Add Color
							</Button>
						</ValidatorForm>
					</Drawer>
					<main
						className={clsx(classes.content, {
							[classes.contentShift]: open
						})}
					>
						<div className={classes.drawerHeader} />
						<DraggableColorList
							colors={this.state.colors}
							deleteColor={this.deleteColor}
							axis='xy'
							onSortEnd={this.onSortEnd}
							lockToContainerEdges
							distance={2}
						/>
					</main>
				</div>
			);
		}
	}
);
