import chromaContrast from 'helpers/chromaContrast';
import media from 'helpers/mediaQuery';

export default {
	colorBox  : {
		position              : 'relative',
		display               : 'inline-block',
		marginBottom          : '-4px',
		width                 : '20%',
		height                : (props) => (props.singleColorShades ? '50%' : '25%'),
		backgroundColor       : (props) => (props.goBackBox ? '#222' : props['hex']),
		transition            : 'all 0.1s linear',
		'&:hover .copyButton' : {
			opacity    : '1',
			transition : '0.1s opacity linear'
		},
		[media.down('lg')]: {
			width  : (props) => (props.goBackBox ? '75%' : '25%'),
			height : (props) => (props.singleColorShades ? '33.3333%' : '20%')
		},
		[media.down('md')]: {
			width  : () => '50%',
			height : (props) => (props.singleColorShades ? '20%' : '10%')
		},
		[media.down('xs')]: {
			width  : () => '100%',
			height : (props) => (props.singleColorShades ? '10%' : '5%')
		}
	},

	button    : {
		display         : 'inline-block',
		position        : 'absolute',
		fontFamily      : 'Blinker',
		cursor          : 'pointer',
		width           : '100px',
		height          : '30px',
		top             : '50%',
		left            : '50%',
		marginLeft      : '-50px',
		marginTop       : '-15px',
		textAlign       : 'center',
		border          : 'none',
		outline         : 'none',
		fontSize        : '1.1rem',
		color           : 'white',
		textTransform   : 'uppercase',
		backgroundColor : (props) =>
			props.goBackBox
				? 'transparent'
				: chromaContrast(props['hex'])  ? '#0000001a' : '#ffffff33',
		'&.copyButton'  : {
			opacity : 0
		}
	},

	colorName : {
		position      : 'absolute',
		textTransform : 'uppercase',
		left          : '0px',
		bottom        : '0px',
		letterSpacing : '1px',
		fontSize      : '12px',
		padding       : '10px'
	},

	seeMore   : {
		position        : 'absolute',
		bottom          : '0px',
		right           : '0px',
		backgroundColor : '#ffffff33',
		textTransform   : 'uppercase',
		textAlign       : 'center',
		lineHeight      : '30px',
		padding         : '0 8px',
		height          : '30px',
		border          : 'none'
	},

	text      : {
		color : (props) => chromaContrast(props['hex']) ? '#000' : '#fff'
	}
};
