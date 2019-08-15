import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';
import styles from './styles/DraggableColorBoxStyles';

export default SortableElement(
	withStyles(styles)(function DraggableColorBox(props) {
		const { classes } = props;
		function handleDeleteColor() {
			props.deleteColor(props.color);
		}
		return (
			<div className={classes.root}>
				<div className={classes.boxContent}>
					<span className={classes.colorName}>{props.color.name}</span>
					<DeleteIcon className={classes.deleteIcon} onClick={handleDeleteColor} />
				</div>
			</div>
		);
	})
);
