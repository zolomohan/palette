import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import './ColorBox.css'

export default class ColorBox extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       copied: false
    }
	}
	
	handleCopy = () => {
		this.setState({copied: true}, ()=>{
			setTimeout(() => this.setState({copied: false}), 1500)
		})
	}
  
  render() {
		const color = this.props[this.props.format];
		console.log(color)
    return (
      <div className='ColorBox' style={{backgroundColor: color}}>
        <div className={`copy-overlay ${this.state.copied && 'show'}`} style={{backgroundColor: color}} ></div>
				<div className={`copy-message ${this.state.copied && 'show'}`}>
					<h1>copied!</h1>
					<p>{color}</p>
				</div>
        <span className='color-name'>{this.props.name}</span>
        <CopyToClipboard text = {color} onCopy={this.handleCopy}>
          <button className='copy-button'>copy</button>
        </CopyToClipboard>
        <span className='see-more'>more</span>
      </div>
    )
  }
}