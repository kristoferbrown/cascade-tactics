import React, { Component } from 'react';
import classNames from 'classnames';
import './LocationMap.scss';

export default class LocationMap extends Component {
	render() {
		const { currentLayer, map, setLocation } = this.props;

		return (
			<div 
				className={classNames({
					'projectScreen_mapColumn': true,
					[currentLayer]: !!currentLayer,
				})}
				onClick={() => setLocation(map.locations[0])}
			>
				<div className="projectScreen_mapContainer">
					{ map.locations.map(location => (
						(location.left && location.layer === currentLayer) ? 
						<div 
							className="projectScreen_mapPoint"
							onClick={e => {e.stopPropagation(); setLocation(location);}}
							style={{ left: `${location.left}%`, top: `${location.top}%` }}
						/>
						: null
					))}
					<map.renderer />
				</div>
			</div>
		);
	}
}