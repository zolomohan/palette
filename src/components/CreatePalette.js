import clsx from 'clsx';
import React, { useContext } from 'react';
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
import styles from '../styles/CreatePaletteStyles';
import { PaletteContext, PaletteDispatchContext } from '../contexts/palette.context';
import { ColorContext, ColorDispatchContext } from '../contexts/color.context';

export default withStyles(styles, { withTheme: true })(function CreatePalette({
	history,
	paletteMaxColors = 20,
	classes          : {
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
	}
}) {
	const colors = useContext(ColorContext);
	const palettes = useContext(PaletteContext);
	const colorsDispatch = useContext(ColorDispatchContext);
	const paletteDispatch = useContext(PaletteDispatchContext);
	const [ drawerOpen, toggleOpen ] = useToggleState(true);
	
	const randomColor = () => {
		const allColors = palettes.map((palette) => palette.colors).flat();
		const random = allColors[Math.floor(Math.random() * allColors.length)];
		colors.some((color) => color.name === random.name)
			? randomColor()
			: colorsDispatch({ type: 'ADD', color: random });
	};

	const handleSortColors = ({ oldIndex, newIndex }) =>
		colorsDispatch({ type: 'SORT', oldIndex, newIndex });

	const handleSavePalette = (newPaletteName, emoji) => {
		paletteDispatch({
			type    : 'ADD',
			palette : {
				paletteName : newPaletteName,
				id          : newPaletteName.toLowerCase().replace(/ /g, '-'),
				emoji       : emoji,
				colors      : colors
			}
		});
		history.push(`${process.env.PUBLIC_URL}/`);
	};

	const paletteFull = colors.length >= paletteMaxColors;

	return (
		<div className={root}>
			<CssBaseline />
			<Navbar
				open={drawerOpen}
				savePalette={handleSavePalette}
				openDrawer={toggleOpen}
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
							onClick={() => colorsDispatch({ type: 'CLEAR' })}
							className={drawerButton}
						>
							Clear Palette
						</Button>
					</div>
					<ColorPickerForm
						paletteFull={paletteFull}
					/>
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
