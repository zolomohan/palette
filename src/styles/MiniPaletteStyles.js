export default {
	root    : {
		backgroundColor : 'white',
		borderRadius    : '5px',
		padding         : '0.5em',
		position        : 'realtive',
		overflow        : 'hidden',
		'&:hover'       : {
			cursor : 'pointer'
		}
	},
	colors  : {
		backgroundColor : '#dae1e4',
		height          : '150px',
		widthL          : '100%',
		borderRadius    : '5px',
		overflow        : 'hidden'
	},
	title   : {
		display        : 'flex',
		justifyContent : 'space-between',
		margin         : '0',
		color          : 'black',
		fontSize       : '1rem',
		paddingTop     : '0.5rem',
		position       : 'relative'
	},
	emoji   : {
		margin   : '0 auto',
		fontSize : '1.1rem'
	},
	miniBox : {
		display      : 'inline-block',
		height       : '25%',
		width        : '20%',
		position     : 'relative',
		margin       : '0 auto',
		marginBottom : '-4px'
	}
};
