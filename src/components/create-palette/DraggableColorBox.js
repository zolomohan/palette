import React, { memo, useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from 'styles/DraggableColorBox';
import { ColorDispatchContext } from 'contexts/color.context';

export default SortableElement(
	memo(
		withStyles(styles)(function DraggableColorBox({
			classes  : { root, boxContent, deleteIcon, colorName },
			color    : { name, color },
		}) {
			const colorsDispatch = useContext(ColorDispatchContext);
			return (
				<div className={root}>
					<div className={boxContent}>
						<span className={colorName}>{name}</span>
						<DeleteIcon
							className={deleteIcon}
							onClick={() => colorsDispatch({ type: 'DELETE', color })}
						/>
					</div>
				</div>
			);
		})
	)
);
