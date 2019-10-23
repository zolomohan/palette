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
		transform      : 'scale(0.1)',
		visibility     : 'hidden',
		'& h1'         : {
			backgroundColor    : (props) =>
				chromaContrast(props[props.format]) === '#000'
					? 'rgba(0,0,0,0.1)'
					: 'rgba(255,255,255,0.2)',
			textShadow         : '1px 2px rgba(102, 102, 102, 0.603)',
			textTransform      : 'uppercase',
			fontWeight         : '400',
			width              : '100%',
			textAlign          : 'center',
			[media.down('xs')]: {
				fontSize : '6rem'
			}
		},
		'& p'          : {
			fontSize : '2rem'
		}
	},

	showMessage : {
		visibility      : 'visible',
		transform       : 'scale(1)',
		zIndex          : '2',
		transition      : 'all 0.4s ease-in-out',
		transitionDelay : '0.1s'
	},

	copyText    : {
		color : (props) =>
			chromaContrast(props[props.format]) === '#000' ? '#232323	' : '#fff'
	}
};
