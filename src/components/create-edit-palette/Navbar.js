import clsx from 'clsx';
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import useToggleState from 'hooks/useToggleState';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AddCircle from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SnackBar from 'components/ui/Snackbar';
import SavePaletteDialog from 'components/dialogs/SavePalette';
import ConfirmDialog from 'components/dialogs/Confirm';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/navbar/CreateAndEdit';
import { ThemeContext } from 'contexts/theme.context';

function Navbar(props) {
	const { classes } = props;
	const theme = useContext(ThemeContext);
	const [ emptyPaletteSnackbar, toggleEmptyPaletteSnackbar ] = useToggleState();
	const [ editDialog, toggleEditDialog ] = useToggleState();
	const [ createDialog, toggleCreateDialog ] = useToggleState();
	const [ discardDialog, toggleDiscardDialog ] = useToggleState();

	const onDiscard = () => {
		const link = props.editMode ? `palette/${props.match.params.paletteId}` : '';
		props.history.push(`${process.env.PUBLIC_URL}/${link}`);
	};

	const handleSavePalette = () => {
		if (props.enableSave) {
			props.editMode ? toggleEditDialog() : toggleCreateDialog();
		} else toggleEmptyPaletteSnackbar();
	};

	return (
		<AppBar
			position='fixed'
			color='inherit'
			className={clsx(classes.appBar, {
				[classes.appBarDark]: theme.darkMode,
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
					{props.editMode ? 'Edit Palette' : 'New Palette'}
				</Typography>
			</Toolbar>
			<div className={classes.navBtns}>
				<Button className={classes.navBtn} onClick={toggleDiscardDialog} color='secondary'>
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
					open={createDialog}
					toggleDialog={toggleCreateDialog}
					savePalette={props.savePalette}
				/>
				<ConfirmDialog
					open={discardDialog}
					content='This action is irreversible. All Your Colors will be lost. Are you
					sure you want to Discard your palette?'
					onCancel={toggleDiscardDialog}
					onSure={onDiscard}
				/>
				<ConfirmDialog
					open={editDialog}
					content='This action is irreversible. All Your Colors will be Replaced. Are you
					sure you want to Edit your palette?'
					onCancel={toggleEditDialog}
					onSure={props.savePalette}
				/>
			</div>
		</AppBar>
	);
}

export default withRouter(withStyles(styles)(Navbar));
