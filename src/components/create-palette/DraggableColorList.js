import React, { useContext } from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from 'components/create-palette/DraggableColorBox';
import { ColorContext } from 'contexts/color.context';

export default SortableContainer(function DraggableColorList() {
	const colors = useContext(ColorContext);
	return (
		<div style={{ height: '100%' }}>
			{colors.map((color, index) => (
				<DraggableColorBox
					color={color}
					key={color.name}
					index={index}
				/>
			))}
		</div>
	);
});
