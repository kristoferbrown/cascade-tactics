import React from 'react';
import WorldMapRenderer from "../../content/maps/worldMap";
import InitialMapRenderer from "../../content/maps/initialMap";

export default function getMapData(mapId) {
  console.log('getter', mapList, mapId, mapList[mapId]);
  return mapList[mapId];
}

export const mapList = [

  // world map
  {
    id: 0,
    name: 'Test World Map',
    renderer: () => <WorldMapRenderer />,
    locations: [
      { id: 0, name: 'Safehouse', description: 'A place where you can rest and work safely. For now.', left: null, top: null, layer: 'physical', renderer: null, contacts: ['Friend One', 'Friend Two'], expeditions: ['Perimeter Breach'], newProjects: ['Research Something', 'Craft Something'], ongoingProjects: ['Research This', 'Craft That', 'Network Here', 'Solve This Mystery'] },
      { id: 1, name: 'Onett', description: 'The first town.', left: 32, top: 36, layer: 'physical', renderer: null, contacts: ['Friend 3'], expeditions: [], newProjects: [], ongoingProjects: [] },
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
      { id: 0, name: 'Reception', description: 'A room', left: 12, top: 12, layer: 'physical', renderer: () => <div />, contacts: ['Friend One', 'Friend Two'], expeditions: ['Perimeter Breach'], newProjects: ['Research Something', 'Craft Something'], ongoingProjects: ['Research This', 'Craft That', 'Network Here', 'Solve This Mystery'] },
      { id: 1, name: 'Entrance', description: 'Another room.', left: 32, top: 36, layer: 'physical', renderer: () => <div />, contacts: ['Friend 3'], expeditions: [], newProjects: [], ongoingProjects: [] },
      { id: 2, name: 'Security', description: '3rd room.', left: 52, top: 57, layer: 'physical', renderer: () => <div />, contacts: [], expeditions: [], newProjects: ['Network Here'], ongoingProjects: []},
    ],
  }
];