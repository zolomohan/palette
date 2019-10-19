import clsx from 'clsx';
import React, { useContext } from 'react';
import useToggleState from 'hooks/useToggleState';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Navbar from 'components/create-palette/Navbar';
import DraggableColorList from 'components/create-palette/DraggableColorList';
import styles from 'styles/CreatePalette';
import { PaletteContext, PaletteDispatchContext } from 'contexts/palette.context';
import { ColorContext, ColorDispatchContext } from 'contexts/color.context';
import AddColorDrawer from './AddColorDrawer';

export default withStyles(styles, { withTheme: true })(function CreatePalette({
	history,
	paletteMaxColors = 20,
	classes: {
		root,
		contentHeader,
		content,
		contentShift,
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

	const clearColors = () => colorsDispatch({ type: 'CLEAR' });

	const sortColors = ({ oldIndex, newIndex }) =>
		colorsDispatch({ type: 'SORT', oldIndex, newIndex });

	const savePalette = (newPaletteName, emoji) => {
		paletteDispatch({
			type: 'ADD',
			palette: {
				paletteName: newPaletteName,
				id: newPaletteName.toLowerCase().replace(/ /g, '-'),
				emoji: emoji,
				colors: colors
			}
		});
		history.push(`${process.env.PUBLIC_URL}/`);
	};

	return (
		<div className={root}>
			<CssBaseline />
			<Navbar
				history={history}
				drawerOpen={drawerOpen}
				savePalette={savePalette}
				openDrawer={toggleOpen}
				enableSave={colors.length > 0}
			/>
			<AddColorDrawer
				open={drawerOpen}
				onClear={clearColors}
				onClose={toggleOpen}
				randomColor={randomColor}
				paletteFull={colors.length >= paletteMaxColors}
			/>
			<main
				className={clsx(content, {
					[contentShift]: drawerOpen
				})}
			>
				<div className={contentHeader} />
				{colors.length > 0 ? (
					<DraggableColorList
						axis='xy'
						onSortEnd={sortColors}
						lockToContainerEdges
						distance={2}
					/>
				) : (
					<div className={emptyPalettePlaceholderContainer}>
						<Typography className={emptyPalettePlaceholder}>
							Add Colors +
						</Typography>
					</div>
				)}
			</main>
		</div>
	);
});
