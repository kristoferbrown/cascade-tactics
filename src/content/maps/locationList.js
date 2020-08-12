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
      { id: 0, name: 'Reception', description: 'A room', left: 26, top: 54, width: 10, height: 14, layer: 'physical', renderer: () => <div style={{ width: '100%', height: '100%', background: '#999', border: '2px solid #000'}} />, contacts: ['Friend One', 'Friend Two'], expeditions: ['Perimeter Breach'], newProjects: ['Research Something', 'Craft Something'], ongoingProjects: ['Research This', 'Craft That', 'Network Here', 'Solve This Mystery'] },
      { id: 1, name: 'Entrance', description: 'Another room.', left: 39, top: 68, width: 9.5, height: 8, layer: 'physical', renderer: () => <div style={{ width: '100%', height: '100%', background: '#999', border: '2px solid #000'}} />, contacts: ['Friend 3'], expeditions: [], newProjects: [], ongoingProjects: [] },
      { id: 2, name: 'Security', description: '3rd room.', left: 50, top: 66, width: 8.5, height: 11, layer: 'physical', renderer: () => <div style={{ width: '100%', height: '100%', background: '#999', border: '2px solid #000'}} />, contacts: [], expeditions: [], newProjects: ['Network Here'], ongoingProjects: []},
    ],
  }
];