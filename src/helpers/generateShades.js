import chroma from 'chroma-js';

const levels = [ 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 ];

const getRange = (hexColor) => [ chroma(hexColor).darken(1.4), hexColor, '#fff' ],
	    getScale = (hexColor, numberOfColors) => chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);

export function generatePalette(starterPalette) {
	let newPalette = {
		...starterPalette,
		colors : {}
	};
  for (let level of levels) newPalette.colors[level] = [];
	for (let color of starterPalette.colors) {
		let scale = getScale(color.color, levels.length).reverse();
		for (let i in scale)
			newPalette.colors[levels[i]].push({
				name : `${color.name} ${levels[i]}`,
				id   : color.name.toLowerCase().replace(/ /g, '-'),
				hex  : scale[i],
				rgb  : chroma(scale[i]).css(),
				rgba : chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
			});
	}
	return newPalette;
}

export function singleColorShades(levels, id) {
  let shades = [];
	for (let level in levels) shades.push(levels[level].filter((color) => color.id === id)[0]);
	return shades.slice(1);
}
