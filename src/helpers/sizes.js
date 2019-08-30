import { MEDIA_BREAKPOINTS } from './constants';

export default {
	up   : (size) => `@media(min-width:${MEDIA_BREAKPOINTS[size]})`,
	down : (size) => `@media(max-width:${MEDIA_BREAKPOINTS[size]})`
};
