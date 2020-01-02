import React, { useContext } from 'react';
import useToggleState from 'hooks/useToggleState';
import { ThemeContext } from 'contexts/theme.context';
import SnackBar from 'components/ui/Snackbar';
import SavePaletteDialog from 'components/dialogs/SavePalette';
import BrandName from 'components/palette/view/navbar/BrandName';
import LevelSlider from 'components/palette/view/navbar/LevelSlider';
import FormatSelect from 'components/palette/view/navbar/FormatSelect';
import MoreMenu from 'components/palette/view/navbar/MoreMenu';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/navbar/ViewPalette';

function Navbar(props) {
	const { classes } = props;
	const theme = useContext(ThemeContext);
	const [ renameDialog, toggleRenameDialog ] = useToggleState();
	const [ formatSnackbar, toggleFormatSnackbar ] = useToggleState();

	return (
		<nav className={classes.Navbar} style={{ backgroundColor: theme.darkMode ? '#222' : '#f6f7fb' }}>
			<BrandName />
			{!props.singleColorShades && <LevelSlider level={props.level} onChange={props.changeLevel} />}
			<FormatSelect format={props.format} onChange={props.changeColorFormat} onSuccess={toggleFormatSnackbar} />
			<MoreMenu paletteId={props.paletteId} onRename={toggleRenameDialog} />
			<SnackBar
				message={`Format Changed to ${props.format.toUpperCase()}`}
				open={formatSnackbar}
				onClose={toggleFormatSnackbar}
			/>
			<SavePaletteDialog
				renameMode
				open={renameDialog}
				paletteId={props.paletteId}
				toggleDialog={toggleRenameDialog}
				savePalette={props.renamePalette}
			/>
		</nav>
	);
}

export default withStyles(styles)(Navbar);
