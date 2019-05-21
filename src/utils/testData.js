import React from 'react';
import AcyotaMapRenderer from '../svgs/acyotaMapRenderer';
import AcyotaActiveMapRenderer from '../svgs/acyotaActiveMapRenderer';
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
		skills: { Unarmed: 0, Melee: 1, Firearms: 1, Ballistics: 0, Defense: 2, Initiative: 1, Toughness: 1, Athletics: 1, Guts: 3 },
		currentAttack: { name: 'Flag Pole', attribute: 'Finesse', skill: 'Melee', range: 1, speedCost: 3, damDiceBonus: 0, damSuccBonus: 3, atkDiceBonus: 0, atkSuccBonus: 0 },
		status: { 
			health: { upper: [6,6], lower: [6,6], main: [6,6], off: [6,6], legs: [6,6] },
		},
		styles: {
			floating: {
				available: 1,
				assigned: [ {label: 'Finesse Core', attribute: 'Finesse'}, {label: 'Charisma Core', attribute: 'Charisma'}, ]
			},
			permanent: { totalXp: 9, classes: {
				Strength: { availableXp: 0, spentXp: 0 },
				Finesse: { availableXp: 2, spentXp: 0, core: 1 },
				Perception: { availableXp: 0, spentXp: 0 },
				Stamina: { availableXp: 0, spentXp: 0 },
				Agility: { availableXp: 0, spentXp: 0 },
				Wits: { availableXp: 0, spentXp: 0 },
				Willpower: { availableXp: 1, spentXp: 0, core: 4, spec1: 3, aux2: 2, spec3: 1 },
				Intelligence: { availableXp: 0, spentXp: 0 },
				Charisma: { availableXp: 1, spentXp: 0 }
			}},
		},
		startingHex: { q: 2, r: 2, s: -4},
		mapOffset: {x: -49, y: -11.5},
		mapRenderer: (pixelLoc, isSelected) => <NeilMapRenderer isSelected={isSelected} height={14} className={'mapCharacter neilArm'} />,
		portraitRenderer: () => <NeilPortrait />,
	},{
		meta: { charId: 1, name: 'Buzz', fullName: 'Buzz Aldrin', isCpuControlled: false },
		attributes: { Strength: 1, Finesse: 2, Perception: 1, Stamina: 1, Agility: 2, Wits: 1, Willpower: 2, Intelligence: 3, Charisma: 2 },
		skills: { Unarmed: 3, Melee: 0, Firearms: 0, Ballistics: 0, Defense: 1, Initiative: 2, Toughness: 2, Athletics: 1, Guts: 1 },
		currentAttack: { name: 'Unarmed', attribute: 'Strength', skill: 'Unarmed', range: 1, speedCost: 2, damDiceBonus: 0, damSuccBonus: 0, atkDiceBonus: 0, atkSuccBonus: 0 },
		status: { 
			health: { upper: [6,6], lower: [6,6], main: [6,6], off: [6,6], legs: [6,6] },
		},
		styles: {
			floating: {
				available: 0,
				assigned: [ {label: 'Strength Core', attribute: 'Strength'}, {label: 'Unarmed Combat', attribute: 'Strength'}, {label: 'Intelligence Core', attribute: 'Intelligence'}, ]
			},
			permanent: { totalXp: 9, classes: {
				Strength: { availableXp: 1, spentXp: 0, core: 1, aux1: 1, aux1Label: 'Unarmed Combat' },
				Finesse: { availableXp: 0, spentXp: 0  },
				Perception: { availableXp: 0, spentXp: 0 },
				Stamina: { availableXp: 0, spentXp: 0 },
				Agility: { availableXp: 0, spentXp: 0 },
				Wits: { availableXp: 1, spentXp: 0 },
				Willpower: { availableXp: 1, spentXp: 0 },
				Intelligence: { availableXp: 1, spentXp: 0, core: 4, spec2: 1 },
				Charisma: { availableXp: 0, spentXp: 0 }
			}},
		},
		startingHex: { q: 3, r: -1, s: -2},
		mapOffset: {x: -50, y: -12},
		mapRenderer: (pixelLoc, isSelected)  => <BuzzMapRenderer isSelected={isSelected} height={14} className={'mapCharacter buzzAld'} />,
		portraitRenderer: () => <BuzzPortrait />,
	},{
		meta: { charId: 2, name: 'A. dessicans', fullName: 'Acyota Dessicans', isCpuControlled: true, isHostile: true, isInscrutable: true },
		attributes: { Strength: 2, Finesse: 1, Perception: 1, Stamina: 1, Agility: 3, Wits: 2, Willpower: 1, Intelligence: 1, Charisma: 1 },
		skills: { Unarmed: 0, Melee: 0, Firearms: 0, Ballistics: 0, Defense: 0, Initiative: 0, Toughness: 0, Athletics: 0, Guts: 0 },
		currentAttack: { name: 'Lash', attribute: 'Strength', skill: 'Unarmed',  range: 1, speedCost: 3, damDiceBonus: 0, damSuccBonus: 0, atkDiceBonus: 0, atkSuccBonus: 0 },
		status: {
			health: { upper: [4,4], lower: [4,4], main: [4,4], off: [4,4], legs: [4,4] },
		},
		styles: {
			floating: {
				available: 3,
				assigned: [ ]
			},
			permanent: { totalXp: 0, classes: {
				Strength: { availableXp: 0, spentXp: 0 },
				Finesse: { availableXp: 0, spentXp: 0  },
				Perception: { availableXp: 0, spentXp: 0 },
				Stamina: { availableXp: 0, spentXp: 0 },
				Agility: { availableXp: 0, spentXp: 0 },
				Wits: { availableXp: 0, spentXp: 0 },
				Willpower: { availableXp: 0, spentXp: 0 },
				Intelligence: { availableXp: 0, spentXp: 0 },
				Charisma: { availableXp: 0, spentXp: 0 }
			}},
		},
		startingHex: { q: 3, r: 2, s: -5},
		mapOffset: {x: -50, y: -18},
		mapRenderer: (pixelLoc, isSelected) => <AcyotaActiveMapRenderer isSelected={isSelected} height={20} className={'mapCharacter activeAcyota'} />,
		portraitRenderer: () => <div />
	},{
		meta: { charId: 3, name: 'Mike', fullName: 'Michael Collins', isCpuControlled: false },
		attributes: { Strength: 1, Finesse: 1, Perception: 3, Stamina: 3, Agility: 3, Wits: 2, Willpower: 1, Intelligence: 2, Charisma: 1 },
		skills: { Unarmed: 0, Melee: 1, Firearms: 2, Ballistics: 1, Defense: 0, Initiative: 0, Toughness: 0, Athletics: 2, Guts: 3 },
		currentAttack: { name: 'Throw Stone', attribute: 'Perception', skill: 'Firearms', range: 4, speedCost: 3, damDiceBonus: 2, damSuccBonus: 1, atkDiceBonus: 0, atkSuccBonus: 0 },
		status: { 
			health: { upper: [6,6], lower: [6,6], main: [6,6], off: [6,6], legs: [6,6] },
		},
		styles: {
			floating: {
				available: 2,
				assigned: [ {label: 'Wits Core', attribute: 'Wits'} ]
			},
			permanent: { totalXp: 9, classes: {
				Strength: { availableXp: 0, spentXp: 0 },
				Finesse: { availableXp: 0, spentXp: 0  },
				Perception: { availableXp: 1, spentXp: 0, core: 1 },
				Stamina: { availableXp: 0, spentXp: 0 },
				Agility: { availableXp: 1, spentXp: 0 },
				Wits: { availableXp: 1, spentXp: 0 },
				Willpower: { availableXp: 0, spentXp: 0 },
				Intelligence: { availableXp: 0, spentXp: 0 },
				Charisma: { availableXp: 0, spentXp: 0 }
			}},
		},
		startingHex: { q: 0, r: 3, s: -3},
		mapOffset: {x: -51, y: -12},
		mapRenderer: (pixelLoc, isSelected) => <MikeMapRenderer isSelected={isSelected} height={14} className={'mapCharacter mikeColl'} />,
		portraitRenderer: () => <MikePortrait />
	},{
		meta: { charId: 4, name: 'Capcom', fullName: 'Capsule Command', isCpuControlled: true, isNonLocal: true },
		attributes: { Strength: 0, Finesse: 0, Perception: 3, Stamina: 0, Agility: -1, Wits: 3, Willpower: 2, Intelligence: 3, Charisma: 1 },
		skills: { Unarmed: 0, Melee: 0, Firearms: 0, Ballistics: 0, Defense: 0, Initiative: 0, Toughness: 0, Athletics: 0, Guts: 0 },
		currentAttack: { name: 'Unarmed', attribute: 'Strength', skill: 'Unarmed',  range: 1, speedCost: 2, damDiceBonus: 0, damSuccBonus: 0, atkDiceBonus: 0, atkSuccBonus: 0 },
		status: {
			health: { upper: [3,3], lower: [3,3], main: [3,3], off: [3,3], legs: [3,3] },
		},
		styles: {
			floating: {
				available: 3,
				assigned: [ ]
			},
			permanent: { totalXp: 0, classes: {
				Strength: { availableXp: 0, spentXp: 0 },
				Finesse: { availableXp: 0, spentXp: 0  },
				Perception: { availableXp: 0, spentXp: 0 },
				Stamina: { availableXp: 0, spentXp: 0 },
				Agility: { availableXp: 0, spentXp: 0 },
				Wits: { availableXp: 0, spentXp: 0 },
				Willpower: { availableXp: 0, spentXp: 0 },
				Intelligence: { availableXp: 0, spentXp: 0 },
				Charisma: { availableXp: 0, spentXp: 0 }
			}},
		},
		startingHex: { q: 0, r: 0, s: 0},
		mapOffset: {x: -50, y: -15},
		mapRenderer: (pixelLoc, isSelected)  => <LemMapRenderer isSelected={isSelected} height={20} className={'mapCharacter capcom'} />,
		portraitRenderer: () => <CapcomPortrait />
	},{
		meta: { charId: 5, name: 'A. dessicans', fullName: 'Acyota Dessicans', isCpuControlled: true, isHostile: true, isInscrutable: true },
		attributes: { Strength: 2, Finesse: 1, Perception: 1, Stamina: 1, Agility: 3, Wits: 2, Willpower: 1, Intelligence: 1, Charisma: 1 },
		skills: { Unarmed: 0, Melee: 0, Firearms: 0, Ballistics: 0, Defense: 0, Initiative: 0, Toughness: 0, Athletics: 0, Guts: 0 },
		currentAttack: { name: 'Lash', attribute: 'Strength', skill: 'Unarmed',  range: 1, speedCost: 3, damDiceBonus: 0, damSuccBonus: 0, atkDiceBonus: 0, atkSuccBonus: 0 },
		status: {
			health: { upper: [4,4], lower: [4,4], main: [4,4], off: [4,4], legs: [4,4] },
		},
		styles: {
			floating: {
				available: 3,
				assigned: [ ]
			},
			permanent: { totalXp: 0, classes: {
				Strength: { availableXp: 0, spentXp: 0 },
				Finesse: { availableXp: 0, spentXp: 0  },
				Perception: { availableXp: 0, spentXp: 0 },
				Stamina: { availableXp: 0, spentXp: 0 },
				Agility: { availableXp: 0, spentXp: 0 },
				Wits: { availableXp: 0, spentXp: 0 },
				Willpower: { availableXp: 0, spentXp: 0 },
				Intelligence: { availableXp: 0, spentXp: 0 },
				Charisma: { availableXp: 0, spentXp: 0 }
			}},
		},
		startingHex: { q: 4, r: 3, s: -7},
		mapOffset: {x: -50, y: -18},
		mapRenderer: (pixelLoc, isSelected)  => <AcyotaMapRenderer isSelected={isSelected} height={20} className={'mapCharacter acyota'} />,
		portraitRenderer: () => <div />
	},{
		meta: { charId: 6, name: 'Monolith', fullName: 'Monolith', isCpuControlled: true, isHostile: true, isInscrutable: true },
		attributes: { Strength: 3, Finesse: 1, Perception: 3, Stamina: 3, Agility: 1, Wits: 3, Willpower: 3, Intelligence: 3, Charisma: 3 },
		skills: { Unarmed: 0, Melee: 0, Firearms: 0, Ballistics: 0, Defense: 2, Initiative: 0, Toughness: 0, Athletics: 0, Guts: 0 },
		currentAttack: { name: 'Unarmed', attribute: 'Strength', skill: 'Unarmed', range: 1, speedCost: 2, damDiceBonus: 0, damSuccBonus: 0, atkDiceBonus: 0, atkSuccBonus: 0 },
		status: { 
			health: { upper: [99,99], lower: [99,99], main: [99,99], off: [99,99], legs: [99,99] },
		},
		styles: {
			floating: {
				available: 3,
				assigned: [ ]
			},
			permanent: { totalXp: 99, classes: {
				Strength: { availableXp: 1, spentXp: 0, core: 9, spec1: 1, spec2: 1, spec3: 1 },
				Finesse: { availableXp: 11, spentXp: 0, core: 9, spec1: 1, spec2: 1, spec3: 1 },
				Perception: { availableXp: 1, spentXp: 0, core: 9, spec1: 1, spec2: 1, spec3: 1 },
				Stamina: { availableXp: 1, spentXp: 0, core: 9, spec1: 1, spec2: 1, spec3: 1 },
				Agility: { availableXp: 1, spentXp: 0, core: 9, spec1: 1, spec2: 1, spec3: 1 },
				Wits: { availableXp: 1, spentXp: 0, core: 9, spec1: 1, spec2: 1, spec3: 1 },
				Willpower: { availableXp: 1, spentXp: 0, core: 9, spec1: 1, spec2: 1, spec3: 1 },
				Intelligence: { availableXp: 1, spentXp: 0, core: 9, spec1: 1, spec2: 1, spec3: 1 },
				Charisma: { availableXp: 1, spentXp: 0, core: 9, spec1: 1, spec2: 1, spec3: 1 },
			}},
		},
		startingHex: { q: 6, r: 3, s: -9},
		mapOffset: {x: -51, y: -15},
		mapRenderer: (pixelLoc, isSelected)  => <MonoMapRenderer isSelected={isSelected} height={18} className={'mapCharacter monolith'} />,
		portraitRenderer: () => <MonolithPortrait />,
	}
];