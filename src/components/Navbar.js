import clsx from 'clsx';
import React, { Component } from 'react';
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

export default withStyles(styles)(
	class Navbar extends Component {
		state = {
			snackbarOpen      : false,
			saveDialogOpen    : false,
			discardDialogOpen : false
		};

		handleSliderChange = (event, level) => this.props.changeLevel(level);

		handleFormatChange = (event) => {
			this.props.changeColorFormat(event.target.value);
			this.setState({ snackbarOpen: true });
		};

		closeSnackbar = () => this.setState({ snackbarOpen: false });

		saveDialogToggle = () => this.setState({ saveDialogOpen: !this.state.saveDialogOpen });

		discardDialogToggle = () => this.setState({ discardDialogOpen: !this.state.discardDialogOpen });

		newPaletteNavbar() {
			const { classes, open, openDrawer, savePalette, palettes } = this.props;
			const { saveDialogOpen, discardDialogOpen } = this.state;
			const { appBar, appBarShift, menuButton, hide, title, navBtns, navBtn } = classes;

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
						<Button className={navBtn} color='secondary' onClick={this.discardDialogToggle}>
							Discard
						</Button>
						<Button className={navBtn} onClick={this.saveDialogToggle} color='primary'>
							Save
						</Button>
						<CreatePaletteSaveDialog
							open={saveDialogOpen}
							toggle={this.saveDialogToggle}
							savePalette={savePalette}
							palettes={palettes}
						/>
						<CreatePaletteDiscardDialog open={discardDialogOpen} toggle={this.discardDialogToggle} />
					</div>
				</AppBar>
			);
		}

		paletteNavbar() {
			const { handleFormatChange, handleSliderChange, closeSnackbar, props, state } = this;
			const { classes, level, format } = props;
			const { Navbar, NavbarBrand, NavbarSlider, NavbarSliderText, NavbarSelect } = classes;
			return (
				<nav className={Navbar}>
					<Link to={`${process.env.PUBLIC_URL}/`} style={{ textDecoration: 'none' }}>
						<span className={NavbarBrand}>palette</span>
					</Link>
					{level && (
						<div className={NavbarSlider}>
							<span className={NavbarSliderText}>{level}</span>
							<Slider defaultValue={level} step={100} min={100} max={900} onChange={handleSliderChange} />
						</div>
					)}

					<div className={NavbarSelect}>
						<Select value={format} onChange={handleFormatChange}>
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
						open={state.snackbarOpen}
						autoHideDuration={3000}
						ContentProps={{
							'aria-describedby' : 'message-id'
						}}
						onClose={closeSnackbar}
						action={[
							<IconButton onClick={closeSnackbar} color='inherit' key='Close Snackbar'>
								<CloseIcon />
							</IconButton>
						]}
					/>
				</nav>
			);
		}

		render() {
			return this.props.variant === 'new' ? this.newPaletteNavbar() : this.paletteNavbar();
		}
	}
);
