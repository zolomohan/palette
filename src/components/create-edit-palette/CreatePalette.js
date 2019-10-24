import React, { useContext } from 'react';
import useToggleState from 'hooks/useToggleState';
import { ColorContext, ColorDispatchContext } from 'contexts/color.context';
import { PaletteContext, PaletteDispatchContext } from 'contexts/palette.context';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from 'components/create-edit-palette/Navbar';
import DraggableColorList from 'components/create-edit-palette/DraggableColorList';
import AddColorDrawer from 'components/create-edit-palette/AddColorDrawer';

export default function CreatePalette(props) {
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

	const addPalette = (newPaletteName, emoji) => {
		paletteDispatch({
			type    : 'ADD',
			palette : {
				paletteName : newPaletteName,
				id          : newPaletteName.toLowerCase().replace(/ /g, '-'),
				emoji       : emoji,
				colors      : colors
			}
		});
		props.route.history.push(`${process.env.PUBLIC_URL}/`);
	};

	const editPalette = () => {
		props.route.history.push(
			`${process.env.PUBLIC_URL}/palette/${props.route.match.params.paletteId}`
		);
	};

	return (
		<div style={{ display: 'flex' }}>
			<CssBaseline />
			<Navbar
				editMode={props.editMode}
				history={props.history}
				drawerOpen={drawerOpen}
				savePalette={props.editMode ? editPalette : addPalette}
				openDrawer={toggleOpen}
				enableSave={colors.length > 0}
			/>
			<AddColorDrawer
				open={drawerOpen}
				onClear={clearColors}
				onClose={toggleOpen}
				randomColor={randomColor}
				paletteFull={colors.length >= props.paletteMaxColors}
			/>
			<DraggableColorList
				axis='xy'
				distance={2}
				drawerOpen={drawerOpen}
				onSortEnd={sortColors}
				lockToContainerEdges
			/>
		</div>
	);
}
