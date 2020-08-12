import React, { Component } from 'react';
import classNames from 'classnames';
import './LocationMap.scss';

export default class LocationMap extends Component {
	render() {
		const { currentLayer, map, setLocation } = this.props;

		return (
			<div 
				className={classNames({
					'locationMap_mapColumn': true,
					[currentLayer]: !!currentLayer,
				})}
				onClick={() => setLocation(map.locations[0])}
			>
				<div className="locationMap_mapContainer">
					{ map.locations.map(location => (
						(location.left && location.layer === currentLayer) ? 
						<div
							className={classNames({
								'locationMap_locationContainer': true,
								'locationMap_regionContainer': !!location.renderer,
							})}
							onClick={e => {e.stopPropagation(); setLocation(location);}}
							style={{ 
								left: `${location.left}%`, 
								top: `${location.top}%`,
								height: location.height ? `${location.height}%` : 'auto',
								width: location.width ? `${location.width}%` : 'auto',
							}}
						>
							{ !!location.renderer ? location.renderer() : <div className="locationMap_mapPoint" /> }
						</div>
						: null
					))}
					<map.renderer />
				</div>
			</div>
		);
	}
}