import { DRAWER_WIDTH } from 'helpers/constants';

export default (theme) => ({
	root        : {
		display : 'flex'
	},
	appBar      : {
		flexDirection  : 'row',
		justifyContent : 'space-between',
		alignItems     : 'center',
		paddingRight   : '1em',
		transition     : theme.transitions.create([ 'margin', 'width' ], {
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen
		})
	},
	appBarDark  : {
		background : '#222'
	},
	appBarShift : {
		width      : `calc(100% - ${DRAWER_WIDTH}px)`,
		marginLeft : DRAWER_WIDTH,
		transition : theme.transitions.create([ 'margin', 'width' ], {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		})
	},
	menuButton  : {
		marginLeft  : 12,
		marginRight : 12
	},
	title       : {
		fontFamily    : 'Blinker',
		textTransform : 'uppercase',
		letterSpacing : '1px'
	},
	hide        : {
		display : 'none'
	},
	navBtns     : {
		'& a' : {
			textDecoration : 'none'
		}
	}
});
