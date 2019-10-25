import chromaContrast from 'helpers/chromaContrast';
import media from 'helpers/mediaQuery';

export default {
	root       : {
		width              : '20%',
		height             : '25%',
		cursor             : 'move',
		marginBottom       : '-6px',
		position           : 'relative',
		display            : 'inline-block',
		backgroundColor    : (props) => props.color.color,
		[media.down('lg')]: {
			height : '20%',
			width  : '25%'
		},
		[media.down('md')]: {
			height : '10%',
			width  : '50%'
		},
		[media.down('sm')]: {
			height : '5%',
			width  : '100%'
		}
	},
	boxContent : {
		display        : 'flex',
		alignItems     : 'flex-end',
		justifyContent : 'space-between',
		position       : 'absolute',
		left           : '0',
		bottom         : '0',
		letterSpacing  : '1px',
		width          : '100%',
		fontSize       : '12px',
		padding        : '10px',
		textTransform  : 'uppercase',
		color          : (props) => chromaContrast(props.color.color) ? '#000' : '#fff'
	},
	deleteIcon : {
		cursor     : 'pointer',
		transform  : 'scale(1)',
		transition : '0.1s transform linear',
		'&:hover'  : {
			transform : 'scale(1.2)'
		}
	}
};
