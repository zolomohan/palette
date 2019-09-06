import React, { createContext, useReducer } from 'react';
import colorReducer from '../reducers/colors.reducer';
import seedColors from '../helpers/seedColors';

export const ColorContext = createContext();
export const ColorDispatchContext = createContext();

export default function PaletteProvider({ children }) {
	const [ colors, dispatch ] = useReducer(colorReducer, seedColors[0].colors);

	return(
		<ColorContext.Provider value={colors}>
			<ColorDispatchContext.Provider value={dispatch}>{children}</ColorDispatchContext.Provider>
		</ColorContext.Provider>
	);
}
