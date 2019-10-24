import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useToggleState from 'hooks/useToggleState';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SnackBar from 'components/ui/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Settings from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/navbar/Palette';
import { ListItemIcon, Typography } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';

function Navbar(props) {
	const { classes } = props;

	const [ formatSnackbar, toggleFormatSnackbar ] = useToggleState();
	const [ more, setMore ] = useState(null);

	const openMore = (event) => setMore(event.currentTarget);
	const closeMore = () => setMore(null);

	const changeColorLevel = (event, level) => props.changeLevel(level);

	const changeColorFormat = (event) => {
		props.changeColorFormat(event.target.value);
		toggleFormatSnackbar();
	};

	return (
		<nav className={classes.Navbar}>
			<Link to={`${process.env.PUBLIC_URL}/`} style={{ textDecoration: 'none' }}>
				<span className={classes.NavbarBrand}>palette</span>
			</Link>
			{!props.singleColorShades && (
				<div className={classes.NavbarSlider}>
					<span className={classes.NavbarSliderText}>{props.level}</span>
					<Slider
						defaultValue={props.level}
						step={100}
						min={100}
						max={900}
						onChange={changeColorLevel}
					/>
				</div>
			)}
			<div className={classes.NavbarSelect}>
				<Select value={props.format} onChange={changeColorFormat}>
					<MenuItem value='hex'>HEX</MenuItem>
					<MenuItem value='rgb'>RGB</MenuItem>
					<MenuItem value='rgba'>RGBA</MenuItem>
				</Select>
			</div>
			{console.log(classes.moreMenu)}
			<div className={classes.moreMenu}>
				<IconButton color='inherit' size='small'>
					<Settings onClick={openMore} />
				</IconButton>
				<Menu
					anchorEl={more}
					open={Boolean(more)}
					onClose={closeMore}
					keepMounted
				>
					<Link
						to={`${process.env.PUBLIC_URL}/palette/${props.paletteId}/edit`}
						style={{ textDecoration: 'none', color: 'black' }}
					>
						<MenuItem onClick={closeMore} className='anchor'>
							<ListItemIcon>
								<Edit />
							</ListItemIcon>
							Edit Palette
						</MenuItem>
					</Link>
				</Menu>
			</div>
			<SnackBar
				message={`Format Changed to ${props.format.toUpperCase()}`}
				open={formatSnackbar}
				onClose={toggleFormatSnackbar}
			/>
		</nav>
	);
}

export default withStyles(styles)(Navbar);
