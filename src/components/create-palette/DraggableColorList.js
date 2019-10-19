import { withStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from 'components/create-palette/DraggableColorBox';
import { ColorContext } from 'contexts/color.context';
import styles from 'styles/DraggableColorList';

function DraggableColorList({
	drawerOpen,
	classes: {
		contentHeader,
		content,
		contentShift,
		emptyPalettePlaceholder,
		emptyPalettePlaceholderContainer
	}
}) {
	const colors = useContext(ColorContext);
	return (
		<main className={`${content} ${drawerOpen && contentShift}`}>
			<div className={contentHeader} />
			{colors.length > 0 ? (
				<div style={{ height: '100%' }}>
					{colors.map((color, index) => (
						<DraggableColorBox color={color} key={color.name} index={index} />
					))}
				</div>
			) : (
				<div className={emptyPalettePlaceholderContainer}>
					<Typography className={emptyPalettePlaceholder}>
						Add Colors +
					</Typography>
				</div>
			)}
		</main>
	);
}

export default withStyles(styles)(SortableContainer(DraggableColorList));
