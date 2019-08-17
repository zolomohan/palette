export default {
	root       : {
		cursor                 : 'pointer',
		position               : 'relative',
		overflow               : 'hidden',
		padding                : '0.5em',
		backgroundColor        : 'white',
		borderRadius           : '5px',
		'&:hover $deleteIcon	' : {
			opacity : '1'
		}
	},
	colors     : {
		overflow        : 'hidden',
		height          : '150px',
		width           : '100%',
		borderRadius    : '5px',
		backgroundColor : '#dae1e4'
	},
	title      : {
		display        : 'flex',
		justifyContent : 'space-between',
		alignItems     : 'center',
		fontFamily     : 'Blinker',
		fontWeight     : '400',
		fontSize       : '1.1rem',
		color          : '#525252',
		letterSpacing  : '0.5px',
		margin         : '0',
		paddingTop     : '0.5rem',
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
		marginBottom : '-4px'
	},
	deleteIcon : {
		position               : 'absolute',
		top                    : '0px',
		right                  : '0px',
		height                 : '20px',
		width                  : '20px',
		background             : '#ed3d30cc',
		borderBottomLeftRadius : '10px',
		color                  : 'white',
		padding                : '10px',
		zIndex                 : '1',
		opacity                : '0',
		transition             : '0.2s all linear',
		'&:hover': {
			backgroundColor: '#ed3d30'
		}

	}
};
