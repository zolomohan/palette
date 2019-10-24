import chromaContrast from 'helpers/chromaContrast';
import media from 'helpers/mediaQuery';

export default {
	colorBox  : {
		width              : '20%',
		height             : (props) => (props.singleColorPalette ? '50%' : '25%'),
		position           : 'relative',
		margin             : '0 auto',
		display            : 'inline-block',
		marginBottom       : '-4px',
		transition         : 'all 0.1s linear',
		backgroundColor    : (props) => props['hex'],
		'&:hover $button'  : {
			opacity : '1'
		},
		'&.goBack'         : {
			height             : '50%',
			backgroundColor    : '#222',
			'& $button'        : {
				color           : '#fff',
				backgroundColor : 'transparent'
			},
			[media.down('lg')]: {
				width  : '75%',
				height : '33.333%'
			},
			[media.down('md')]: {
				width  : '50%',
				height : '20%'
			},
			[media.down('xs')]: {
				width  : '100%',
				height : '10%'
			}
		},
		[media.down('lg')]: {
			width  : '25%',
			height : (props) => (props.singleColorPalette ? '33.3333%' : '20%')
		},
		[media.down('md')]: {
			width  : '50%',
			height : (props) => (props.singleColorPalette ? '20%' : '10%')
		},
		[media.down('xs')]: {
			width  : '100%',
			height : (props) => (props.singleColorPalette ? '10%' : '5%')
		}
	},

	button    : {
		fontFamily      : 'Blinker',
		cursor          : 'pointer',
		width           : '100px',
		height          : '30px',
		top             : '50%',
		left            : '50%',
		display         : 'inline-block',
		position        : 'absolute',
		marginLeft      : '-50px',
		marginTop       : '-15px',
		textAlign       : 'center',
		textTransform   : 'uppercase',
		border          : 'none',
		outline         : 'none',
		fontSize        : '1.1rem',
		transition      : '0.1s opacity linear',
		backgroundColor : (props) =>
			chromaContrast(props[props.format]) === '#000' ? '#0000001a' : '#ffffff33',
		color           : (props) => chromaContrast(props[props.format]),
		'&.copyButton'  : {
			opacity : 0
		}
	},

	colorName : {
		position      : 'absolute',
		left          : '0px',
		bottom        : '0px',
		letterSpacing : '1px',
		textTransform : 'uppercase',
		fontSize      : '12px',
		padding       : '10px',
		color         : (props) => chromaContrast(props[props.format])
	},

	seeMore   : {
		position        : 'absolute',
		bottom          : '0px',
		right           : '0px',
		backgroundColor : 'rgba(255, 255, 255, 0.2)',
		textTransform   : 'uppercase',
		textAlign       : 'center',
		lineHeight      : '30px',
		padding         : '0 8px',
		height          : '30px',
		border          : 'none',
		color           : (props) => chromaContrast(props[props.format])
	}
};
