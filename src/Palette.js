import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import './Palette.css'

export default class Palette extends Component {

	constructor(props) {
		super();
		this.state = { level: 400 }
	}
	
	changeLevel = (level) => {this.setState({level})}

  render() {
    return (
      <div className='Palette'>
				<Navbar changeLevel = { this.changeLevel } level = { this.state.level } />
				<div className='Palette-colors'>
					{this.props.colors[this.state.level].map(color => <ColorBox {...color} />)}
				</div>
        {/* Footer */}
      </div>
    )
  }
}
