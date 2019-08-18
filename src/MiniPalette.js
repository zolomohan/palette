import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import DeletePaletteDialog from './DeletePaletteDialog';
import styles from './styles/MiniPaletteStyles';

export default withStyles(styles)(
	class MiniPalette extends PureComponent {
		state = {
			deleteModal : false
		};

		setDeleteModal = (boolean) => this.setState({ deleteModal: boolean });

		render() {
			const { classes, paletteName, emoji, id, colors, deletePalette } = this.props;
			const { deleteModal } = this.state;
			return (
				<div className={classes.root}>
					<DeleteIcon className={classes.deleteIcon} onClick={() => this.setDeleteModal(true)} />
					<Link to={`palette/${id}`} style={{ textDecoration: 'none' }}>
						<div className={classes.colors}>
							{colors.map((color) => 
								<div className={classes.miniBox} style={{ backgroundColor: color.color }} key={color.name} />
							)}
						</div>
						<h5 className={classes.title}>
							{paletteName} <span className={classes.emoji}>{emoji}</span>
						</h5>
					</Link>
					<DeletePaletteDialog open={deleteModal} toggle={this.setDeleteModal} deletePalette={deletePalette} id={id} />
				</div>
			);
		}
	}
);
