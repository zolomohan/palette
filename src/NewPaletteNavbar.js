import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import styles from './styles/NewPaletteNavbarStyles';
import PaletteSaveDialog from './PaletteSaveDialog';

export default withStyles(styles)(
	class NewPaletteNav extends Component {
		state = {
			saveDialogOpen : false
		};

		saveDialogToggle = () => {
			this.setState({ saveDialogOpen: !this.state.saveDialogOpen });
		};

		render() {
			const { classes, open, openDrawer, savePalette, palettes } = this.props;
			const { saveDialogOpen } = this.state;

			return (
				<AppBar
					position='fixed'
					color='default'
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar disableGutters={!open}>
						<IconButton
							color='inherit'
							aria-label='Open drawer'
							onClick={openDrawer}
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' color='inherit' noWrap>
							New Palette
						</Typography>
					</Toolbar>
					<div className={classes.navBtns}>
						<Link to='/'>
							<Button color='secondary'>Discard</Button>
						</Link>
						<Button onClick={this.saveDialogToggle} color='primary'>
							Save
						</Button>
						<PaletteSaveDialog
							open={saveDialogOpen}
							toggle={this.saveDialogToggle}
							savePalette={savePalette}
							palettes={palettes}
						/>
					</div>
				</AppBar>
			);
		}
	}
);

{
}
