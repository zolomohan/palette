import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableColorBoxStyles';

export default SortableElement(
	withStyles(styles)(function DraggableColorBox(props) {
		const { root, boxContent, deleteIcon, colorName } = props.classes;
		function handleDeleteColor() {
			props.deleteColor(props.color);
		}
		return (
			<div className={root}>
				<div className={boxContent}>
					<span className={colorName}>{props.color.name}</span>
					<DeleteIcon className={deleteIcon} onClick={handleDeleteColor} />
				</div>
			</div>
		);
	})
);
