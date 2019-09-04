import { useState, useEffect } from 'react';
export default (key, initialState = []) => {
	const [ state, setState ] = useState(JSON.parse(window.localStorage.getItem(key)) || initialState);
	useEffect(() => window.localStorage.setItem(key, JSON.stringify(state)), [ state, key ]);
	return [ state, setState ];
};