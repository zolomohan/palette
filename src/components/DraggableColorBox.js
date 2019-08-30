import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../styles/DraggableColorBoxStyles';

export default SortableElement(
	withStyles(styles)(
		class DraggableColorBox extends PureComponent {
			handleDeleteColor = () => {
				this.props.deleteColor(this.props.color);
			};

			render() {
				const { root, boxContent, deleteIcon, colorName } = this.props.classes;
				return (
					<div className={root}>
						<div className={boxContent}>
							<span className={colorName}>{this.props.color.name}</span>
							<DeleteIcon className={deleteIcon} onClick={this.handleDeleteColor} />
						</div>
					</div>
				);
			}
		}
	)
);
