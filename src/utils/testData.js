import React from 'react';
import BuzzMapRenderer from '../svgs/buzzMapRenderer';
import LemMapRenderer from '../svgs/lemMapRenderer';
import MikeMapRenderer from '../svgs/mikeMapRenderer';
import MonoMapRenderer from '../svgs/monoMapRenderer';
import NeilMapRenderer from '../svgs/neilMapRenderer';

export const testCharacters = [
	{
		meta: { charId: 0, name: 'Neil', fullName: 'Neil Armstrong', isCpuControlled: false },
		attributes: { str: 2, fin: 2, per: 1, stm: 2, agi: 1, wil: 3, int: 1, cha: 3 },
		startingHex: { q: 2, r: 2, s: -4},
		mapOffset: {x: -50, y: -12},
		mapRenderer: (pixelLoc, isSelected) => <NeilMapRenderer isSelected={isSelected} height={15} className={'mapCharacter neilArm'} />,
		portraitRenderer: (<rect className={'characterPortrait'}></rect>)
	},{
		meta: { charId: 1, name: 'Buzz', fullName: 'Buzz Aldrin', isCpuControlled: false },
		attributes: { str: 1, fin: 2, per: 1, stm: 1, agi: 2, wil: 2, int: 3, cha: 2 },
		startingHex: { q: 1, r: 3, s: -4},
		mapOffset: {x: -50, y: -12},
		mapRenderer: (pixelLoc, isSelected)  => <BuzzMapRenderer isSelected={isSelected} height={15} className={'mapCharacter buzzAld'} />,
		portraitRenderer: (<rect className={'characterPortrait'}></rect>)
	},{
		meta: { charId: 2, name: 'Monolith', fullName: 'Monolith', isCpuControlled: true },
		attributes: { str: 1, fin: 1, per: 1, stm: 1, agi: -1, wil: 1, int: 1, cha: 1 },
		startingHex: { q: 9, r: 5, s: -14},
		mapOffset: {x: -51, y: -21},
		mapRenderer: (pixelLoc, isSelected)  => <MonoMapRenderer isSelected={isSelected} height={25} className={'mapCharacter monolith'} />,
		portraitRenderer: (<rect className={'characterPortrait'}></rect>)
	},{
		meta: { charId: 3, name: 'Mike', fullName: 'Michael Collins', isCpuControlled: false },
		attributes: { str: 1, fin: 1, per: 3, stm: 2, agi: 2, wil: 1, int: 2, cha: 1 },
		startingHex: { q: 1, r: 1, s: -2},
		mapOffset: {x: -50, y: -13},
		mapRenderer: (pixelLoc, isSelected) => <MikeMapRenderer isSelected={isSelected} height={15} className={'mapCharacter mikeColl'} />,
		portraitRenderer: (<rect className={'characterPortrait'}></rect>)
	},{
		meta: { charId: 4, name: 'Capcom', fullName: 'Capsule Command', isCpuControlled: true },
		attributes: { str: 0, fin: 0, per: 3, stm: 0, agi: -1, wil: 2, int: 3, cha: 1 },
		startingHex: { q: 0, r: 0, s: 0},
		mapOffset: {x: -50, y: -15},
		mapRenderer: (pixelLoc, isSelected)  => <LemMapRenderer isSelected={isSelected} height={20} className={'mapCharacter capcom'} />,
		portraitRenderer: (<rect className={'characterPortrait'}></rect>)
	}
];