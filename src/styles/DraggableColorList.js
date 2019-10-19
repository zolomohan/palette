import { DRAWER_WIDTH } from 'helpers/constants';

export default (theme) => ({
	contentHeader                    : {
		...theme.mixins.toolbar
	},
	content                          : {
		fontFamily : 'Blinker',
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
