import React, {useContext} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import ColorPickerForm from 'components/create-edit-palette/ColorPickerForm';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/AddColorDrawer';
import { ThemeContext } from 'contexts/theme.context';
import clsx from 'clsx';

function AddColorDrawer(props) {
  const { classes } = props;
  const theme = useContext(ThemeContext);

	return (
		<Drawer
			className={classes.drawer}
			variant='persistent'
			anchor='left'
			open={props.open}
			classes={{
				paper: clsx(classes.drawerPaper, {
          [classes.drawerPaperDark] : theme.darkMode
        })
			}}
		>
			<div className={classes.drawerHeader}>
				<Typography variant='h5'>Pick a Color</Typography>
				<IconButton
					onClick={props.onClose}
					className={classes.chevronLeftIcon}
				>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<div className={classes.drawerContainer}>
				<div className={classes.drawerButtons}>
					<Button
						variant='outlined'
						color='primary'
						onClick={props.randomColor}
						disabled={props.paletteFull}
						className={classes.drawerButton}
					>
						Random Color
					</Button>
					<Button
						variant='outlined'
						color='secondary'
						onClick={props.onClear}
						className={classes.drawerButton}
					>
						Clear Palette
					</Button>
				</div>
				<ColorPickerForm paletteFull={props.paletteFull} />
			</div>
		</Drawer>
	);
}

export default withStyles(styles)(AddColorDrawer);
