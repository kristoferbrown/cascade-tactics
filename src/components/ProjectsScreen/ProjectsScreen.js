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
								<div className="projectsScreen_charRow header">Experience</div>
								{ character.styles.floating.assigned.map(floater => 
									<div className={`projectsScreen_charRow fill_${floater} lightText`} key={`xp-${character.meta.charId}-${floater}`} >{`+1 ${floater} XP`}</div>
								)}
							</div>

							<div className="projectsScreen_charSection">
								<div className="projectsScreen_charRow header">Projects</div>
								{ character.projects.map((project, index) =>
									<div className={`projectsScreen_charRow`} key={`proj-${character.meta.charId}-${index}`} >
										<StatusTrack attribute={project.attribute} current={project.currentVal} maximum={project.goal} textLabel={project.label} />
										
									</div>
								)}
							</div>

							<div className="projectsScreen_charSection">
								<div className="projectsScreen_charRow header">Start new project...</div>
							</div>

						</div>
					)}
				</div>
			</div>
		);
	}
}