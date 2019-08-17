export default {
	up(size){
		const breakpoints = {
			xs: '575.98px',
			sm: '767.98px',
			md: '991.98px',
			lg: '1199.98px'
		}
		return `@media(min-width:${breakpoints[size]})`		
	},
	down(size){
		const breakpoints = {
			xs: '575.98px',
			sm: '767.98px',
			md: '991.98px',
			lg: '1199.98px'
		}
		return `@media(max-width:${breakpoints[size]})`
	}
}