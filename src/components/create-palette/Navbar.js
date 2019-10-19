import clsx from 'clsx';
import React, { useContext } from 'react';
import useToggleState from 'hooks/useToggleState';
import { withStyles } from '@material-ui/core';
import SnackBar from 'components/ui/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddCircle from '@material-ui/icons/AddCircle';
import SavePaletteDialog from 'components/create-palette/dialogs/SavePalette';
import DiscardPaletteDialog from 'components/create-palette/dialogs/DiscardPalette';
import styles from 'styles/navbar/CreatePalette';
import { PaletteContext } from 'contexts/palette.context';

export default withStyles(styles)(function Navbar({
	open,
	openDrawer,
	enableSave,
	savePalette,
	classes: { appBar, appBarShift, menuButton, hide, title, navBtns, navBtn }
}) {
	const palettes = useContext(PaletteContext);
	const [ emptyPaletteSnackbar, toggleEmptyPaletteSnackbar ] = useToggleState();
	const [ saveDialog, toggleSaveDialog ] = useToggleState();
	const [ discardDialog, toggleDiscardDialog ] = useToggleState();

	const handleSavePalette = () => {
		if (enableSave) toggleSaveDialog();
		else toggleEmptyPaletteSnackbar();
	};

	return (
		<AppBar
			position='fixed'
			color='inherit'
			className={clsx(appBar, {
				[appBarShift]: open
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
				<Button
					className={navBtn}
					color='secondary'
					onClick={toggleDiscardDialog}
				>
					Discard
				</Button>
				<Button className={navBtn} onClick={handleSavePalette} color='primary'>
					Save
				</Button>
				<SnackBar
					message='Palette is Empty! Add Some Colors'
					open={emptyPaletteSnackbar}
					onClose={toggleEmptyPaletteSnackbar}
					horizontalOrigin='right'
				/>
				<SavePaletteDialog
					open={saveDialog}
					toggleDialog={toggleSaveDialog}
					savePalette={savePalette}
					palettes={palettes}
				/>
				<DiscardPaletteDialog open={discardDialog} toggle={toggleDiscardDialog} />
			</div>
		</AppBar>
	);
});
