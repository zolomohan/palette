import React from 'react';
import colorBoxHeight from 'helpers/colorBoxHeight';

export default function MiniBox(props) {
	return (
		<div
			style={{
				display         : 'inline-block',
				height          : colorBoxHeight(props.colorsLength, 'xl'),
				width           : '20%',
				marginBottom    : '-4px',
				backgroundColor : props.color
			}}
		/>
	);
}
