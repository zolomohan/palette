import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'contexts/theme.context';
import PaletteProvider from 'contexts/palette.context';
import App from 'components/App';
import * as serviceWorker from 'helpers/serviceWorker';
import 'styles/index.css';

ReactDOM.render(
	<BrowserRouter>
		<PaletteProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</PaletteProvider>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
