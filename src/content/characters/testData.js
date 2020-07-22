import React from 'react';
import AcyotaMapRenderer from '../../svgs/acyotaMapRenderer';
import AcyotaActiveMapRenderer from '../../svgs/acyotaActiveMapRenderer';
import BuzzMapRenderer from '../../svgs/buzzMapRenderer';
import LemMapRenderer from '../../svgs/lemMapRenderer';
import MikeMapRenderer from '../../svgs/mikeMapRenderer';
import MonoMapRenderer from '../../svgs/monoMapRenderer';
import NeilMapRenderer from '../../svgs/neilMapRenderer';
import BuzzPortrait from '../../svgs/portraits/buzzPortrait';
import CapcomPortrait from '../../svgs/portraits/capcomPortrait';
import MikePortrait from '../../svgs/portraits/mikePortrait';
import MonolithPortrait from '../../svgs/portraits/monolithPortrait';
import NeilPortrait from '../../svgs/portraits/neilPortrait';

export const testCharacters = [
	{
		meta: { charId: 0, name: 'Neil', fullName: 'Neil Armstrong', isCpuControlled: false },
		attributes: { Strength: 2, Finesse: 2, Perception: 1, Stamina: 2, Agility: 3, Wits: 1, Willpower: 3, Intelligence: 1, Charisma: 3 },
		skills: { 
			Strength: { Athletics: 0, Unarmed: 1 },
			Finesse: { Melee: 1, Stealth: 1 },
			Perception: { Alertness: 0, Ranged: 1 },
			Stamina: { Grit: 1, Toughness: 1 },
			Agility: { Acrobatics: 1, Defense: 1 },
			Wits: { Initiative: 0, Survival: 1 },
			Willpower: { Motivation: 1, Guts: 3 },
			Intelligence: { Academics: 0, Hardware: 1 },
			Charisma: { Charm: 0, Manipulate: 1 }
		},
		attacks: { left: 1, right: null },
		status: { health: { 0: [6,6], 1: [6,6], 2: [5,6], 3: [6,6], 4: [6,6] } },
		armor: { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1 },
		styles: {
			floating: {
				available: 1,
				assigned: [ 'Finesse', 'Charisma' ]
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
		startingHex: { q: 2, r: 1, s: -3},
		mapOffset: {x: -49, y: -11.5},
		mapRenderer: (pixelLoc, isSelected) => <NeilMapRenderer isSelected={isSelected} height={14} className={'mapCharacter neilArm'} />,
		portraitRenderer: () => <NeilPortrait />,
	},{
		meta: { charId: 1, name: 'Buzz', fullName: 'Buzz Aldrin', isCpuControlled: false },
		attributes: { Strength: 1, Finesse: 2, Perception: 1, Stamina: 1, Agility: 2, Wits: 1, Willpower: 2, Intelligence: 3, Charisma: 2 },
		skills: { 
			Strength: { Athletics: 1, Unarmed: 3 },
			Finesse: { Melee: 0, Stealth: 1 },
			Perception: { Alertness: 0, Ranged: 1 },
			Stamina: { Grit: 1, Toughness: 1 },
			Agility: { Acrobatics: 1, Defense: 1 },
			Wits: { Initiative: 0, Survival: 1 },
			Willpower: { Motivation: 1, Guts: 1 },
			Intelligence: { Academics: 1, Hardware: 0 },
			Charisma: { Charm: 0, Manipulate: 1 }
		},
		attacks: { left: 0, right: 2 },
		status: { health: { 0: [6,6], 1: [6,6], 2: [6,6], 3: [6,6], 4: [6,6] } },
		armor: { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1 },
		styles: {
			floating: {
				available: 0,
				assigned: [ 'Strength', 'Stamina', 'Intelligence' ]
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
		startingHex: { q: 4, r: 1, s: -5},
		mapOffset: {x: -50, y: -12},
		mapRenderer: (pixelLoc, isSelected)  => <BuzzMapRenderer isSelected={isSelected} height={14} className={'mapCharacter buzzAld'} />,
		portraitRenderer: () => <BuzzPortrait />,
	},{
		meta: { charId: 2, name: 'A. dessicans', fullName: 'Acyota Dessicans (Active)', isCpuControlled: true, isHostile: true, isInscrutable: false },
		attributes: { Strength: 3, Finesse: 3, Perception: 1, Stamina: 1, Agility: 3, Wits: 2, Willpower: 1, Intelligence: 1, Charisma: 1 },
		skills: { 
			Strength: { Athletics: 0, Unarmed: 3 },
			Finesse: { Melee: 0, Stealth: 1 },
			Perception: { Alertness: 0, Ranged: 0 },
			Stamina: { Grit: 1, Toughness: 1 },
			Agility: { Acrobatics: 1, Defense: 1 },
			Wits: { Initiative: 0, Survival: 1 },
			Willpower: { Motivation: 1, Guts: 1 },
			Intelligence: { Academics: 0, Hardware: 1 },
			Charisma: { Charm: 0, Manipulate: 1 }
		},
		attacks: { left: 3, right: null },
		status: { health: { 0: [4,4], 1: [4,4], 2: [4,4], 3: [4,4], 4: [4,4] } },
		armor: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
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
		mapOffset: {x: -50, y: -16},
		mapRenderer: (pixelLoc, isSelected) => <AcyotaActiveMapRenderer isSelected={isSelected} height={18} className={'mapCharacter activeAcyota'} />,
		portraitRenderer: () => <div />
	},{
		meta: { charId: 3, name: 'Mike', fullName: 'Michael Collins', isCpuControlled: false },
		attributes: { Strength: 1, Finesse: 1, Perception: 3, Stamina: 3, Agility: 3, Wits: 2, Willpower: 1, Intelligence: 2, Charisma: 1 },
		skills: { 
			Strength: { Athletics: 0, Unarmed: 0 },
			Finesse: { Melee: 0, Stealth: 1 },
			Perception: { Alertness: 0, Ranged: 2 },
			Stamina: { Grit: 1, Toughness: 1 },
			Agility: { Acrobatics: 1, Defense: 1 },
			Wits: { Initiative: 0, Survival: 1 },
			Willpower: { Motivation: 1, Guts: 1 },
			Intelligence: { Academics: 0, Hardware: 1 },
			Charisma: { Charm: 0, Manipulate: 1 }
		},
		attacks: { left: 0, right: 2 },
		status: { health: { 0: [6,6], 1: [6,6], 2: [6,6], 3: [6,6], 4: [6,6] } },
		armor: { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1 },
		styles: {
			floating: {
				available: 2,
				assigned: [ 'Wits' ]
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
		skills: { 
			Strength: { Athletics: 0, Unarmed: 0 },
			Finesse: { Melee: 0, Stealth: 0 },
			Perception: { Alertness: 0, Ranged: 0 },
			Stamina: { Grit: 1, Toughness: 0 },
			Agility: { Acrobatics: 1, Defense: 0 },
			Wits: { Initiative: 0, Survival: 1 },
			Willpower: { Motivation: 1, Guts: 1 },
			Intelligence: { Academics: 0, Hardware: 1 },
			Charisma: { Charm: 0, Manipulate: 1 }
		},
		attacks: {left: null, right: null},
		status: { health: { 0: [3,3], 1: [3,3], 2: [3,3], 3: [3,3], 4: [3,3] } },
		armor: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
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
		meta: { charId: 5, name: 'A. dessicans', fullName: 'Acyota Dessicans (Dormant)', isCpuControlled: true, isHostile: true, isInscrutable: false },
		attributes: { Strength: 2, Finesse: 1, Perception: 1, Stamina: 1, Agility: 3, Wits: 2, Willpower: 1, Intelligence: 1, Charisma: 1 },
		skills: { 
			Strength: { Athletics: 0, Unarmed: 3 },
			Finesse: { Melee: 0, Stealth: 1 },
			Perception: { Alertness: 0, Ranged: 0 },
			Stamina: { Grit: 1, Toughness: 1 },
			Agility: { Acrobatics: 1, Defense: 1 },
			Wits: { Initiative: 0, Survival: 1 },
			Willpower: { Motivation: 1, Guts: 1 },
			Intelligence: { Academics: 0, Hardware: 1 },
			Charisma: { Charm: 0, Manipulate: 1 }
		},
		attacks: { left: 3, right: null },
		status: { health: { 0: [4,4], 1: [4,4], 2: [4,4], 3: [4,4], 4: [4,4] } },
		armor: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
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
		mapOffset: {x: -50, y: -16},
		mapRenderer: (pixelLoc, isSelected)  => <AcyotaMapRenderer isSelected={isSelected} height={18} className={'mapCharacter acyota'} />,
		portraitRenderer: () => <div />
	},{
		meta: { charId: 6, name: 'Monolith', fullName: 'Monolith', isCpuControlled: true, isHostile: true, isInscrutable: true },
		attributes: { Strength: 3, Finesse: 1, Perception: 3, Stamina: 3, Agility: 1, Wits: 3, Willpower: 3, Intelligence: 3, Charisma: 3 },
		skills: { 
			Strength: { Athletics: 0, Unarmed: 3 },
			Finesse: { Melee: 0, Stealth: 1 },
			Perception: { Alertness: 0, Ranged: 0 },
			Stamina: { Grit: 1, Toughness: 1 },
			Agility: { Acrobatics: 1, Defense: 1 },
			Wits: { Initiative: 0, Survival: 1 },
			Willpower: { Motivation: 1, Guts: 1 },
			Intelligence: { Academics: 0, Hardware: 1 },
			Charisma: { Charm: 0, Manipulate: 1 }
		},
		attacks: { left: null, right: null },
		status: { health: { 0: [99,99], 1: [99,99], 2: [99,99], 3: [99,99], 4: [99,99] } },
		armor: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 },
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