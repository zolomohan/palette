import useLocalStorageState from './useLocalStorageState';

export default (initialState) => {
	const [ state, setState ] = useLocalStorageState('palettes', initialState);
	const findPalette = (id) => state.find((palette) => palette.id === id),
				savePalette = (newPalette) => setState([ ...state, newPalette ]),
				deletePalette = (id) => setState(state.filter((palette) => palette.id !== id));
	return [ state, findPalette, savePalette, deletePalette ];
};
