import React, { createContext } from 'react';
import useToggleState from 'hooks/useToggleState';

export const ThemeContext = createContext();

export default function ThemeProvider(props) {
	const [ darkMode, toggleDarkMode ] = useToggleState(true);
	return (
		<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{props.children}
		</ThemeContext.Provider>
	);
}
