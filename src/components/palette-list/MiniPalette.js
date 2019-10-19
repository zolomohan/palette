import React, { memo, useContext } from 'react';
import { PaletteDispatchContext } from 'contexts/palette.context';
import useToggleState from 'hooks/useToggleState';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import ConfirmDialog from 'components/ui/ConfirmDialog';
import styles from 'styles/MiniPalette';

export default memo(
	withStyles(styles)(function MiniPalette({ classes, paletteName, emoji, id, colors }) {
		const [ deleteDialog, toggleDeleteDialog ] = useToggleState();
		const { root, deleteIcon, miniBox, title } = classes;

		const paletteDispatch = useContext(PaletteDispatchContext);

		const onDelete = () => {
			toggleDeleteDialog();
			paletteDispatch({ type: 'DELETE', id: id });
		};

		return (
			<div className={root}>
				<DeleteIcon className={deleteIcon} onClick={toggleDeleteDialog} />
				<Link to={`palette/${id}`} style={{ textDecoration: 'none' }}>
					<div className={classes.colors}>
						{colors.map(({ color, name }) => (
							<div
								className={miniBox}
								style={{ backgroundColor: color }}
								key={name}
							/>
						))}
					</div>
					<h5 className={title}>
						{paletteName} <span className={classes.emoji}>{emoji}</span>
					</h5>
				</Link>
				<ConfirmDialog
					content='	This action is irreversible. All Your Colors will be lost. Are you sure you want
					to Delete your palette?'
					open={deleteDialog}
					onSure={onDelete}
					onCancel={toggleDeleteDialog}
				/>
			</div>
		);
	})
);
