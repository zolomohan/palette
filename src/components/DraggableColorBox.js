import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../styles/DraggableColorBoxStyles';

export default SortableElement(
	memo(
		withStyles(styles)(function DraggableColorBox({ dispatch, classes, color }) {
			const { root, boxContent, deleteIcon, colorName } = classes;
			return (
				<div className={root}>
					<div className={boxContent}>
						<span className={colorName}>{color.name}</span>
						<DeleteIcon className={deleteIcon} onClick={() => dispatch({type: 'DELETE', color: color.color})} />
					</div>
				</div>
			);
		})
	)
);
