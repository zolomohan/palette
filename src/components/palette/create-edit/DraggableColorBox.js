import React, { memo, useContext } from 'react';
import { ColorDispatchContext } from 'contexts/color.context';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/DraggableColorBox';

function DraggableColorBox(props) {
	const { classes } = props;
	const colorsDispatch = useContext(ColorDispatchContext);
	const handleDelete = () => colorsDispatch({ type: 'DELETE', color: props.color.color });

	return (
		<div className={classes.root}>
			<div className={classes.boxContent}>
				<span className={classes.colorName}>{props.color.name}</span>
				<DeleteIcon className={classes.deleteIcon} onClick={handleDelete} />
			</div>
		</div>
	);
}

export default SortableElement(memo(withStyles(styles)(DraggableColorBox)));
