import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/Page.css';

export default function Page({ variant, children }) {
	if (variant === '404')
		return (
			<div className='Route404'>
				<h1>404</h1>
				<h2>There's Nothing Here</h2>
				<div className='Links'>
					<Link to={`${process.env.PUBLIC_URL}/palette/new`}>
						Create Palette
					</Link>
					<Link to={`${process.env.PUBLIC_URL}/`}>All Palettes</Link>
				</div>
			</div>
		);
	return <section className='Page'>{children}</section>;
}
