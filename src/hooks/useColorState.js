import { useState } from 'react';
import arrayMove from 'array-move';

export default (initialState, palettes) => {
	const [ colors, setColors ] = useState(initialState);
	const clearPalette = () => setColors([]);
	const addColor = (newColor) => setColors([ ...colors, newColor ]);
	const deleteColor = (deleteColor) =>
		setColors(colors.filter((color) => color.color !== deleteColor.color));
	const randomColor = () => {
		const allColors = palettes.map((palette) => palette.colors).flat();
		const randomClr = allColors[Math.floor(Math.random() * allColors.length)];
		colors.some((color) => color.name === randomClr.name) ? randomColor() : addColor(randomClr);
	};
	const sortColors = ({ oldIndex, newIndex }) => setColors(arrayMove(colors, oldIndex, newIndex));
	return [ colors, addColor, deleteColor, randomColor, clearPalette, sortColors ];
};
