import media from 'helpers/mediaQuery';

export default {
	'@global' : {
		'.fade-exit'        : {
			opacity : 1
		},
		'.fade-exit-active' : {
			opacity    : 0,
			transition : 'all 500ms linear'
		}
	},
	root      : {
    backgroundSize : 'cover',
		display        : 'flex',
		justifyContent : 'center',
		alignItems     : 'flex-start',
		height         : '100%',
		overflowY      : 'scroll',
		transition     : '0.1s background linear',
	},
	container : {
		width              : '60%',
		display            : 'flex',
		alignItems         : 'flex-start',
		flexDirection      : 'column',
		flexWrap           : 'wrap',
		color              : 'white',
		transition         : '0.2s width linear',
		[media.down('lg')]: {
			width : '80%'
		},
		[media.down('md')]: {
			width : '70%'
		},
		[media.down('sm')]: {
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
			paddingLeft    : '1em',
			cursor         : 'pointer',
			'&:hover'      : {
				color : '#ddd'
			}
		},
		'& h1'         : {
			fontWeight : '100',
			fontSize   : '1.5rem'
		}
	},
	palettes  : {
		display             : 'grid',
		boxSizing           : 'border-box',
		gridTemplateColumns : 'repeat(3, 30%)',
		gridGap             : '3rem',
		width               : '100%',
		paddingBottom       : '5%',
		[media.down('md')]: {
			gridTemplateColumns : 'repeat(2, 50%)'
		},
		[media.down('sm')]: {
			gridTemplateColumns : 'repeat(2, 50%)',
			gridGap             : '2rem'
		},
		[media.down('xs')]: {
			gridTemplateColumns : 'repeat(1, 100%)',
			gridGap             : '1.5rem',
			padding             : '10%',
			paddingTop          : '2%'
		}
	}
};
