import React, { createContext, useReducer } from 'react';
import colorReducer from 'reducers/colors.reducer';


export const ColorContext = createContext();
export const ColorDispatchContext = createContext();

export default function PaletteProvider(props) {
  const [ colors, dispatch ] = useReducer(colorReducer, props.initialColors);
	return(
		<ColorContext.Provider value={colors}>
			<ColorDispatchContext.Provider value={dispatch}>{props.children}</ColorDispatchContext.Provider>
		</ColorContext.Provider>
	);
}
