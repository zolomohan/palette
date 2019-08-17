import background from './bg.svg'
export default {
	root      : {
		backgroundColor: '#3f3383',
		backgroundImage: `url(${background})`,
		backgroundSize: 'cover',
		display         : 'flex',
		justifyContent  : 'center',
		alignItems      : 'flex-start',
		height          : '100vh',
		overflowY: 'scroll',
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
		justifyContent : 'space-between',
		alignItems     : 'center',
		fontFamily     : 'Blinker',
		letterSpacing  : '1px',
		textTransform  : 'uppercase',
		'& a'          : {
			color : 'white'
		},
		'& h1'         : {
			fontWeight : '200'
		}
	},
	palettes  : {
		display             : 'grid',
		boxSizing           : 'border-box',
		gridTemplateColumns : 'repeat(3, 30%)',
		gridGap             : '5%',
		width               : '100%'
	}
};
