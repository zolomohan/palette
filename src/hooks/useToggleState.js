import { useState } from 'react';
export default (initialState = false) => {
	const [ state, setState ] = useState(initialState);
	return [ state, () => setState(!state), setState ];
};
