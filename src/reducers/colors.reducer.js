import arrayMove from 'array-move';

export default (state, action) => {
	switch (action.type) {
		case 'ADD':
			return [ ...state, action.color ];
		case 'DELETE':
			return state.filter((color) => color.color !== action.color);
		case 'CLEAR':
			return [];
		case 'SORT':
			return arrayMove(state, action.oldIndex, action.newIndex);
		default:
			return state;
	}
};
