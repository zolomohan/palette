import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useToggleState from 'hooks/useToggleState';
import Menu from '@material-ui/core/Menu';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SnackBar from 'components/ui/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Settings from '@material-ui/icons/MoreVert';
import withStyles from '@material-ui/core/styles/withStyles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ColorsIcon from '@material-ui/icons/Apps';
import RenameIcon from '@material-ui/icons/TextFields';
import LightModeIcon from '@material-ui/icons/WbIncandescent';
import DarkModeIcon from '@material-ui/icons/WbIncandescentOutlined';
import SavePaletteDialog from 'components/dialogs/SavePalette';
import styles from 'styles/navbar/ViewPalette';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ThemeContext } from 'contexts/theme.context';

function Navbar(props) {
	const { classes } = props;
	const [ more, setMore ] = useState(null);
	const [ renameDialog, toggleRenameDialog ] = useToggleState();
	const [ formatSnackbar, toggleFormatSnackbar ] = useToggleState();

  const theme = useContext(ThemeContext);
  
  const MUITheme = createMuiTheme({
		palette : {
			type : theme.darkMode ? 'dark' : 'light'
		}
	});

	const openMore = (event) => setMore(event.currentTarget);
	const closeMore = () => setMore(null);

	const openRenameDialog = () => {
		closeMore();
		toggleRenameDialog();
	};

	const onToggleTheme = () => {
		closeMore();
		theme.toggleDarkMode();
	};

	const changeColorLevel = (event, level) => props.changeLevel(level);

	const changeColorFormat = (event) => {
		props.changeColorFormat(event.target.value);
		toggleFormatSnackbar();
	};

	return (
		<nav
			className={classes.Navbar}
			style={{ backgroundColor: theme.darkMode ? '#222' : '' }}
		>
			<Link to={`${process.env.PUBLIC_URL}/`} style={{ textDecoration: 'none' }}>
				<span
					className={classes.NavbarBrand}
					style={{
						backgroundColor : theme.darkMode ? '#333' : '#e7e7e7',
						color           : theme.darkMode ? '#f6f7fb' : '#525252'
					}}
				>
					palette
				</span>
			</Link>
			{!props.singleColorShades && (
				<div className={classes.NavbarSlider}>
					<span
						className={classes.NavbarSliderText}
						style={{ color: theme.darkMode ? '#fff' : '#323232' }}
					>
						{props.level}
					</span>
					<Slider
						defaultValue={props.level}
						step={100}
						min={100}
						max={900}
						onChange={changeColorLevel}
					/>
				</div>
			)}
			<ThemeProvider theme={MUITheme}>
				<div className={classes.NavbarSelect}>
					<Select value={props.format} onChange={changeColorFormat}>
						<MenuItem value='hex'>HEX</MenuItem>
						<MenuItem value='rgb'>RGB</MenuItem>
						<MenuItem value='rgba'>RGBA</MenuItem>
					</Select>
				</div>
				<div className={classes.moreMenu} style={styles}>
					<IconButton size='small' onClick={openMore} style={styles}>
						<Settings />
					</IconButton>
					<Menu
						anchorEl={more}
						open={Boolean(more)}
						onClose={closeMore}
						keepMounted
					>
						<Link
							to={`${process.env
								.PUBLIC_URL}/palette/${props.paletteId}/edit`}
							style={{ textDecoration: 'none', color: theme.darkMode ? '#fff' : '#000' }}
						>
							<MenuItem onClick={closeMore}>
								<ListItemIcon>
									<ColorsIcon />
								</ListItemIcon>
								Edit Colors
							</MenuItem>
						</Link>
						<MenuItem onClick={openRenameDialog}>
							<ListItemIcon>
								<RenameIcon />
							</ListItemIcon>
							Rename Palette
						</MenuItem>
						<MenuItem onClick={onToggleTheme}>
							<ListItemIcon>
								{theme.darkMode ? <DarkModeIcon /> : <LightModeIcon />}
							</ListItemIcon>
							{theme.darkMode ? 'Light Mode' : 'Dark Mode'}
						</MenuItem>
					</Menu>
				</div>
			</ThemeProvider>
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
