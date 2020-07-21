import EvaSuitUpperRenderer from './evaSuitUpper';
import EvaSuitLowerRenderer from './evaSuitLower';
import EvaSuitArmRenderer from './evaSuitArm';
import EvaSuitLegsRenderer from './evaSuitLegs';

export const armorList = {

  // Legs
  0: [
    { id: 0, name: 'Unarmored', value: 0, penalty: 0, penaltyType: 'Speed', renderer: null },
    { id: 1, name: 'EVA Suit', value: 2, penalty: 1, penaltyType: 'Speed', renderer: EvaSuitLegsRenderer },
    { id: 2, name: 'Light Armor', value: 1, penalty: 0, penaltyType: 'Speed', renderer: null },
    { id: 3, name: 'Medium Armor', value: 2, penalty: 1, penaltyType: 'Speed', renderer: null },
    { id: 4, name: 'Heavy Armor', value: 3, penalty: 2, penaltyType: 'Speed', renderer: null },
  ],

  // Left Arm
  1: [
    { id: 0, name: 'Unarmored', value: 0, penalty: 0, penaltyType: 'Finesse', renderer: null },
    { id: 1, name: 'EVA Suit', value: 2, penalty: 1, penaltyType: 'Finesse', renderer: EvaSuitArmRenderer },
    { id: 2, name: 'Light Armor', value: 1, penalty: 0, penaltyType: 'Finesse', renderer: null },
    { id: 3, name: 'Medium Armor', value: 2, penalty: 0, penaltyType: 'Finesse', renderer: null },
    { id: 4, name: 'Heavy Armor', value: 3, penalty: 1, penaltyType: 'Finesse', renderer: null },
  ],

  // Right Arm
  2: [
    { id: 0, name: 'Unarmored', value: 0, penalty: 0, penaltyType: 'Finesse', renderer: null },
    { id: 1, name: 'EVA Suit', value: 2, penalty: 1, penaltyType: 'Finesse', renderer: EvaSuitArmRenderer },
    { id: 2, name: 'Light Armor', value: 1, penalty: 0, penaltyType: 'Finesse', renderer: null },
    { id: 3, name: 'Medium Armor', value: 2, penalty: 0, penaltyType: 'Finesse', renderer: null },
    { id: 4, name: 'Heavy Armor', value: 3, penalty: 1, penaltyType: 'Finesse', renderer: null },
  ],

  // Lower Body
  3: [
    { id: 0, name: 'Unarmored', value: 0, penalty: 0, penaltyType: 'Agility', renderer: null },
    { id: 1, name: 'EVA Suit', value: 2, penalty: 1, penaltyType: 'Agility', renderer: EvaSuitLowerRenderer },
    { id: 2, name: 'Light Armor', value: 1, penalty: 0, penaltyType: 'Agility', renderer: null },
    { id: 3, name: 'Medium Armor', value: 2, penalty: 0, penaltyType: 'Agility', renderer: null },
    { id: 4, name: 'Heavy Armor', value: 3, penalty: 1, penaltyType: 'Agility', renderer: null },
  ],

  // Upper Body
  4: [
    { id: 0, name: 'Unarmored', value: 0, penalty: 0, penaltyType: 'Perception', renderer: null },
    { id: 1, name: 'EVA Suit', value: 2, penalty: 1, penaltyType: 'Perception', renderer: EvaSuitUpperRenderer },
    { id: 2, name: 'Light Armor', value: 1, penalty: 0, penaltyType: 'Perception', renderer: null },
    { id: 3, name: 'Medium Armor', value: 2, penalty: 0, penaltyType: 'Perception', renderer: null },
    { id: 4, name: 'Heavy Armor', value: 3, penalty: 1, penaltyType: 'Perception', renderer: null },
  ],
};


