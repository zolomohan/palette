
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Page.css';

export default function Page(props) {
	if (props.variant === '404')
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
	return <section className='Page'>{props.children}</section>;
}
