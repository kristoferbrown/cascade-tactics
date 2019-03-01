import React from 'react';
import BuzzMapRenderer from '../svgs/buzzMapRenderer';
import LemMapRenderer from '../svgs/lemMapRenderer';
import MikeMapRenderer from '../svgs/mikeMapRenderer';
import MonoMapRenderer from '../svgs/monoMapRenderer';
import NeilMapRenderer from '../svgs/neilMapRenderer';
import BuzzPortrait from '../svgs/portraits/buzzPortrait';
import CapcomPortrait from '../svgs/portraits/capcomPortrait';
import MikePortrait from '../svgs/portraits/mikePortrait';
import MonolithPortrait from '../svgs/portraits/monolithPortrait';
import NeilPortrait from '../svgs/portraits/neilPortrait';

export const testCharacters = [
	{
		meta: { charId: 0, name: 'Neil', fullName: 'Neil Armstrong', isCpuControlled: false },
		attributes: { Strength: 2, Finesse: 2, Perception: 1, Stamina: 2, Agility: 3, Wits: 1, Willpower: 3, Intelligence: 1, Charisma: 3 },
		status: { 
			health: { upper: [3,4], lower: [4,4], main: [1,4], off: [3,4], legs: [4,4] },
		},
		startingHex: { q: 2, r: 2, s: -4},
		mapOffset: {x: -49, y: -11.5},
		mapRenderer: (pixelLoc, isSelected) => <NeilMapRenderer isSelected={isSelected} height={14} className={'mapCharacter neilArm'} />,
		portraitRenderer: () => <NeilPortrait />,
	},{
		meta: { charId: 1, name: 'Buzz', fullName: 'Buzz Aldrin', isCpuControlled: false },
		attributes: { Strength: 1, Finesse: 2, Perception: 1, Stamina: 1, Agility: 2, Wits: 1, Willpower: 2, Intelligence: 3, Charisma: 2 },
		status: { 
			health: { upper: [3,4], lower: [4,4], main: [1,4], off: [3,4], legs: [4,4] },
		},
		startingHex: { q: 3, r: -1, s: -2},
		mapOffset: {x: -50, y: -12},
		mapRenderer: (pixelLoc, isSelected)  => <BuzzMapRenderer isSelected={isSelected} height={14} className={'mapCharacter buzzAld'} />,
		portraitRenderer: () => <BuzzPortrait />,
	},{
		meta: { charId: 2, name: 'Monolith', fullName: 'Monolith', isCpuControlled: true, isHostile: true, isInscrutable: true },
		attributes: { Strength: 1, Finesse: 1, Perception: 1, Stamina: 2, Agility: -1, Wits: 1, Willpower: 1, Intelligence: 1, Charisma: 1 },
		status: { 
			health: { upper: [3,4], lower: [4,4], main: [1,4], off: [3,4], legs: [4,4] },
		},
		startingHex: { q: 9, r: 3, s: -12},
		mapOffset: {x: -51, y: -21},
		mapRenderer: (pixelLoc, isSelected)  => <MonoMapRenderer isSelected={isSelected} height={25} className={'mapCharacter monolith'} />,
		portraitRenderer: () => <MonolithPortrait />,
	},{
		meta: { charId: 3, name: 'Mike', fullName: 'Michael Collins', isCpuControlled: false },
		attributes: { Strength: 1, Finesse: 1, Perception: 3, Stamina: 3, Agility: 3, Wits: 2, Willpower: 1, Intelligence: 2, Charisma: 1 },
		status: { 
			health: { upper: [3,4], lower: [4,4], main: [1,4], off: [3,4], legs: [4,4] },
		},
		startingHex: { q: 0, r: 3, s: -3},
		mapOffset: {x: -51, y: -12},
		mapRenderer: (pixelLoc, isSelected) => <MikeMapRenderer isSelected={isSelected} height={14} className={'mapCharacter mikeColl'} />,
		portraitRenderer: () => <MikePortrait />
	},{
		meta: { charId: 4, name: 'Capcom', fullName: 'Capsule Command', isCpuControlled: true, isNonLocal: true },
		attributes: { Strength: 0, Finesse: 0, Perception: 3, Stamina: 0, Agility: -1, Wits: 3, Willpower: 2, Intelligence: 3, Charisma: 1 },
		status: { 
			health: { upper: [3,4], lower: [4,4], main: [1,4], off: [3,4], legs: [4,4] },
		},
		startingHex: { q: 0, r: 0, s: 0},
		mapOffset: {x: -50, y: -15},
		mapRenderer: (pixelLoc, isSelected)  => <LemMapRenderer isSelected={isSelected} height={20} className={'mapCharacter capcom'} />,
		portraitRenderer: () => <CapcomPortrait />
	}
];