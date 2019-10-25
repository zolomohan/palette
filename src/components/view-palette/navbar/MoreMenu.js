import React, { useState, useContext } from 'react';
import { ThemeContext } from 'contexts/theme.context';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Settings from '@material-ui/icons/MoreVert';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ColorsIcon from '@material-ui/icons/Apps';
import RenameIcon from '@material-ui/icons/TextFields';
import LightModeIcon from '@material-ui/icons/WbIncandescent';
import DarkModeIcon from '@material-ui/icons/WbIncandescentOutlined';
import styles from 'styles/navbar/ViewPalette';
import withStyles from '@material-ui/core/styles/withStyles';

function Navbar(props) {
	const { classes } = props;
	const [ more, setMore ] = useState(null);

	const theme = useContext(ThemeContext);

	const openMore = (event) => setMore(event.currentTarget);
	const closeMore = () => setMore(null);

	const openRenameDialog = () => {
		closeMore();
		props.onRename();
	};

	const onToggleTheme = () => {
		closeMore();
		theme.toggleDarkMode();
	};

	return (
		<div className={classes.moreMenu}>
			<IconButton size='small' onClick={openMore}>
				<Settings />
			</IconButton>
			<Menu anchorEl={more} open={Boolean(more)} onClose={closeMore} keepMounted>
				<Link
					to={`${process.env.PUBLIC_URL}/palette/${props.paletteId}/edit`}
					style={{
						textDecoration : 'none',
						color          : theme.darkMode ? '#fff' : '#000'
					}}
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
	);
}

export default withStyles(styles)(Navbar);
