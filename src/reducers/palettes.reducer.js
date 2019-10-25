export default (state, action) => {
	switch (action.type) {
		case 'ADD':
			return [ ...state, action.palette ];
		case 'EDIT':
			return state.map((palette) => ({
				...palette,
				colors : palette.id === action.paletteId ? action.colors : palette.colors
			}));
		case 'RENAME':
			return state.map(
				(palette) =>
					palette.id === action.id
						? {
								...palette,
								emoji       : action.emoji,
								id          : action.newId,
								paletteName : action.newName
							}
						: palette
			);
		case 'DELETE':
			return state.filter((palette) => palette.id !== action.id);
		default:
			return state;
	}
};
