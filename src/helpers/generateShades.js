import chroma from 'chroma-js';

const levels = [ 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 ];

const getRange = (hexColor) => [ chroma(hexColor).darken(1.4), hexColor, '#fff' ],
			getScale = (hexColor, numberOfColors) =>
				chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);

export default (starterPalette) => {
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
};

export function singleColorShades(colors, colorId){
  let shades = [];
	for (let shade in colors)
		shades.push(colors[shade].filter((color) => color.id === colorId)[0]);
  shades = shades.slice(1);
  return shades;
}