export default {
	root       : {
		cursor                 : 'pointer',
		position               : 'relative',
		overflow               : 'hidden',
		padding                : '0.5em',
		borderRadius           : '5px',
		transition             : 'transform 0.1s ease-out',
		backgroundColor        : '#f6f7fb',
		'&:hover $deleteIcon	' : {
			opacity : '1'
		},
		'&:hover'              : {
			transform : 'scale(1.02)',
			boxShadow : '-1px 11px 17px 0px #0000002a'
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
		alignItems     : 'center',
		justifyContent : 'space-between',
		fontFamily     : 'Blinker',
		fontWeight     : '400',
		fontSize       : '1.05rem',
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
