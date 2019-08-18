import React from 'react'
import './styles/Page.css'

export default function Page(props) {
	return (
		<section className='Page'>
			{props.children}
		</section>
	)
}
