import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChromePicker from 'react-color';
import Button from '@material-ui/core/Button'
import styles from './styles/NewPaletteFormStyles';

export default withStyles(styles, { withTheme: true })(
	class NewPaletteForm extends Component {
		state = {
			open : true,
			currentColor: 'teal'
		};

		handleDrawerOpen = () => {
			this.setState({ open: true });
		};

		handleDrawerClose = () => {
			this.setState({ open: false });
		};

		handleColorChange = (newColor) => {
			this.setState({currentColor: newColor.hex})
		}

		render() {
			const { classes } = this.props;
			const { open, currentColor } = this.state;

			return (
				<div className={classes.root}>
					<CssBaseline />
					<AppBar
						position='fixed'
						className={clsx(classes.appBar, {
							[classes.appBarShift]: open
						})}
					>
						<Toolbar disableGutters={!open}>
							<IconButton
								color='inherit'
								aria-label='Open drawer'
								onClick={this.handleDrawerOpen}
								className={clsx(classes.menuButton, open && classes.hide)}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant='h6' color='inherit' noWrap>
								New Palette
							</Typography>
						</Toolbar>
					</AppBar>
					<Drawer
						className={classes.drawer}
						variant='persistent'
						anchor='left'
						open={open}
						classes={{
							paper : classes.drawerPaper
						}}
					>
						<div className={classes.drawerHeader}>
							<IconButton onClick={this.handleDrawerClose}>
								<ChevronLeftIcon />
							</IconButton>
						</div>
						<Divider />
						<Typography variant='h5'>Pick a Color</Typography>
						<div>
							<Button color='secondary'>Clear Palette</Button>
							<Button color='primary'>Random Color</Button>
						</div>
						<ChromePicker color={currentColor} onChange = {this.handleColorChange}/>
							<Button variant='contained' style={{backgroundColor: currentColor, transition: 'none'}}>Add Color</Button>
					</Drawer>
					<main
						className={clsx(classes.content, {
							[classes.contentShift]: open
						})}
					>
						<div className={classes.drawerHeader} />
					</main>
				</div>
			);
		}
	}
);
