import chromaContrast from 'helpers/chromaContrast';
import media from 'helpers/mediaQuery';

export default {
	copyOverlay : {
		opacity            : '0',
		zIndex             : '0',
		height             : '100%',
		width              : '100%',
		transition         : '0.7s transform linear',
		transform          : 'scale(0.1)',
		backgroundColor    : (props) => props.color,
		[media.down('sm')]: {
			transition : '0.2s transform linear'
		}
	},

	showOverlay : {
		zIndex    : '1',
		opacity   : '1',
		transform : 'scale(50)',
		position  : 'absolute'
	},

	copyMessage : {
		position       : 'fixed',
		top            : '0',
		bottom         : '0',
		left           : '0',
		right          : '0',
		display        : 'flex',
		justifyContent : 'center',
		alignItems     : 'center',
		flexDirection  : 'column',
		fontSize       : '4rem',
		color          : '#fff',
		visibility     : 'hidden',
		transform      : 'scale(0.1)',
		'& h1'         : {
			fontWeight         : '400',
			width              : '100%',
			textAlign          : 'center',
			textTransform      : 'uppercase',
			textShadow         : '1px 2px #6666669a',
			backgroundColor    : (props) =>
				chromaContrast(props.color) === '#000' ? '#0000001a' : '#ffffff33',
			[media.down('xs')]: {
				fontSize : '6rem'
			}
		},
		'& p'          : {
			fontSize : '2rem'
		}
	},

	showMessage : {
		zIndex          : '2',
		transitionDelay : '0.1s',
		transform       : 'scale(1)',
		visibility      : 'visible',
		transition      : 'all 0.4s ease-in-out'
	},

	copyText    : {
		color : (props) => (chromaContrast(props.color) === '#000' ? '#232323	' : '#fff')
	}
};
