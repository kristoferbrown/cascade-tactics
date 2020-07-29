import React, { Component } from 'react';
import CharacterContext from '../../context/CharacterContext';
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
				<div className="projectsScreen_characterList">
					{ characters.map(character => 
						character.meta.isHostile ? null :
						<div className="projectsScreen_characterColumn" key={`projectChar-${character.meta.charId}`}>
							<div className="projectsScreen_portrait">{character.portraitRenderer()}</div>
							<div className="projectsScreen_characterName">{character.meta.fullName}</div>

							<div className="projectsScreen_charSection">
								<div className="projectsScreen_charRow header">Experience</div>
								{ character.styles.floating.assigned.map(floater => 
									<div className={`projectsScreen_charRow fill_${floater} lightText`} >{`+1 ${floater} XP`}</div>
								)}
							</div>

							<div className="projectsScreen_charSection">
								<div className="projectsScreen_charRow header">Projects</div>
								<div className="projectsScreen_charRow">Project 1</div>
								<div className="projectsScreen_charRow">Project 2</div>
								<div className="projectsScreen_charRow">Project 3</div>
								<div className="projectsScreen_charRow">Project 4</div>
								<div className="projectsScreen_charRow">Project 5</div>
								<div className="projectsScreen_charRow">Project 6</div>
								<div className="projectsScreen_charRow">Project 7</div>
								<div className="projectsScreen_charRow">Project 8</div>
								<div className="projectsScreen_charRow">Project 9</div>
								<div className="projectsScreen_charRow">Project 0</div>
								<div className="projectsScreen_charRow">Project 1</div>
								<div className="projectsScreen_charRow">Project 2</div>
								<div className="projectsScreen_charRow">Project 3</div>
								<div className="projectsScreen_charRow">Project 4</div>
								<div className="projectsScreen_charRow">Project 5</div>
								<div className="projectsScreen_charRow">Project 6</div>
								<div className="projectsScreen_charRow">Project 7</div>
								<div className="projectsScreen_charRow">Project 8</div>
								<div className="projectsScreen_charRow">Project 9</div>
								<div className="projectsScreen_charRow">Project 0</div>
								<div className="projectsScreen_charRow">Project 1</div>
								<div className="projectsScreen_charRow">Project 2</div>
								<div className="projectsScreen_charRow">Project 3</div>
								<div className="projectsScreen_charRow header">Start new project...</div>
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}