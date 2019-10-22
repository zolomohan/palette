export default {
	root       : {
		cursor                 : 'pointer',
		position               : 'relative',
		overflow               : 'hidden',
		padding                : '0.5em',
		backgroundColor        : 'white',
		borderRadius           : '5px',
		transition             : 'transform 0.1s ease-out',
		color                  : '#525252',
		'&:hover $deleteIcon	' : {
			opacity : '1'
		},
		'&:hover'              : {
      transform : 'scale(1.02)',
      boxShadow: '-1px 11px 17px 0px rgba(0,0,0,0.2)'
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
		paddingTop     : '0.5rem'
	},
	emoji      : {
		marginLeft : '0.5rem',
		fontSize   : '1.2srem'
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
		'&:hover'              : {
			backgroundColor : '#ed3d30'
		}
	}
};
