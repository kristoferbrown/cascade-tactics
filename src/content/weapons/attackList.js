import FlagPoleRenderer from './flagPole';
import UnarmedRenderer from './unarmed';
import ThrowStoneRenderer from './throwStone';

export const attackList = [
  { id: 0, name: 'Unarmed', attribute: 'Strength', damageType: 'Inertial', skill: 'Unarmed', range: 1, speedCost: 2, damDiceBonus: 0, damSuccBonus: 0, atkDiceBonus: 0, atkSuccBonus: 0, twoHanded: false, renderer: UnarmedRenderer },
  { id: 1, name: 'Flag Pole', attribute: 'Finesse', damageType: 'Kinetic', skill: 'Melee', range: 1, speedCost: 4, damDiceBonus: 0, damSuccBonus: 3, atkDiceBonus: 0, atkSuccBonus: 0, twoHanded: true, renderer: FlagPoleRenderer },
  { id: 2, name: 'Throw Stone', attribute: 'Perception', damageType: 'Kinetic', skill: 'Ranged', range: 4, speedCost: 3, damDiceBonus: 1, damSuccBonus: 1, atkDiceBonus: 0, atkSuccBonus: 0, twoHanded: false, renderer: ThrowStoneRenderer },
  { id: 3, name: 'Lash', attribute: 'Strength', damageType: 'Kinetic', skill: 'Unarmed', range: 1, speedCost: 3, damDiceBonus: 0, damSuccBonus: 0, atkDiceBonus: 0, atkSuccBonus: 0, twoHanded: false, renderer: null },
];


