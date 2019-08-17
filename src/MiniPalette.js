import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import DeletePaletteDialog from './DeletePaletteDialog';
import styles from './styles/MiniPaletteStyles';

export default withStyles(styles)(function MiniPalette(props) {
	const { classes, paletteName, emoji, id, colors, deletePalette } = props;
	const [deleteModal, setDeleteModal] = useState(false);

	return (
		<div className={classes.root}>
			<DeleteIcon className={classes.deleteIcon} onClick={() => setDeleteModal(true)} />
			<Link to={`palette/${id}`} style={{ textDecoration: 'none', color: '#525252' }}>
				<div className={classes.colors}>
					{colors.map((color) => (
						<div className={classes.miniBox} style={{ backgroundColor: color.color }} key={color.name} />
					))}
				</div>
				<h5 className={classes.title}>
					{paletteName} <span className={classes.emoji}>{emoji}</span>
				</h5>
			</Link>
			<DeletePaletteDialog open={deleteModal} toggle={setDeleteModal} deletePalette={deletePalette} id={id}/>
		</div>
	);
});
