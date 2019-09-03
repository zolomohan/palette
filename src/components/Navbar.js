import clsx from 'clsx';
import React from 'react';
import useToggleState from '../hooks/useToggleState';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CreatePaletteSaveDialog from './CreatePaletteSaveDialog';
import CloseIcon from '@material-ui/icons/Close';
import CreatePaletteDiscardDialog from './CreatePaletteDiscardDialog';
import AddCircle from '@material-ui/icons/AddCircle';
import styles from '../styles/NavbarStyles';

export default withStyles(styles)(function Navbar({
	variant,
	classes,
	open,
	openDrawer,
	savePalette,
	palettes,
	changeColorFormat,
	changeLevel,
	level,
	format,
	enableSave
}) {
	const [ formatSnackbar, toggleFormatSnackbar ] = useToggleState();
	const [ emptyPaletteSnackbar, toggleEmptyPaletteSnackbar ] = useToggleState();
	const [ saveDialog, toggleSaveDialog ] = useToggleState();
	const [ discardDialog, toggleDiscardDialog ] = useToggleState();

	function createPaletteNavbar() {
		const { appBar, appBarShift, menuButton, hide, title, navBtns, navBtn } = classes;
		const handleSavePalette = () => {
			if (enableSave) toggleSaveDialog();
			else toggleEmptyPaletteSnackbar();
		};
		return (
			<AppBar
				position='fixed'
				color='inherit'
				className={clsx(appBar, {
					[appBarShift] : open
				})}
				elevation={0}
			>
				<Toolbar disableGutters={!open}>
					<IconButton
						color='inherit'
						aria-label='Open drawer'
						onClick={openDrawer}
						className={clsx(menuButton, open && hide)}
					>
						<AddCircle />
					</IconButton>
					<Typography variant='h6' color='inherit' noWrap className={title}>
						New Palette
					</Typography>
				</Toolbar>
				<div className={navBtns}>
					<Button className={navBtn} color='secondary' onClick={toggleDiscardDialog}>
						Discard
					</Button>
					<Button className={navBtn} onClick={handleSavePalette} color='primary'>
						Save
					</Button>
					<Snackbar
						message={<span id='message-id'>Palette is Empty! Add Some Colors</span>}
						anchorOrigin={{
							vertical   : 'bottom',
							horizontal : 'right'
						}}
						open={emptyPaletteSnackbar}
						autoHideDuration={3000}
						ContentProps={{
							'aria-describedby' : 'message-id'
						}}
						onClose={toggleEmptyPaletteSnackbar}
						action={[
							<IconButton onClick={toggleEmptyPaletteSnackbar} color='inherit' key='Close Snackbar'>
								<CloseIcon />
							</IconButton>
						]}
					/>
					<CreatePaletteSaveDialog
						open={saveDialog}
						toggleDialog={toggleSaveDialog}
						savePalette={savePalette}
						palettes={palettes}
					/>
					<CreatePaletteDiscardDialog open={discardDialog} toggle={toggleDiscardDialog} />
				</div>
			</AppBar>
		);
	}

	function paletteNavbar() {
		const { Navbar, NavbarBrand, NavbarSlider, NavbarSliderText, NavbarSelect } = classes;
		return (
			<nav className={Navbar}>
				<Link to={`${process.env.PUBLIC_URL}/`} style={{ textDecoration: 'none' }}>
					<span className={NavbarBrand}>palette</span>
				</Link>
				{level && (
					<div className={NavbarSlider}>
						<span className={NavbarSliderText}>{level}</span>
						<Slider
							defaultValue={level}
							step={100}
							min={100}
							max={900}
							onChange={(event, level) => changeLevel(level)}
						/>
					</div>
				)}

				<div className={NavbarSelect}>
					<Select
						value={format}
						onChange={(event) => {
							changeColorFormat(event.target.value);
							toggleFormatSnackbar();
						}}
					>
						<MenuItem value='hex'>HEX</MenuItem>
						<MenuItem value='rgb'>RGB</MenuItem>
						<MenuItem value='rgba'>RGBA</MenuItem>
					</Select>
				</div>
				<Snackbar
					message={<span id='message-id'>Format Changed to {format.toUpperCase()}</span>}
					anchorOrigin={{
						vertical   : 'bottom',
						horizontal : 'left'
					}}
					open={formatSnackbar}
					autoHideDuration={3000}
					ContentProps={{
						'aria-describedby' : 'message-id'
					}}
					onClose={toggleFormatSnackbar}
					action={[
						<IconButton onClick={toggleFormatSnackbar} color='inherit' key='Close Snackbar'>
							<CloseIcon />
						</IconButton>
					]}
				/>
			</nav>
		);
	}
	return variant === 'new' ? createPaletteNavbar() : paletteNavbar();
});
