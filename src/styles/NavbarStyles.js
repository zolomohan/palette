import media from '../helpers/mediaQuery';
import { DRAWER_WIDTH } from '../helpers/constants';

export default (theme) => ({
	root             : {
		display : 'flex'
	},
	appBar           : {
		flexDirection  : 'row',
		justifyContent : 'space-between',
		alignItems     : 'center',
		paddingRight   : '1em',
		transition     : theme.transitions.create([ 'margin', 'width' ], {
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen
		})
	},
	appBarShift      : {
		width      : `calc(100% - ${DRAWER_WIDTH}px)`,
		marginLeft : DRAWER_WIDTH,
		transition : theme.transitions.create([ 'margin', 'width' ], {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		})
	},
	menuButton       : {
		marginLeft  : 12,
		marginRight : 12
	},
	title            : {
		fontFamily    : 'Blinker',
		textTransform : 'uppercase',
		letterSpacing : '1px'
	},
	hide             : {
		display : 'none'
	},
	navBtns          : {
		'& a' : {
			textDecoration : 'none'
		}
	},
	Navbar           : {
		height  : '6%',
		display : 'flex'
	},
	NavbarBrand      : {
		display            : 'flex',
		justifyContent     : 'center',
		alignItems         : 'center',
		height             : '100%',
		minWidth           : '150px',
		width              : '10%',
		fontFamily         : 'Blinker, sans-serif',
		fontSize           : '24px',
		textTransform      : 'uppercase',
		textAlign          : 'center',
		letterSpacing      : '1px',
		backgroundColor    : '#e7e7e7',
		color              : '#525252',
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
		fontVariantNumeric : 'tabular-nums',
		fontFamily         : 'Blinker, sans-serif',
		margin             : '0 10px'
	},

	NavbarSelect     : {
		marginLeft  : 'auto',
		marginRight : '8px',
		marginTop   : '7px'
	}
});
