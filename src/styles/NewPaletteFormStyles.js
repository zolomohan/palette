const drawerWidth = 300;

export default (theme) => ({
	root            : {
		display : 'flex'
	},
	drawer          : {
		width      : drawerWidth,
		flexShrink : 0
	},
	drawerPaper     : {
		width      : drawerWidth,
		display    : 'flex',
		alignItems : 'center'
	},
	drawerHeader    : {
		display        : 'flex',
		alignItems     : 'center',
		justifyContent : 'space-between',
		width          : '93%',
		...theme.mixins.toolbar,
		'& h5'         : {
			fontFamily : 'Blinker'
		}
	},
	drawerContainer : {
		width          : '90%',
		height         : '100%',
		display        : 'flex',
		flexDirection  : 'column',
		justifyContent : 'center',
		alignItems     : 'center'
	},
	drawerButtons   : {
		width  : '100%',
		margin : '1rem'
	},
	drawerButton    : {
		width     : '100%',
		marginTop : '0.5rem'
	},
	content         : {
		flexGrow   : 1,
		height     : 'calc(100vh - 64px)',
		transition : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen
		}),
		marginLeft : -drawerWidth
	},
	contentShift    : {
		transition : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		}),
		marginLeft : 0
	}
});
