import chromaContrast from '../helpers/chromaContrast';
import sizes from '../helpers/sizes';

export default {
	root       : {
		width              : '20%',
		height             : '25%',
		position           : 'relative',
		margin             : '0 auto',
		display            : 'inline-block',
		marginBottom       : '-6px',
		cursor             : 'pointer',
		backgroundColor    : (props) => props.color.color,
		'&:hover'          : {
			cursor : 'move'
		},
		[sizes.down('lg')]: {
			height : '20%',
			width  : '25%'
		},
		[sizes.down('md')]: {
			height : '10%',
			width  : '50%'
		},
		[sizes.down('sm')]: {
			height : '5%',
			width  : '100%'
		}
	},
	boxContent : {
		position       : 'absolute',
		width          : '100%',
		left           : '0',
		bottom         : '0',
		letterSpacing  : '1px',
		textTransform  : 'uppercase',
		fontSize       : '12px',
		padding        : '10px',
		color          : (props) => chromaContrast(props.color.color),
		display        : 'flex',
		justifyContent : 'space-between',
		alignItems     : 'flex-end'
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
