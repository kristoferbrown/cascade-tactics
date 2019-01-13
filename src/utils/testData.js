import React from 'react';

export const testCharacters = [
	{
		meta: { charId: 0, name: 'Neil', fullName: 'Neil Armstrong', isCpuControlled: false },
		attributes: { str: 2, fin: 2, per: 1, stm: 2, agi: 1, wil: 3, int: 1, cha: 3 },
		startingLocation: { q: 2, r: 2, s: -4},
		mapRenderer: (<rect className={'mapCharacter'}></rect>),
		portraitRenderer: (<rect className={'characterPortrait'}></rect>)
	},{
		meta: { charId: 1, name: 'Buzz', fullName: 'Buzz Aldrin', isCpuControlled: false },
		attributes: { str: 1, fin: 2, per: 1, stm: 1, agi: 2, wil: 2, int: 3, cha: 2 },
		startingLocation: { q: 1, r: 3, s: -4},
		mapRenderer: (<circle className={'mapCharacter'}></circle>),
		portraitRenderer: (<rect className={'characterPortrait'}></rect>)
	},{
		meta: { charId: 2, name: 'Monolith', fullName: 'Monolith', isCpuControlled: true },
		attributes: { str: 1, fin: 1, per: 1, stm: 1, agi: -1, wil: 1, int: 1, cha: 1 },
		startingLocation: { q: 9, r: 5, s: -14},
		mapRenderer: (<rect className={'mapCharacter'}></rect>),
		portraitRenderer: (<rect className={'characterPortrait'}></rect>)
	},{
		meta: { charId: 3, name: 'Mike', fullName: 'Michael Collins', isCpuControlled: false },
		attributes: { str: 1, fin: 1, per: 3, stm: 2, agi: 2, wil: 1, int: 2, cha: 1 },
		startingLocation: { q: 1, r: 1, s: -2},
		mapRenderer: (<rect className={'mapCharacter'}></rect>),
		portraitRenderer: (<rect className={'characterPortrait'}></rect>)
	},{
		meta: { charId: 4, name: 'Capcom', fullName: 'Capsule Command', isCpuControlled: true },
		attributes: { str: 0, fin: 0, per: 3, stm: 0, agi: -1, wil: 2, int: 3, cha: 1 },
		startingLocation: { q: 0, r: 0, s: 0},
		mapRenderer: (<rect className={'mapCharacter'}></rect>),
		portraitRenderer: (<rect className={'characterPortrait'}></rect>)
	}
];