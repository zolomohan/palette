import chromaContrast from 'helpers/chromaContrast';
import media from 'helpers/mediaQuery';

const colorBoxHeight = (length, media, singleColorShades) => {
	if (singleColorShades) {
		if (media === 'lg') return '33.33%';
		if (media === 'md') return '20%';
		if (media === 'xs') return '10%';
		return '50%';
	}
	if (media === 'xs') return `${100 / length}%`;
	if (media === 'md') return `${100 / (length % 2 === 0 ? length : length + 1) * 2}%`;
	if (media === 'lg')
		return `${100 /
			(length > 16 ? 5 : length > 12 ? 4 : length > 8 ? 3 : length > 4 ? 2 : 1)}%`;
	if (media === 'xl')
		return `${100 / (length > 15 ? 4 : length > 10 ? 3 : length > 5 ? 2 : 1)}%`;
};

export default {
	colorBox  : {
		position              : 'relative',
		display               : 'inline-block',
		marginBottom          : '-4px',
		width                 : '20%',
		height                : (props) =>
			colorBoxHeight(props.colorsLength, 'xl', props.singleColorShades),
		backgroundColor       : (props) => (props.goBackBox ? '#222' : props['hex']),
		transition            : 'all 0.1s linear',
		'&:hover .copyButton' : {
			opacity    : '1',
			transition : '0.1s opacity linear'
		},
		[media.down('lg')]: {
			width  : (props) => (props.goBackBox ? '75%' : '25%'),
			height : (props) =>
				colorBoxHeight(props.colorsLength, 'lg', props.singleColorShades)
		},
		[media.down('md')]: {
			width  : () => '50%',
			height : (props) =>
				colorBoxHeight(props.colorsLength, 'md', props.singleColorShades)
		},
		[media.down('xs')]: {
			width  : () => '100%',
			height : (props) =>
				colorBoxHeight(props.colorsLength, 'xs', props.singleColorShades)
		}
	},

	button    : {
		display         : 'inline-block',
		position        : 'absolute',
		fontFamily      : 'Blinker',
		cursor          : 'pointer',
		width           : '100px',
		height          : '30px',
		top             : '50%',
		left            : '50%',
		marginLeft      : '-50px',
		marginTop       : '-15px',
		textAlign       : 'center',
		border          : 'none',
		outline         : 'none',
		fontSize        : '1.1rem',
		color           : 'white',
		textTransform   : 'uppercase',
		backgroundColor : (props) =>
			props.goBackBox
				? 'transparent'
				: chromaContrast(props['hex']) ? '#0000001a' : '#ffffff33',
		'&.copyButton'  : {
			opacity : 0
		}
	},

	colorName : {
		position      : 'absolute',
		textTransform : 'uppercase',
		left          : '0px',
		bottom        : '0px',
		letterSpacing : '1px',
		fontSize      : '12px',
		padding       : '10px'
	},

	seeMore   : {
		position        : 'absolute',
		bottom          : '0px',
		right           : '0px',
		backgroundColor : '#ffffff33',
		textTransform   : 'uppercase',
		textAlign       : 'center',
		lineHeight      : '30px',
		padding         : '0 8px',
		height          : '30px',
		border          : 'none'
	},

	text      : {
		color : (props) => (chromaContrast(props['hex']) ? '#000' : '#fff')
	}
};
