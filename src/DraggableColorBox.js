import React from 'react'
import { withStyles } from '@material-ui/core/styles';


const styles = {
	root:{
		width             : '20%',
		height            : '25%',
		position          : 'relative',
		margin            : '0 auto',
		display           : 'inline-block',
		marginBottom      : '-4px',
		transition        : 'all 0.1s linear',
		backgroundColor   : (props) => props.color,
	}
}

export default withStyles(styles)(
	function DraggableColorBox(props) {
	return (
		<div className={props.classes.root}>
			{props.color}
		</div>
	)
})
