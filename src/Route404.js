import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Route404.css';

export default function Route404() {
	return (
		<div className='Route404'>
			<h1>404</h1>
			<h2>There's Nothing Here</h2>
			<div className='Links'>
				<Link to='/palette/new'>Create Palette</Link>
				<Link to='/'>All Palettes</Link>
			</div>
		</div>
	);
}
