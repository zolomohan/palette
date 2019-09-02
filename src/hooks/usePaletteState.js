import { useState, useEffect } from 'react';

export default (initialState) => {
	const [ state, setState ] = useState(JSON.parse(window.localStorage.getItem('palettes')) || initialState);
	useEffect(() => {console.log('State: ', state); window.localStorage.setItem('palettes', JSON.stringify(state))}, [state])
	const findPalette = (id) => state.find((palette) => palette.id === id),
				savePalette = (newPalette) => {setState([...state, newPalette])},
				deletePalette = (id) => {setState(state.filter((palette) => palette.id !== id))};
	return [state, findPalette, savePalette, deletePalette];
};
