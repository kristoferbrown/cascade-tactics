import React, { useContext } from 'react';
import classNames from 'classnames';
import ExplorationContext from '../../../context/ExplorationContext';
import './LocationMap.scss';


export default function LocationMap(props) {
	const { 
		adjacentLocations,
		currentLocationId,
		currentMap,
		exploredLocations,
		selectLocation,
		selectedLocationId
	} = useContext(ExplorationContext);
	const { currentLayer } = props;

	return (
		<div 
			className={classNames({
				'locationMap_mapColumn': true,
				[currentLayer]: !!currentLayer,
			})}
			onClick={() => selectLocation(currentLocationId)}
			style={{ background: currentMap.background }}
		>
			<div className="locationMap_mapContainer">
				{ currentMap.locations.map(location => (
					(location.left && location.layer === currentLayer) ? 
					<div
						className={classNames({
							'locationMap_locationContainer': true,
							'locationMap_regionContainer': !!location.renderer,
							'locationMap_currentLocation': location.id === currentLocationId,
							'locationMap_adjacentLocation': adjacentLocations.includes(location.id),
							'locationMap_selectedLocation': location.id === selectedLocationId,
							'locationMap_exploredLocations': exploredLocations.includes(location.id),
						})}
						key={`location_${currentMap.id}_${location.id}`}
						onClick={e => {e.stopPropagation(); selectLocation(location.id);}}
						style={{ 
							left: `${location.left}%`, 
							top: `${location.top}%`,
							height: location.height ? `${location.height}%` : 'auto',
							width: location.width ? `${location.width}%` : 'auto',
						}}
					>
						{ !!location.renderer ? 
							location.renderer() :
							<div className="locationMap_mapPoint" /> 
						}
					</div>
					: null
				))}
				<currentMap.renderer />
			</div>
		</div>
	);
}