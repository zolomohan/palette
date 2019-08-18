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
import seedColors from './helpers/seedColors';

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

		deleteColor = (deleteColor) =>
			this.setState({ colors: this.state.colors.filter((color) => color.color !== deleteColor.color) });

		randomColor = () => {
			const allColors = this.props.palettes.map((palette) => palette.colors).flat();
			const randomIndex = Math.floor(Math.random() * allColors.length);
			if (this.state.colors.some((color) => color.name === allColors[randomIndex].name)) this.randomColor();
			this.setState({ colors: [ ...this.state.colors, allColors[randomIndex] ] });
		};

		clearPalette = () => this.setState({ colors: [] });

		onSortEnd = ({ oldIndex, newIndex }) => this.setState({ colors: arrayMove(this.state.colors, oldIndex, newIndex) });

		render() {
			const {
				handleDrawerOpen,
				handleDrawerClose,
				handleSavePalette,
				addColor,
				deleteColor,
				randomColor,
				clearPalette,
				onSortEnd,
				props,
				state
			} = this;
			const { 
				classes, 
				paletteMaxColors, 
				palettes 
			} = props;
			const {
				open, 
				colors 
			} = state;
			const {
				root,
				drawer,
				drawerPaper,
				drawerHeader,
				drawerContainer,
				drawerButtons,
				drawerButton,
				content,
				contentShift,
				chevronLeftIcon
			} = classes;
			const paletteFull = colors.length >= paletteMaxColors;

			return (
				<div className={root}>
					<CssBaseline />
					<NewPaletteNavbar
						open={open}
						savePalette={handleSavePalette}
						openDrawer={handleDrawerOpen}
						palettes={palettes}
					/>
					<Drawer
						className={drawer}
						variant='persistent'
						anchor='left'
						open={open}
						classes={{
							paper : drawerPaper
						}}
					>
						<div className={drawerHeader}>
							<Typography variant='h5'>Pick a Color</Typography>
							<IconButton onClick={handleDrawerClose} className={chevronLeftIcon}>
								<ChevronLeftIcon />
							</IconButton>
						</div>
						<div className={drawerContainer}>
							<div className={drawerButtons}>
								<Button
									variant='outlined'
									color='primary'
									onClick={randomColor}
									disabled={colors.length >= paletteMaxColors}
									className={drawerButton}
								>
									Random Color
								</Button>
								<Button
									variant='outlined'
									color='secondary'
									onClick={clearPalette}
									className={drawerButton}
								>
									Clear Palette
								</Button>
							</div>
							<ColorPickerForm paletteFull={paletteFull} addColor={addColor} colors={colors} />
						</div>
					</Drawer>
					<main
						className={clsx(content, {
							[contentShift]: open
						})}
					>
						<div className={drawerHeader} />
						<DraggableColorList
							colors={colors}
							deleteColor={deleteColor}
							axis='xy'
							onSortEnd={onSortEnd}
							lockToContainerEdges
							distance={2}
						/>
					</main>
				</div>
			);
		}
	}
);
