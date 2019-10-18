import { DRAWER_WIDTH } from 'helpers/constants';

export default (theme) => ({
	root                             : {
		display    : 'flex',
		fontFamily : 'Blinker'
	},
	drawer                           : {
		width      : DRAWER_WIDTH,
		flexShrink : 0
	},
	drawerPaper                      : {
		width      : DRAWER_WIDTH,
		display    : 'flex',
		alignItems : 'center'
	},
	drawerHeader                     : {
		display        : 'flex',
		alignItems     : 'center',
		justifyContent : 'space-between',
		width          : '93%',
		...theme.mixins.toolbar,
		'& h5'         : {
			fontFamily : 'Blinker'
		}
	},
	drawerContainer                  : {
		width          : '90%',
		height         : '100%',
		display        : 'flex',
		flexDirection  : 'column',
		justifyContent : 'center',
		alignItems     : 'center'
	},
	drawerButtons                    : {
		width  : '100%',
		margin : '1rem'
	},
	drawerButton                     : {
		width     : '100%',
		marginTop : '0.5rem'
	},
	content                          : {
		flexGrow   : 1,
		height     : 'calc(100vh - 64px)',
		transition : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen
		}),
		marginLeft : -DRAWER_WIDTH
	},
	contentShift                     : {
		transition : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		}),
		marginLeft : 0
	},
	emptyPalettePlaceholderContainer : {
		height         : '90%',
		display        : 'flex',
		alignItems     : 'center',
		justifyContent : 'center'
	},
	emptyPalettePlaceholder          : {
		alignSelf  : 'center',
		fontSize   : '5rem',
		opacity    : '0.2',
		fontFamily : 'Blinker',
		fontWeight : '200',
		userSelect : 'none'
	}
});
