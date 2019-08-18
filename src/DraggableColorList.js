import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

export default SortableContainer(function DraggableColorList({ colors, deleteColor }) {
	return (
		<div style={{ height: '100%' }}>
			{colors.map((color, index) => (
				<DraggableColorBox color={color} deleteColor={deleteColor} key={color.name} index={index} />
			))}
		</div>
	);
});
