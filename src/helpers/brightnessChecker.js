import chroma from 'chroma-js';

const isLightColor = (color) => (color === undefined ? '#fff' : chroma(color).luminance() <= 0.1 ? '#fff' : '#000');
const isDarkColor = (color) => (color === undefined ? '#fff' : chroma(color).luminance() <= 0.5 ? '#fff' : '#000');

export {isLightColor, isDarkColor};