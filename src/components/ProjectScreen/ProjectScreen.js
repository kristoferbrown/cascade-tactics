import React, { Component } from 'react';
import classNames from 'classnames';
import ExplorationContext from '../../context/ExplorationContext';
import LocationMap from './LocationMap/LocationMap'
import StatusTrack from '../Common/StatusTrack/StatusTrack'
import './ProjectScreen.scss';

export default class ProjectScreen extends Component {
	static contextType = ExplorationContext;

	state = {
		currentLayer: 'physical',
		currentLocation: null
	}

	componentDidMount() {
		this.context.goToMap(this.props.mapId);
	}

	componentDidUpdate(prevProps) {
		const { mapId } = this.props;
		if (prevProps.mapId !== mapId) {
			this.context.goToMap(mapId);
		}
	}

	render() {
		const { currentLocationId, currentMap } = this.context;
		const { showLeftColumn, showTimeline } = this.props;
		const { currentLayer  } = this.state;
		const currLoc = currentMap.locations[currentLocationId];
		return (
			<div className="projectScreen">
				{showTimeline && 
				<div className="projectScreen_timeline" >
					<StatusTrack
						attribute="Wits"
						current={18}
						maximum={30}
						textLabel={'Minutes until perimeter breach: '}
					/>
				</div>
				}

				{showLeftColumn && <div className="projectScreen_leftColumn">

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
				</div>}

				<LocationMap currentLayer={currentLayer} />

				<div className="projectScreen_rightColumn">

					<div className="projectScreen_section">
						<div className="projectScreen_header">{currLoc.name}</div>
						<div className="projectScreen_contentRow">{currLoc.description}</div>
					</div>

					{ !!currLoc.expeditions.length && <div className="projectScreen_section">
						<div className="projectScreen_subHeader">Expeditions</div>
						{currLoc.expeditions.map(expedition => <div key={`proj_${currentMap.id}_${currLoc.id}_${expedition}`} className="projectScreen_contentRow">{expedition}</div>)}
					</div>}

					{ !!currLoc.contacts.length && <div className="projectScreen_section">
						<div className="projectScreen_subHeader">Contacts</div>
						{currLoc.contacts.map(contact => <div key={`proj_${currentMap.id}_${currLoc.id}_${contact}`} className="projectScreen_contentRow">{contact}</div>)}
					</div>}

					{ !!currLoc.newProjects.length && <div className="projectScreen_section">
						<div className="projectScreen_subHeader">New Projects</div>
						{currLoc.newProjects.map(project => <div key={`proj_${currentMap.id}_${currLoc.id}_${project}`} className="projectScreen_contentRow">{project}</div>)}
					</div>}

					{ !!currLoc.ongoingProjects.length && <div className="projectScreen_section">
						<div className="projectScreen_subHeader">Ongoing Projects</div>
						{currLoc.ongoingProjects.map(project => <div key={`proj_${currentMap.id}_${currLoc.id}_${project}`} className="projectScreen_contentRow">{project}</div>)}
					</div>}

				</div>
			</div>
		);
	}
}