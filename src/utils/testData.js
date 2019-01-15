import React from 'react';

export const testCharacters = [
	{
		meta: { charId: 0, name: 'Neil', fullName: 'Neil Armstrong', isCpuControlled: false },
		attributes: { str: 2, fin: 2, per: 1, stm: 2, agi: 1, wil: 3, int: 1, cha: 3 },
		startingHex: { q: 2, r: 2, s: -4},
		mapRenderer: (pixelLoc) => <rect x={pixelLoc.x-3.5} y={pixelLoc.y-7} className={'mapCharacter neilArm'}></rect>,
		portraitRenderer: (<rect className={'characterPortrait'}></rect>)
	},{
		meta: { charId: 1, name: 'Buzz', fullName: 'Buzz Aldrin', isCpuControlled: false },
		attributes: { str: 1, fin: 2, per: 1, stm: 1, agi: 2, wil: 2, int: 3, cha: 2 },
		startingHex: { q: 1, r: 3, s: -4},
		mapRenderer: (pixelLoc) => <circle cx={pixelLoc.x} cy={pixelLoc.y} className={'mapCharacter buzzAld'}></circle>,
		portraitRenderer: (<rect className={'characterPortrait'}></rect>)
	},{
		meta: { charId: 2, name: 'Monolith', fullName: 'Monolith', isCpuControlled: true },
		attributes: { str: 1, fin: 1, per: 1, stm: 1, agi: -1, wil: 1, int: 1, cha: 1 },
		startingHex: { q: 9, r: 5, s: -14},
		mapRenderer: (pixelLoc) => <rect x={pixelLoc.x-7} y={pixelLoc.y-22} className={'mapCharacter monolith'}></rect>,
		portraitRenderer: (<rect className={'characterPortrait'}></rect>)
	},{
		meta: { charId: 3, name: 'Mike', fullName: 'Michael Collins', isCpuControlled: false },
		attributes: { str: 1, fin: 1, per: 3, stm: 2, agi: 2, wil: 1, int: 2, cha: 1 },
		startingHex: { q: 1, r: 1, s: -2},
		mapRenderer: (pixelLoc) => <rect x={pixelLoc.x-3.6} y={pixelLoc.y-6} className={'mapCharacter mikeColl'}></rect>,
		portraitRenderer: (<rect className={'characterPortrait'}></rect>)
	},{
		meta: { charId: 4, name: 'Capcom', fullName: 'Capsule Command', isCpuControlled: true },
		attributes: { str: 0, fin: 0, per: 3, stm: 0, agi: -1, wil: 2, int: 3, cha: 1 },
		startingHex: { q: 0, r: 0, s: 0},
		mapRenderer: (pixelLoc) => <rect x={pixelLoc.x} y={pixelLoc.y} className={'mapCharacter capcom'}></rect>,
		portraitRenderer: (<rect className={'characterPortrait'}></rect>)
	}
];