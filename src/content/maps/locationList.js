import React from 'react';
import WorldMapRenderer from "../../content/maps/worldMap";
import InitialMapRenderer from "../../content/maps/initialMap";

export default function getMapData(mapId) { return mapList[mapId]; }

export const mapList = [

  // world map
  {
    id: 0,
    name: 'Test World Map',
    renderer: () => <WorldMapRenderer />,
    locations: [
      { id: 0, name: 'Safehouse', description: 'A place where you can rest and work safely. For now.', left: null, top: null, layer: 'physical', renderer: null, contacts: ['Friend One', 'Friend Two'], expeditions: ['Perimeter Breach'], newProjects: ['Research Something', 'Craft Something'], ongoingProjects: ['Research This', 'Craft That', 'Network Here', 'Solve This Mystery'] },
      { id: 1, name: 'Onett', description: 'The first town.', left: 32, top: 36, width: null, height: null, layer: 'physical', renderer: null, contacts: ['Friend 3'], expeditions: [], newProjects: [], ongoingProjects: [] },
      { id: 2, name: 'Twoson', description: 'The second town.', left: 52, top: 57, layer: 'physical', renderer: null, contacts: [], expeditions: [], newProjects: ['Network Here'], ongoingProjects: []},
      { id: 3, name: 'Threed', description: 'The third town.', left: 38, top: 67, layer: 'yau', renderer: null, contacts: [], expeditions: ['A Boss Fight'], newProjects: [], ongoingProjects: ['Identify Weaknesses'] },
      { id: 4, name: 'Fourside', description: 'The fourth town.', left: 68, top: 24, layer: 'simulation', renderer: null, contacts: ['A Mysterious Stranger'], expeditions: [], newProjects: [], ongoingProjects: [] },
      { id: 5, name: 'Fivelton', description: 'The fifth town', left: 51, top: 84, layer: 'physical', renderer: null, contacts: [], expeditions: ['A Huge Dungeon'], newProjects: [], ongoingProjects: [] },
    ],
  },

  // initial map
  {
    id: 1,
    name: 'Test Exploration Map',
    renderer: () => <InitialMapRenderer />,
    locations: [
      { 
        id: 0,
        name: 'Entrance',
        description: 'Another room.',
        left: 39, top: 68, width: 9.5, height: 8,
        layer: 'physical',
        adjacentTo: [1, 2],
        contacts: ['Friend 3'],
        expeditions: [],
        newProjects: [],
        ongoingProjects: [],
        renderer: () => <div style={{ width: '100%', height: '100%', background: '#999', border: '2px solid #000'}} />,
      },
      { 
        id: 1,
        name: 'Reception',
        description: 'A room',
        left: 28, top: 68, width: 10, height: 8,
        adjacentTo: [0, 3, 4],
        layer: 'physical',
        contacts: ['Friend One', 'Friend Two'],
        expeditions: ['Perimeter Breach'],
        newProjects: ['Research Something', 'Craft Something'],
        ongoingProjects: ['Research This', 'Craft That'],
        renderer: () => <div style={{ width: '100%', height: '100%', background: '#999', border: '2px solid #000'}} />,
      },
      { 
        id: 2,
        name: 'Security',
        description: '3rd room.',
        left: 50, top: 66, width: 8.5, height: 11,
        adjacentTo: [0, 5, 6],
        layer: 'physical',
        contacts: [],
        expeditions: [],
        newProjects: ['Network Here'],
        ongoingProjects: [],
        renderer: () => <div style={{ width: '100%', height: '100%', background: '#999', border: '2px solid #000'}} />,
      },
      { 
        id: 3,
        name: 'Conference Rooms',
        description: 'Another room.',
        left: 16.5, top: 54, width: 20, height: 13,
        adjacentTo: [1, 2],
        layer: 'physical',
        contacts: [],
        expeditions: [],
        newProjects: [],
        ongoingProjects: [],
        renderer: () => <div style={{ width: '100%', height: '100%', background: '#999', border: '2px solid #000'}} />,
      },
      { 
        id: 4,
        name: 'Exhibition Hall',
        description: 'Another room.',
        left: 14, top: 68, width: 12.5, height: 19,
        adjacentTo: [1, 3],
        layer: 'physical',
        contacts: [],
        expeditions: [],
        newProjects: [],
        ongoingProjects: [],
        renderer: () => <div style={{ width: '100%', height: '100%', background: '#999', border: '2px solid #000'}} />,
      },
      { 
        id: 5,
        name: 'Engineering',
        description: 'Another room.',
        left: 61, top: 69, width: 18, height: 13,
        adjacentTo: [2, 6],
        layer: 'physical',
        contacts: [],
        expeditions: [],
        newProjects: [],
        ongoingProjects: [],
        renderer: () => <div style={{ width: '100%', height: '100%', background: '#999', border: '2px solid #000'}} />,
      },
      { 
        id: 6,
        name: 'Circuit Foundry',
        description: 'Another room.',
        left: 49, top: 54, width: 36, height: 11,
        adjacentTo: [2, 5],
        layer: 'physical',
        contacts: [],
        expeditions: [],
        newProjects: [],
        ongoingProjects: [],
        renderer: () => <div style={{ width: '100%', height: '100%', background: '#999', border: '2px solid #000'}} />,
      },
    ],
  }
];