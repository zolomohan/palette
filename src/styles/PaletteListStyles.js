export default {
	root      : {
		backgroundColor : 'blue',
		display         : 'flex',
		justifyContent  : 'center',
		alignItems      : 'flex-start',
		height          : '100vh'
	},
	container : {
		width         : '60%',
		display       : 'flex',
		alignItems    : 'flex-start',
		flexDirection : 'column',
		flexWrap      : 'wrap',
		color         : 'white'
	},
	nav       : {
		display        : 'flex',
		width          : '100%',
		justifyContent : 'space-between'
	},
	palettes  : {
		display             : 'grid',
		boxSizing           : 'border-box',
		gridTemplateColumns : 'repeat(3, 30%)',
		gridGap             : '5%',
		width               : '100%'
	}
};
