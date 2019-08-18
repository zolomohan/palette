import clsx from 'clsx';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import styles from './styles/NewPaletteNavbarStyles';
import NewPaletteSaveDialog from './NewPaletteSaveDialog';
import NewPaletteDiscardDialog from './NewPaletteDiscardDialog';

export default withStyles(styles)(
	class NewPaletteNav extends Component {
		state = {
			saveDialogOpen    : false,
			discardDialogOpen : false
		};

		saveDialogToggle = () => {
			this.setState({ saveDialogOpen: !this.state.saveDialogOpen });
		};

		discardDialogToggle = () => {
			this.setState({ discardDialogOpen: !this.state.discardDialogOpen });
		};

		render() {
			const { classes, open, openDrawer, savePalette, palettes } = this.props;
			const { saveDialogOpen, discardDialogOpen } = this.state;

			return (
				<AppBar
					position='fixed'
					color='inherit'
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open
					})}
					elevation={0}
				>
					<Toolbar disableGutters={!open}>
						<IconButton
							color='inherit'
							aria-label='Open drawer'
							onClick={openDrawer}
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<AddCircle />
						</IconButton>
						<Typography variant='h6' color='inherit' noWrap className={classes.title}>
							New Palette
						</Typography>
					</Toolbar>
					<div className={classes.navBtns}>
						<Button className={classes.navBtn} color='secondary' onClick={this.discardDialogToggle}>Discard</Button>
						<Button className={classes.navBtn} onClick={this.saveDialogToggle} color='primary'>
							Save
						</Button>
						<NewPaletteSaveDialog
							open={saveDialogOpen}
							toggle={this.saveDialogToggle}
							savePalette={savePalette}
							palettes={palettes}
						/>
						<NewPaletteDiscardDialog open={discardDialogOpen} toggle={this.discardDialogToggle}/>
					</div>
				</AppBar>
			);
		}
	}
);