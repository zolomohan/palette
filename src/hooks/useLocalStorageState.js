import { useEffect, useReducer } from 'react';
export default (reducer, key, initialState = []) => {
	const [ state, dispatch ] = useReducer(
		reducer,
		JSON.parse(window.localStorage.getItem(key)) || initialState
	);
	useEffect(() => window.localStorage.setItem(key, JSON.stringify(state)), [
		state,
		key
	]);
	return [ state, dispatch ];
};
