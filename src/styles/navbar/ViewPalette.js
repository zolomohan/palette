import media from 'helpers/mediaQuery';

export default {
	Navbar           : {
		height     : '6%',
		display    : 'flex',
		transition : '0.3s background linear'
	},
	NavbarBrand      : {
		letterSpacing      : '1px',
		display            : 'flex',
		justifyContent     : 'center',
		alignItems         : 'center',
		height             : '100%',
		minWidth           : '150px',
		width              : '10%',
		fontSize           : '24px',
		textAlign          : 'center',
		textTransform      : 'uppercase',
		transition         : '0.3s all linear',
		fontFamily         : 'Blinker, sans-serif',
		[media.down('xs')]: {
			display : (props) => !props.singleColorPalette && 'none'
		}
	},
	NavbarSlider     : {
		width              : '450px',
		display            : 'flex',
		alignItems         : 'center',
    transition         : '0.15s width linear',
		[media.down('sm')]: {
			width : '350px'
		},
		[media.down('xs')]: {
			width : '300px'
		}
	},
	NavbarSliderText : {
		transition         : '0.3s color linear',
		fontVariantNumeric : 'tabular-nums',
		fontFamily         : 'Blinker, sans-serif',
		margin             : '0 10px'
	},
	NavbarSelect     : {
		marginLeft  : 'auto',
		marginRight : '8px',
		marginTop   : '7px'
	},
	moreMenu         : {
		alignSelf   : 'center',
		marginRight : '0.5rem'
	}
};
