import chroma from 'chroma-js';

const levels = [ 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 ];

let getRange = (hexColor) => [ chroma(hexColor).darken(1.4), hexColor, '#fff' ];

let getScale = (hexColor, numberOfColors) => chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);

function generatePalette(starterPalette) {
	let newPalette = {
		id: starterPalette.id,
		paletteName: starterPalette.paletteName,
		emoji: starterPalette.emoji,
		colors: {}
	};

	for (let level of levels) {
		newPalette.colors[level] = [];
	}

	for (let color of starterPalette.colors) {
		let scale = getScale(color.color, levels.length).reverse();
		for (let i in scale) {
			newPalette.colors[levels[i]].push({
				name: `${color.name} ${levels[i]}`,
				id: color.name.toLowerCase().replace(/ /g, '-'),
				hex: scale[i],
				rgb: chroma(scale[i]).css(),
				rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
			});
		}
	}
	console.log(newPalette)
	return newPalette;
}

export { generatePalette };
