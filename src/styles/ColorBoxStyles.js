import {isLightColor, isDarkColor} from '../helpers/brightnessChecker';

export default {
	ColorBox    : {
		width             : '20%',
		height            : (props) => (props.singleColorPalette ? '50%' : '25%'),
		position          : 'relative',
		margin            : '0 auto',
		display           : 'inline-block',
		marginBottom      : '-4px',
		transition        : 'all 0.1s linear',
		backgroundColor   : (props) => props[props.format],
		'&:hover $button' : {
			opacity : '1'
		},
		'&.goBack'        : {
			height          : '50%',
			backgroundColor : '#000'
		}
	},

	copyOverlay : {
		opacity         : '0',
		zIndex          : '0',
		height          : '100%',
		width           : '100%',
		transition      : '0.7s transform linear',
		transform       : 'scale(0.1)',
		backgroundColor : (props) => props[props.format]
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
		opacity        : '0',
		'& h1'         : {
			backgroundColor : 'rgba(255, 255, 255, 0.3)',
			textShadow      : '1px 2px rgba(102, 102, 102, 0.603)',
			textTransform   : 'uppercase',
			fontWeight      : '400',
			width           : '100%',
			textAlign       : 'center'
		},
		'& p'          : {
			fontSize : '2rem'
		}
	},

	showMessage : {
		opacity         : '1',
		transform       : 'scale(1)',
		zIndex          : '2',
		transition      : 'all 0.4s ease-in-out',
		transitionDelay : '0.1s'
	},

	button      : {
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
		background      : 'none',
		border          : 'none',
		backgroundColor : 'rgba(255, 255, 255, 0.3)',
		outline         : 'none',
		fontSize        : '1rem',
		lineHeight      : '30px',
		transition      : '0.1s opacity linear',
		color           : (props) => isDarkColor(props[props.format]),
		'&.copyButton'  : {
			opacity : 0
		}
	},

	colorName   : {
		position      : 'absolute',
		left          : '0px',
		bottom        : '0px',
		letterSpacing : '1px',
		textTransform : 'uppercase',
		fontSize      : '12px',
		padding       : '10px',
		color         : (props) => isLightColor(props[props.format])
	},

	seeMore     : {
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
		color           : (props) => isDarkColor(props[props.format])
	},

	copyText    : {
		color : (props) => isDarkColor(props[props.format])
	}
};
