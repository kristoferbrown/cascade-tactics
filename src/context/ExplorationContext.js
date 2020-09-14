import React, { PureComponent } from 'react';
import getMapData from '../content/maps/locationList';

const ExplorationContext = React.createContext();
export default ExplorationContext;

export class ExplorationProvider extends PureComponent {
	constructor(props) {
		super(props);
		// Populate maps loaded from data with their transient and derived values
		const currentMap = this.initializeMap(0);
		this.state = {
			adjacentLocations: currentMap.locations.adjacentTo || [], // Ids of adjacent rooms
			currentLocationId: 0, // Id of current location
			currentMap: currentMap, // A map loaded from data and injected with transient values
			exploredLocations: [0], // Ids of explored rooms
			selectedLocationId: 0 // Id of targeted location
		}
	}


	// @todo, consider eliminating this
	initializeMap = (mapId) => {
		let currentMap = getMapData(mapId);
		// modifying map might not be needed if we set the state right
		// currentMap.locations = currentMap.locations.map(location => {
		// 	let newLoc = {...location};
		// 	newLoc.isCurrentLoc = newLoc.id === currentLocationId;
		// 	newLoc.isAdjacent = currentMap.locations[currentLocationId].adjacentTo && currentMap.locations[currentLocationId].adjacentTo.includes(newLoc.id);
		// 	newLoc.isExplored = newLoc.id === currentLocationId;
		// 	return newLoc;
		// });
		return currentMap;
	}

	// change maps and reset all state
	goToMap = (mapId, locId = 0) => {
		const newMap = this.initializeMap(mapId);
		const newAdjacentLocs = newMap.locations[locId].adjacentTo || [];
		this.setState({
			adjacentLocations: newAdjacentLocs,
			currentLocationId: locId, 
			currentMap: newMap,
			exploredLocations: [locId],
			selectedLocationId: 0
		});
	}

	// reveal contents of a list of rooms
	exploreLocations = (locIdArray = []) => {
		const newExploredArray = [...this.state.exploredLocations, ...locIdArray];
		this.setState({exploredLocations: newExploredArray});
	}

	// Updates currentLocationId and currentMap's current & adjacent flags
	moveToLocation = (locId) => {
		const { currentMap } = this.state;
		const newAdjacentLocs = currentMap.locations[locId].adjacentTo || [];
		this.setState({currentLocationId: locId, adjacentLocations: newAdjacentLocs});
	}

	// Most often these are done at the same time
	moveToAndExploreLoc = (locId) => {
		this.exploreLocations([locId]);
		this.moveToLocation(locId);
	}

	// change the targeted area
	selectLocation = (locId = 0) => {
		this.setState({selectedLocationId: locId});
	}

	render() {
		return (
			<ExplorationContext.Provider
				value={{
					...this.state,
					exploreLocations: this.exploreLocations,
					goToMap: this.goToMap,
					moveToLocation: this.moveToLocation,
					moveToAndExploreLoc: this.moveToAndExploreLoc,
					selectLocation: this.selectLocation,
				}}
			>
				{this.props.children}
			</ExplorationContext.Provider>
		);
	}
}