export default {
	root       : {
		backgroundColor : 'white',
		borderRadius    : '5px',
		padding         : '0.5em',
		position        : 'relative',
		overflow        : 'hidden',
		cursor          : 'pointer',
		'&:hover $deleteIcon	':{
			opacity: '1',
		}
	},
	colors     : {
		backgroundColor : '#dae1e4',
		height          : '150px',
		width           : '100%',
		borderRadius    : '5px',
		overflow        : 'hidden'
	},
	title      : {
		display        : 'flex',
		justifyContent : 'space-between',
		alignItems     : 'center',
		margin         : '0',
		color          : 'black',
		fontSize       : '1rem',
		paddingTop     : '0.5rem',
		position       : 'relative'
	},
	emoji      : {
		marginLeft : '0.5rem',
		fontSize   : '1.2srem'
	},
	miniBox    : {
		display      : 'inline-block',
		height       : '25%',
		width        : '20%',
		margin       : '0 auto',
		marginBottom : '-4px',
		position     : 'relative',
	},
	deleteIcon : {
		position   : 'absolute',
		top        : '0px',
		right      : '0px',
		height     : '20px',
		width      : '20px',
		background : '#ed3d30',
		color      : 'white',
		padding    : '10px',
		zIndex     : '1',
		opacity    : '0',
		transition: '0.2s all linear' 
	}
};
