import background from './bg.svg';
import sizes from '../helpers/sizes';

export default {
	'@global':{
		'.fade-exit': {
			opacity: 1
		},
		'.fade-exit-active': {
			opacity: 0,
			transition: 'all 500ms linear'
		}
	},
	root      : {
		backgroundColor : '#3f3383',
		backgroundImage : `url(${background})`,
		backgroundSize  : 'cover',
		display         : 'flex',
		justifyContent  : 'center',
		alignItems      : 'flex-start',
		height          : '100vh',
		overflowY       : 'scroll'
	},
	container : {
		width              : '60%',
		display            : 'flex',
		alignItems         : 'flex-start',
		flexDirection      : 'column',
		flexWrap           : 'wrap',
		color              : 'white',
		transition         : '0.2s width linear',
		[sizes.down('lg')]: {
			width : '80%'
		},
		[sizes.down('md')]: {
			width : '70%'
		},
		[sizes.down('sm')]: {
			width : '80%'
		}
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
			textDecoration : 'none',
			color          : 'white',
			'&:hover'      : {
				color : '#dddddd'
			}
		},
		'& h1'         : {
			fontWeight : '200'
		}
	},
	palettes  : {
		display             : 'grid',
		boxSizing           : 'border-box',
		gridTemplateColumns : 'repeat(3, 30%)',
		gridGap             : '3rem',
		width               : '100%',
		paddingBottom: '5%',
		[sizes.down('md')]: {
			gridTemplateColumns : 'repeat(2, 50%)'
		},
		[sizes.down('sm')]: {
			gridTemplateColumns : 'repeat(2, 50%)',
			gridGap             : '2rem'
		},
		[sizes.down('xs')]: {
			gridTemplateColumns : 'repeat(1, 100%)',
			gridGap             : '1.5rem',
			padding             : '10%',
			paddingTop: '2%'
		}
	}
};
