import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import ColorPickerForm from 'components/create-palette/ColorPickerForm';
import styles from 'styles/AddColorDrawer';

export default withStyles(styles)(function AddColorDrawer({
	open,
	onClose,
	onClear,
	randomColor,
  paletteFull,
  classes: {
		drawer,
		drawerPaper,
		drawerHeader,
		drawerContainer,
		drawerButtons,
		drawerButton,
		chevronLeftIcon,
	}
}) {
	return (
		<Drawer
			className={drawer}
			variant='persistent'
			anchor='left'
			open={open}
			classes={{
				paper: drawerPaper
			}}
		>
			<div className={drawerHeader}>
				<Typography variant='h5'>Pick a Color</Typography>
				<IconButton onClick={onClose} className={chevronLeftIcon}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<div className={drawerContainer}>
				<div className={drawerButtons}>
					<Button
						variant='outlined'
						color='primary'
						onClick={randomColor}
						disabled={paletteFull}
						className={drawerButton}
					>
						Random Color
					</Button>
					<Button
						variant='outlined'
						color='secondary'
						onClick={onClear}
						className={drawerButton}
					>
						Clear Palette
					</Button>
				</div>
				<ColorPickerForm paletteFull={paletteFull} />
			</div>
		</Drawer>
	);
});
