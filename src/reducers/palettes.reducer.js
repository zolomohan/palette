export default (state, action) => {
	switch(action.type) {
		case 'ADD':
			return [ ...state, action.palette ];
		case 'DELETE':
			return state.filter((palette) => palette.id !== action.id);
		default: 
			return state;
	}
}