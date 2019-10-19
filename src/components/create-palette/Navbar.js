import clsx from 'clsx';
import React, { useContext } from 'react';
import useToggleState from 'hooks/useToggleState';
import { PaletteContext } from 'contexts/palette.context';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AddCircle from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SnackBar from 'components/ui/Snackbar';
import SavePaletteDialog from 'components/create-palette/SavePaletteDialog';
import ConfirmDialog from 'components/ui/ConfirmDialog';
import { withStyles } from '@material-ui/core';
import styles from 'styles/navbar/CreatePalette';

function Navbar(props) {
	const { classes } = props;
	const palettes = useContext(PaletteContext);
	const [ emptyPaletteSnackbar, toggleEmptyPaletteSnackbar ] = useToggleState();
	const [ saveDialog, toggleSaveDialog ] = useToggleState();
	const [ discardDialog, toggleDiscardDialog ] = useToggleState();

	const onDiscard = () => props.history.push(`${process.env.PUBLIC_URL}/`);

	const handleSavePalette = () => {
		if (props.enableSave) toggleSaveDialog();
		else toggleEmptyPaletteSnackbar();
	};

	return (
		<AppBar
			position='fixed'
			color='inherit'
			className={clsx(classes.appBar, {
				[classes.appBarShift]: props.drawerOpen
			})}
			elevation={0}
		>
			<Toolbar disableGutters={!props.drawerOpen}>
				<IconButton
					color='inherit'
					aria-label='Open drawer'
					onClick={props.openDrawer}
					className={clsx(classes.menuButton, props.drawerOpen && classes.hide)}
				>
					<AddCircle />
				</IconButton>
				<Typography variant='h6' color='inherit' noWrap className={classes.title}>
					New Palette
				</Typography>
			</Toolbar>
			<div className={classes.navBtns}>
				<Button
					className={classes.navBtn}
					color='secondary'
					onClick={toggleDiscardDialog}
				>
					Discard
				</Button>
				<Button className={classes.navBtn} onClick={handleSavePalette} color='primary'>
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
					savePalette={props.savePalette}
					palettes={palettes}
				/>
				<ConfirmDialog
					open={discardDialog}
					content='This action is irreversible. All Your Colors will be lost. Are you
					sure you want to Discard your palette?'
					onCancel={toggleDiscardDialog}
					onSure={onDiscard}
				/>
			</div>
		</AppBar>
	);
};

export default withStyles(styles)(Navbar);