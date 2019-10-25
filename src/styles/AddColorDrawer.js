import { DRAWER_WIDTH } from 'helpers/constants';

export default (theme) => ({
	drawer          : {
		width      : DRAWER_WIDTH,
		flexShrink : 0
	},
	drawerPaper     : {
		width           : DRAWER_WIDTH,
		display         : 'flex',
    alignItems      : 'center'
  },
  drawerPaperDark: {
    backgroundColor : '#222'
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
	}
});
