export const styleTree = [
  { name: "Strength",
    classValues: {
      spec1: { name: 'Unencumber', description: 'Style description...' }, 
      spec2: { name: 'Adrenal Strength', description: 'Style description...' }, 
      spec3: { name: 'Damage +', description: 'Style description...' }, 
      auxOptions: {
        skills: [
          { name: 'Athletics', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Melee', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Toughness', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Unarmed', description: 'Each rank adds 1 to all rolls involving this skill.' },
        ]
      }
    }
  },
  { name: "Finesse", 
    classValues: {
      spec1: { name: 'Deft Combat', description: 'Style description...' }, 
      spec2: { name: 'Ambidexterity', description: 'Style description...' }, 
      spec3: { name: 'Melee +', description: 'Style description...' }, 
      auxOptions: {
        skills: [
          { name: 'Defense', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Melee', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Stealth', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Unarmed', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
        ]
      }
    }
  },
  { name: "Perception",
    classValues: {
      spec1: { name: 'Chromaception', description: 'Style description...' }, 
      spec2: { name: 'Precision', description: 'Style description...' }, 
      spec3: { name: 'Ranged +', description: 'Style description...' }, 
      auxOptions: {
        skills: [
          { name: 'Alertness', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Ballistics', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Firearms', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Initiative', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
        ]
      }
    }
  },
  { name: "Stamina",
    classValues: {
      spec1: { name: 'Resilience', description: 'Style description...' }, 
      spec2: { name: 'Endurance', description: 'Style description...' }, 
      spec3: { name: 'Regeneration', description: 'Style description...' }, 
      auxOptions: {
        skills: [
          { name: 'Athletics', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Defense', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Toughness', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Unarmed', description: 'Each rank adds 1 to all rolls involving this skill.' },
        ]
      }
    }
  },
  { name: "Agility",
    classValues: {
      spec1: { name: 'Super Speed', description: 'Style description...' }, 
      spec2: { name: 'Mobility', description: 'Style description...' }, 
      spec3: { name: 'Active Defense', description: 'Style description...' }, 
      auxOptions: {
        skills: [
          { name: 'Athletics', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Defense', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Initiative', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Melee', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
        ]
      }
    }
  },
  { name: "Wits",
    classValues: {
      spec1: { name: 'Priority', description: 'Style description...' }, 
      spec2: { name: 'Passive Defense', description: 'Style description...' }, 
      spec3: { name: 'Precognition', description: 'Style description...' }, 
      auxOptions: {
        skills: [
          { name: 'Defense', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Guts', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Initiative', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Stealth', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
        ]
      }
    }
  },
  { name: "Willpower",
    classValues: {
      spec1: { name: 'Entanglement +', description: 'Style description...' }, 
      spec2: { name: 'Persistence', description: 'Style description...' }, 
      spec3: { name: 'Extropy', description: 'Style description...' }, 
      auxOptions: {
        skills: [
          { name: 'Guts', description: 'Each rank adds 1 to all rolls involving this skill.' },
          { name: 'Toughness', description: 'Each rank adds 1 to all rolls involving this skill.' },
        ],
        arcana: [
          { arcaneClass: 'Abjuration', 
            description: 'Arcane style class description...',
            styles: [
              { name: 'Filter', description: 'Style description...' }, 
              { name: 'Retrogradient', description: 'Style description...' },
              { name: 'Ward', description: 'Style description...' },
          ]},
          { arcaneClass: 'Evocation', 
            description: 'Arcane style class description...',
            styles: [
              { name: 'Cascade Discharge', description: 'Style description...' }, 
              { name: 'Combat Evocation', description: 'Style description...' },
              { name: 'Evocation Extensibility', description: 'Style description...' },
          ]},
          { arcaneClass: 'Sublimation',
            description: 'Arcane style class description...',
            styles: [
              { name: 'Sublime Storage', description: 'Style description...' }, 
              { name: 'Yau Combat', description: 'Style description...' },
              { name: 'Yau Traversal', description: 'Style description...' },
          ]},
        ]
      }
    }
  },
  { name: "Intelligence",
    classValues: {
      spec1: { name: 'Analyze Cascade', description: 'Style description...' }, 
      spec2: { name: 'Episemiotics', description: 'Style description...' }, 
      spec3: { name: 'Polymath', description: 'Style description...' }, 
      auxOptions: {
        skills: [
          { name: 'Hardware', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Investigate', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
        ],
        arcana: [
          { arcaneClass: 'Chromodynamism', 
            description: 'Arcane style class description...',
            styles: [
              { name: 'Condense Matter', description: 'Style description...' }, 
              { name: 'Entropic Combat', description: 'Style description...' },
              { name: 'Transmute Matter', description: 'Style description...' },
          ]},
          { arcaneClass: 'Electromagnetism', 
            description: 'Arcane style class description...',
            styles: [
              { name: 'Modulate Waveform', description: 'Style description...' }, 
              { name: 'Redirect Waveform', description: 'Style description...' },
              { name: 'Transmute Waveform', description: 'Style description...' },
          ]},
          { arcaneClass: 'Gravitonertia',
            description: 'Arcane style class description...',
            styles: [
              { name: 'Alter Mass', description: 'Style description...' }, 
              { name: 'Redirect Momenta', description: 'Style description...' },
              { name: 'Telekinesis', description: 'Style description...' },
          ]},
        ]
      }
    }
  },
  { name: "Charisma",
    classValues: {
      spec1: { name: 'Induce Cascade', description: 'Style description...' }, 
      spec2: { name: 'Healing', description: 'Style description...' }, 
      spec3: { name: 'Combat Healing', description: 'Style description...' }, 
      auxOptions: {
        skills: [
          { name: 'Guts', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
          { name: 'Investigate', description: 'Each rank adds 1 to all rolls involving this skill.' }, 
        ],
        arcana: [
          { arcaneClass: 'Pneumaplegia', 
            description: 'Arcane style class description...',
            styles: [
              { name: 'Bolstering Event', description: 'Style description...' }, 
              { name: 'Draining Event', description: 'Style description...' },
              { name: 'Halting Event', description: 'Style description...' },
          ]},
          { arcaneClass: 'Schizosomata', 
            description: 'Arcane style class description...',
            styles: [
              { name: 'Emulate', description: 'Style description...' }, 
              { name: 'Fade', description: 'Style description...' },
              { name: 'Shift', description: 'Style description...' },
          ]},
          { arcaneClass: 'Telethesia',
            description: 'Arcane style class description...',
            styles: [
              { name: 'Clairvoyance', description: 'Style description...' }, 
              { name: 'Suggestion', description: 'Style description...' },
              { name: 'Telepathy', description: 'Style description...' },
          ]},
        ]
      }
    }
  },
];