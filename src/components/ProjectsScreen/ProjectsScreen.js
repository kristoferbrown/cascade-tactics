import React, { Component } from 'react';
import CharacterContext from '../../context/CharacterContext';
import StatusTrack from '../Common/StatusTrack/StatusTrack'
import './ProjectsScreen.scss';

export default class ProjectsScreen extends Component {
	static contextType = CharacterContext;

	render() {
		const { characters } = this.context;
		return (
			<div className="projectsScreen">
				<div className="projectsScreen_title">
					<div className="projectsScreen_titleWord">Encounter</div>
					<div className="projectsScreen_titleWord">Complete</div>
				</div>

				<div className="projectsScreen_summary">Acquired $1k, 6g Substrate, 2g Flux-Pin Crystal, 1g Dynamic Mass, and 1g Chromatic Matter.</div>

				<div className="projectsScreen_characterList">
					{ characters.map(character => 
						character.meta.isHostile ? null :
						<div className="projectsScreen_characterColumn" key={`projectChar-${character.meta.charId}`}>
							<div className="projectsScreen_portrait">{character.portraitRenderer()}</div>
							<div className="projectsScreen_characterName">{character.meta.fullName}</div>

							<div className="projectsScreen_charSection">
								<div className="projectsScreen_charRow header">
									<div>Experience</div>
									<div className="basicButton dark">Use XP...</div>
								</div>
								{ character.styles.floating.assigned.map(floater => 
									<div className={`projectsScreen_charRow fill_${floater} lightText`} key={`xp-${character.meta.charId}-${floater}`} >{`+1 ${floater} XP`}</div>
								)}
							</div>

							<div className="projectsScreen_charSection">
								<div className="projectsScreen_charRow header">
									<div>Ongoing Projects</div>
									<div className="projectsScreen_dayCount"><span className="strong">{character.attributes.Willpower+1}</span> days available</div>
								</div>
								{ character.projects.map((project, index) =>
									<div className={`projectsScreen_charRow`} key={`proj-${character.meta.charId}-${index}`} >
										<div className="projectsScreen_subHeader">{project.label}</div>
										<div className="projectsScreen_description">{project.description}</div>
										<div className="projectsScreen_statusRow">
											<StatusTrack attribute={project.attribute} current={project.currentVal} maximum={project.goal} textLabel={' '} />
											<div className="basicButton dark">+1 Day</div>
										</div>
									</div>
								)}
							</div>

							<div className="projectsScreen_charSection">
								<div className="projectsScreen_charRow header">
									<div>New Projects</div>
									<div className="basicButton dark">Start...</div>
								</div>
							</div>

						</div>
					)}
				</div>
			</div>
		);
	}
}