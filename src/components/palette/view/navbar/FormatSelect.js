import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/styles';
import styles from 'styles/navbar/ViewPalette';

function FormatSelect(props) {
	const { classes } = props;

	const onChange = (event) => {
		props.onChange(event.target.value);
		props.onSuccess();
	};

	return (
		<div className={classes.NavbarSelect}>
			<Select value={props.format} onChange={onChange}>
				<MenuItem value='hex'>HEX</MenuItem>
				<MenuItem value='rgb'>RGB</MenuItem>
				<MenuItem value='rgba'>RGBA</MenuItem>
			</Select>
		</div>
	);
}

export default withStyles(styles)(FormatSelect);
