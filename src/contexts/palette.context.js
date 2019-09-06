import React, { createContext } from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState';
import paletteReducer from '../reducers/palettes.reducer';
import seedColors from '../helpers/seedColors';

export const PaletteContext = createContext();
export const PaletteDispatchContext = createContext();

export default function PaletteProvider({ children }) {
	const [ palettes, dispatch ] = useLocalStorageState(paletteReducer, 'palettes', seedColors);

	return(
		<PaletteContext.Provider value={palettes}>
			<PaletteDispatchContext.Provider value={dispatch}>{children}</PaletteDispatchContext.Provider>
		</PaletteContext.Provider>
	);
}
