import React, { useContext } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ThemeContext } from 'contexts/theme.context';
import { withStyles } from '@material-ui/styles';
import styles from 'styles/navbar/ViewPalette';

function FormatSelect(props) {
  const { classes } = props;
  const theme = useContext(ThemeContext);
  
	const MUITheme = createMuiTheme({
		palette : {
			type : theme.darkMode ? 'dark' : 'light'
		}
	});

	const onChange = (event) => {
		props.onChange(event.target.value);
		props.onSuccess();
	};

	return (
		<ThemeProvider theme={MUITheme}>
			<div className={classes.NavbarSelect}>
				<Select value={props.format} onChange={onChange}>
					<MenuItem value='hex'>HEX</MenuItem>
					<MenuItem value='rgb'>RGB</MenuItem>
					<MenuItem value='rgba'>RGBA</MenuItem>
				</Select>
			</div>
		</ThemeProvider>
	);
}

export default withStyles(styles)(FormatSelect);
