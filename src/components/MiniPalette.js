import React, { memo } from 'react';
import useToggleState from '../hooks/useToggleState';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import DeletePaletteDialog from './DeletePaletteDialog';
import styles from '../styles/MiniPaletteStyles';

export default memo(
	withStyles(styles)(function MiniPalette({ classes, paletteName, emoji, id, colors, dispatch }) {
		const [ deleteModal, toggleDeleteModal ] = useToggleState();
		const { root, deleteIcon, miniBox, title } = classes;
		return (
			<div className={root}>
				<DeleteIcon className={deleteIcon} onClick={toggleDeleteModal} />
				<Link to={`palette/${id}`} style={{ textDecoration: 'none' }}>
					<div className={classes.colors}>
						{colors.map((color) => (
							<div className={miniBox} style={{ backgroundColor: color.color }} key={color.name} />
						))}
					</div>
					<h5 className={title}>
						{paletteName} <span className={classes.emoji}>{emoji}</span>
					</h5>
				</Link>
				<DeletePaletteDialog
					open={deleteModal}
					toggleDeleteModal={toggleDeleteModal}
					dispatch={dispatch}
					id={id}
				/>
			</div>
		);
	})
);
