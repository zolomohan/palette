import React, { memo, useContext } from 'react';
import { PaletteDispatchContext } from 'contexts/palette.context';
import useToggleState from 'hooks/useToggleState';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import ConfirmDialog from 'components/dialogs/Confirm';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from 'styles/MiniPalette';
import MiniBox from './MiniBox';

function MiniPalette(props) {
	const [ deleteDialog, toggleDeleteDialog ] = useToggleState();
	const { classes } = props;

	const paletteDispatch = useContext(PaletteDispatchContext);

	const onDelete = () => {
		toggleDeleteDialog();
		paletteDispatch({ type: 'DELETE', id: props.id });
	};

	return (
		<div className={classes.root}>
			<DeleteIcon className={classes.deleteIcon} onClick={toggleDeleteDialog} />
			<Link to={`palette/${props.id}`} style={{ textDecoration: 'none' }}>
				<div className={classes.colors}>
					{props.colors.map(({ color, name }) => (
						<MiniBox color={color} key={name} colorsLength={props.colors.length} />
					))}
				</div>
				<h5
					className={classes.title}
					style={{
						color : '#525252'
					}}
				>
					{props.paletteName}
					<span className={classes.emoji}>{props.emoji}</span>
				</h5>
			</Link>
			<ConfirmDialog
				content='This action is irreversible. All Your Colors will be lost. Are you sure you want
				to Delete your palette?'
				open={deleteDialog}
				onSure={onDelete}
				onCancel={toggleDeleteDialog}
			/>
		</div>
	);
}

export default memo(withStyles(styles)(MiniPalette));
