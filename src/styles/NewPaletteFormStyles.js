const drawerWidth = 300;

export default (theme) => ({
	root         : {
		display : 'flex'
	},
	drawer       : {
		width      : drawerWidth,
		flexShrink : 0
	},
	drawerPaper  : {
		width : drawerWidth
	},
	drawerHeader : {
		display        : 'flex',
		alignItems     : 'center',
		padding        : '0 8px',
		...theme.mixins.toolbar,
		justifyContent : 'space-between',
		'& h5':{
			fontFamily: 'Blinker',
		}
	},
	content      : {
		flexGrow   : 1,
		height: 'calc(100vh - 64px)',
		padding    : theme.spacing(3),
		transition : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen
		}),
		marginLeft : -drawerWidth,
	},
	contentShift : {
		transition : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		}),
		marginLeft : 0
	}
});
