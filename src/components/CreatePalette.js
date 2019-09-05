import clsx from 'clsx';
import React, { useReducer } from 'react';
import useToggleState from '../hooks/useToggleState';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar';
import ColorPickerForm from './ColorPickerForm';
import DraggableColorList from './DraggableColorList';
import seedColors from '../helpers/seedColors';
import colorReducer from '../reducers/colors.reducer';
import styles from '../styles/CreatePaletteStyles';

export default withStyles(styles, { withTheme: true })(function CreatePalette({
	classes,
	paletteMaxColors = 20,
	palettes,
	savePalette,
	history
}) {
	const [ colors, dispatch ] = useReducer(colorReducer, seedColors[0].colors);
	const [ drawerOpen, toggleOpen ] = useToggleState(true);

	const randomColor = () => {
		const allColors = palettes.map((palette) => palette.colors).flat();
		const random = allColors[Math.floor(Math.random() * allColors.length)];
		colors.some((color) => color.name === random.name)
			? randomColor()
			: dispatch({ type: 'ADD', color: random });
	};

	const handleSortColors = ({ oldIndex, newIndex }) =>
		dispatch({ type: 'SORT', oldIndex, newIndex });

	const handleSavePalette = (newPaletteName, emoji) => {
		savePalette({
			paletteName : newPaletteName,
			id          : newPaletteName.toLowerCase().replace(/ /g, '-'),
			emoji       : emoji,
			colors      : colors
		});
		history.push(`${process.env.PUBLIC_URL}/`);
	};

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
		chevronLeftIcon,
		emptyPalettePlaceholder,
		emptyPalettePlaceholderContainer
	} = classes;
	const paletteFull = colors.length >= paletteMaxColors;

	return (
		<div className={root}>
			<CssBaseline />
			<Navbar
				open={drawerOpen}
				savePalette={handleSavePalette}
				openDrawer={toggleOpen}
				palettes={palettes}
				variant='new'
				enableSave={colors.length > 0}
			/>
			<Drawer
				className={drawer}
				variant='persistent'
				anchor='left'
				open={drawerOpen}
				classes={{
					paper : drawerPaper
				}}
			>
				<div className={drawerHeader}>
					<Typography variant='h5'>Pick a Color</Typography>
					<IconButton onClick={toggleOpen} className={chevronLeftIcon}>
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
							onClick={() => dispatch({ type: 'CLEAR' })}
							className={drawerButton}
						>
							Clear Palette
						</Button>
					</div>
					<ColorPickerForm paletteFull={paletteFull} dispatch={dispatch} colors={colors} />
				</div>
			</Drawer>
			<main
				className={clsx(content, {
					[contentShift] : drawerOpen
				})}
			>
				<div className={drawerHeader} />
				{colors.length > 0 ? (
					<DraggableColorList
						colors={colors}
						dispatch={dispatch}
						axis='xy'
						onSortEnd={handleSortColors}
						lockToContainerEdges
						distance={2}
					/>
				) : (
					<div className={emptyPalettePlaceholderContainer}>
						<Typography className={emptyPalettePlaceholder}>Add Colors +</Typography>
					</div>
				)}
			</main>
		</div>
	);
});
