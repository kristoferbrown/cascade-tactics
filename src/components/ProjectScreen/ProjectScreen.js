import React, { Component } from 'react';
import classNames from 'classnames';
import WorldMapRenderer from "../../content/maps/worldMap";
import { locationList } from "../../content/maps/locationList";
import './ProjectScreen.scss';

export default class ProjectScreen extends Component {
	state = {
		currentLayer: 'physical',
		currentLocation: 0
	}

	render() {
		const { currentLayer, currentLocation } = this.state;
		const currLoc = locationList[currentLocation]
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
				<div 
					className={classNames({
						'projectScreen_mapColumn': true,
						[currentLayer]: !!currentLayer,
					})}
					onClick={() => this.setState({currentLocation: 0})}
				>
					<div className="projectScreen_mapContainer">
						{ locationList.map(location => (
							(location.left && location.layer === currentLayer) ? 
							<div 
								className="projectScreen_mapPoint"
								onClick={e => {e.stopPropagation(); this.setState({currentLocation: location.id})}}
								style={{ left: `${location.left}%`, top: `${location.top}%` }}
							/>
							: null
						))}
						<WorldMapRenderer />
					</div>
				</div>

				<div className="projectScreen_rightColumn">

					<div className="projectScreen_section">
						<div className="projectScreen_header">{currLoc.name}</div>
						<div className="projectScreen_contentRow">{currLoc.description}</div>
					</div>

					{ !!currLoc.expeditions.length && <div className="projectScreen_section">
						<div className="projectScreen_subHeader">Expeditions</div>
						{currLoc.expeditions.map(expedition => <div className="projectScreen_contentRow">{expedition}</div>)}
					</div>}

					{ !!currLoc.contacts.length && <div className="projectScreen_section">
						<div className="projectScreen_subHeader">Contacts</div>
						{currLoc.contacts.map(contact => <div className="projectScreen_contentRow">{contact}</div>)}
					</div>}

					{ !!currLoc.newProjects.length && <div className="projectScreen_section">
						<div className="projectScreen_subHeader">New Projects</div>
						{currLoc.newProjects.map(project => <div className="projectScreen_contentRow">{project}</div>)}
					</div>}

					{ !!currLoc.ongoingProjects.length && <div className="projectScreen_section">
						<div className="projectScreen_subHeader">Ongoing Projects</div>
						{currLoc.ongoingProjects.map(project => <div className="projectScreen_contentRow">{project}</div>)}
					</div>}

				</div>
			</div>
		);
	}
}