import chroma from 'chroma-js';
export default (color) =>
	color === undefined ? null : chroma.contrast(color, '#000') >= 4.5 ? true : false;
