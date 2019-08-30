import { MEDIA_BREAKPOINTS } from './constants';

export default {
	up   : (breakpoint) => `@media(min-width:${MEDIA_BREAKPOINTS[breakpoint]})`,
	down : (breakpoint) => `@media(max-width:${MEDIA_BREAKPOINTS[breakpoint]})`
};
