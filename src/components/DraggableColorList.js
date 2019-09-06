import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

export default SortableContainer(function DraggableColorList({ colors, dispatch }) {
	return (
		<div style={{ height: '100%' }}>
			{colors.map((color, index) => (
				<DraggableColorBox
					color={color}
					dispatch={dispatch}
					key={color.name}
					index={index}
				/>
			))}
		</div>
	);
});
