import React from 'react';

export default function MiniBox(props) {
	return (
		<div
			style={{
				display         : 'inline-block',
				height          : '25%',
				width           : '20%',
				marginBottom    : '-4px',
				backgroundColor : props.color
			}}
		/>
	);
}
