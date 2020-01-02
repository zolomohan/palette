import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'contexts/theme.context';
import styles from 'styles/navbar/ViewPalette';
import withStyles from '@material-ui/core/styles/withStyles';

function BrandName(props) {
  const { classes } = props;
  const theme = useContext(ThemeContext);

	return (
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
	);
}

export default withStyles(styles)(BrandName);
