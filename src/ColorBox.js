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
    const {color, name} = this.props;
    return (
      <div className='ColorBox' style={{backgroundColor: color}}>
        <div className={`copy-overlay ${this.state.copied && 'show'}`} style={{backgroundColor: color}} ></div>
				<div className={`copy-message ${this.state.copied && 'show'}`}>
					<h1>copied!</h1>
					<p>{this.props.color}</p>
				</div>
        <span className='color-name'>{name}</span>
        <CopyToClipboard text = {color} onCopy={this.handleCopy}>
          <button className='copy-button'>copy</button>
        </CopyToClipboard>
        <span className='see-more'>more</span>
      </div>
    )
  }
}