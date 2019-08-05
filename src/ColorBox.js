import React, { Component } from 'react'
import './ColorBox.css'

export default class ColorBox extends Component {
  render() {
  return (
    <div className='ColorBox' style={{backgroundColor: this.props.color}}>
			<span className='color-name'>{this.props.name}</span>
			<button className='copy-button'>copy</button>
			<span className='see-more'>more</span>
    </div>
  )
  }
}
