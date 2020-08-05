import React, { Component } from 'react';
import classNames from 'classnames';
import WorldMapRenderer from "../../content/maps/worldMap";
import './ProjectScreen.scss';

export default class ProjectScreen extends Component {
	state = {
		currentLayer: 'physical'
	}

	render() {
		const { currentLayer } = this.state;
		return (
			<div className="projectScreen">
				<div className="projectScreen_leftColumn">

				<div className="projectScreen_section">
					<div className="projectScreen_header">Layers</div>
					<div 
						className={classNames({
							'projectScreen_contentRowTab': true,
							'projectScreen_currentLayer': currentLayer === 'physical',
						})}
						onClick={() => this.setState({currentLayer: 'physical'})}
					>
						Physical World
					</div>
					<div 
						className={classNames({
							'projectScreen_contentRowTab': true,
							'projectScreen_currentLayer': currentLayer === 'yau',
						})}
						onClick={() => this.setState({currentLayer: 'yau'})}
					>
						The Yau
					</div>
					<div 
						className={classNames({
							'projectScreen_contentRowTab': true,
							'projectScreen_currentLayer': currentLayer === 'simulation',
						})}
						onClick={() => this.setState({currentLayer: 'simulation'})}
					>
						The Simulation
					</div>
				</div>

				<div className="projectScreen_section">
					<div className="projectScreen_header">Resources</div>
					<div className="projectScreen_contentRow"><div>Cash:</div> <div>$9k</div></div>
					<div className="projectScreen_contentRow"><div>Substrate:</div> <div>4g</div></div>
					<div className="projectScreen_contentRow"><div>Chomatic Matter:</div> <div>1g</div></div>
					<div className="projectScreen_contentRow"><div>Flux-Pin Crystal:</div> <div>2g</div></div>
					<div className="projectScreen_contentRow"><div>Dynamic Mass:</div> <div>0g</div></div>
				</div>

				</div>
				<div className={classNames({
					'projectScreen_mapColumn': true,
					[currentLayer]: !!currentLayer,
				})}>
					<div className="projectScreen_mapContainer">
						<div className="projectScreen_mapPoint" style={{ left: '32%', top: '36%' }} />
						<div className="projectScreen_mapPoint" style={{ left: '52%', top: '57%' }} />
						<div className="projectScreen_mapPoint" style={{ left: '38%', top: '67%' }} />
						<div className="projectScreen_mapPoint" style={{ left: '68%', top: '24%' }} />
						<div className="projectScreen_mapPoint" style={{ left: '51%', top: '84%' }} />
						<WorldMapRenderer />
					</div>
				</div>
				<div className="projectScreen_rightColumn"></div>
			</div>
		);
	}
}