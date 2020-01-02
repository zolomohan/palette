import React, { useContext } from 'react';
import { ColorContext } from 'contexts/color.context';
import { SortableContainer } from 'react-sortable-hoc';
import Typography from '@material-ui/core/Typography';
import DraggableColorBox from 'components/palette/create-edit/DraggableColorBox';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/DraggableColorList';

function DraggableColorList(props) {
	const { classes } = props;
	const colors = useContext(ColorContext);
	return (
		<main className={`${classes.content} ${props.drawerOpen && classes.contentShift}`}>
			<div className={classes.contentHeader} />
			{colors.length > 0 ? (
				<div style={{ height: '100%' }}>
					{colors.map((color, index) => <DraggableColorBox color={color} key={color.name} index={index} />)}
				</div>
			) : (
				<div className={classes.emptyPalettePlaceholderContainer}>
					<Typography className={classes.emptyPalettePlaceholder}>Add Colors +</Typography>
				</div>
			)}
		</main>
	);
}

export default withStyles(styles)(SortableContainer(DraggableColorList));
