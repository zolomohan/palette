export default (length, media, singleColorShades) => {
	if (singleColorShades) {
		if (media === 'lg') return '33.33%';
		if (media === 'md') return '20%';
		if (media === 'xs') return '10%';
		return '50%';
	}
	if (media === 'xs') return `${100 / length}%`;
	if (media === 'md') return `${100 / (length % 2 === 0 ? length : length + 1) * 2}%`;
	if (media === 'lg') return `${100 / (length > 16 ? 5 : length > 12 ? 4 : length > 8 ? 3 : length > 4 ? 2 : 1)}%`;
	if (media === 'xl') return `${100 / (length > 15 ? 4 : length > 10 ? 3 : length > 5 ? 2 : 1)}%`;
};
