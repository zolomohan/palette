import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Palette.css'

export default class Palette extends Component {
  render() {
    return (
      <div className='Palette'>
				{/* Navbar */}
				<div className='Palette-colors'>
					{this.props.colors.map(color => <ColorBox {...color} />)}
				</div>
        {/* Footer */}
      </div>
    )
  }
}
