import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import './ColorBox.css'

export default class ColorBox extends Component {
  render() {
		const {color, name} = this.props;
		return (
			<div className='ColorBox' style={{backgroundColor: color}}>
				<span className='color-name'>{name}</span>
				<CopyToClipboard text = {color}>
					<button className='copy-button'>copy</button>
				</CopyToClipboard>
				<span className='see-more'>more</span>
			</div>
		)
  }
}