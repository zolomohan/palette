import clsx from 'clsx';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import styles from './styles/NewPaletteFormStyles';
import DraggableColorList from './DraggableColorList';
import arrayMove from 'array-move';
import NewPaletteNavbar from './NewPaletteNavbar';
import ColorPickerForm from './ColorPickerForm';
import seedColors from './helpers/seedColors'

export default withStyles(styles, { withTheme: true })(
	class NewPaletteForm extends Component {
		static defaultProps = {
			paletteMaxColors : 20
		};

		state = {
			open   : true,
			colors : seedColors[0].colors
		};

		handleDrawerOpen = () => this.setState({ open: true });

		handleDrawerClose = () => this.setState({ open: false });

		handleSavePalette = (newPaletteName, emoji) => {
			const newPalette = {
				paletteName : newPaletteName,
				id          : newPaletteName.toLowerCase().replace(/ /g, '-'),
				emoji       : emoji,
				colors      : this.state.colors
			};
			this.props.savePalette(newPalette);
			this.props.history.push('/');
		};

		addColor = (newColor) =>
			this.setState({
				colors : [ ...this.state.colors, newColor ]
			});

		deleteColor = (deleteColor) => this.setState({ colors: this.state.colors.filter((color) => color.color !== deleteColor.color) });

		randomColor = () => {
			const allColors = this.props.palettes.map((palette) => palette.colors).flat();
			const randomIndex = Math.floor(Math.random() * allColors.length);
			this.setState({ colors: [ ...this.state.colors, allColors[randomIndex] ] });
		};

		clearPalette = () => this.setState({ colors: [] });

		onSortEnd = ({ oldIndex, newIndex }) => this.setState({ colors: arrayMove(this.state.colors, oldIndex, newIndex) });

		render() {
			const { classes, paletteMaxColors, palettes } = this.props;
			const { open, colors } = this.state;
			const paletteFull = colors.length >= paletteMaxColors;

			return (
				<div className={classes.root}>
					<CssBaseline />
					<NewPaletteNavbar
						open={open}
						savePalette={this.handleSavePalette}
						openDrawer={this.handleDrawerOpen}
						palettes={palettes}
					/>
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
							<IconButton onClick={this.handleDrawerClose} className={classes.chevronLeftIcon}>
								<ChevronLeftIcon />
							</IconButton>
						</div>
						<div className={classes.drawerContainer}>
							<div className={classes.drawerButtons}>
								<Button
									variant='outlined'
									color='primary'
									onClick={this.randomColor}
									disabled={colors.length >= paletteMaxColors}
									className={classes.drawerButton}
								>
									Random
								</Button>
								<Button
									variant='outlined'
									color='secondary'
									onClick={this.clearPalette}
									className={classes.drawerButton}
								>
									Clear Palette
								</Button>
							</div>
							<ColorPickerForm paletteFull={paletteFull} addColor={this.addColor} colors={colors} />
						</div>
					</Drawer>
					<main
						className={clsx(classes.content, {
							[classes.contentShift]: open
						})}
					>
						<div className={classes.drawerHeader} />
						<DraggableColorList
							colors={colors}
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
