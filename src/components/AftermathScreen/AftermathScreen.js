import React, { Component } from 'react';
import CharacterContext from '../../context/CharacterContext';
import StatusTrack from '../Common/StatusTrack/StatusTrack'
import './AftermathScreen.scss';

export default class AftermathScreen extends Component {
	static contextType = CharacterContext;

	render() {
		const { characters } = this.context;
		return (
			<div className="aftermathScreen ">
				<div className="aftermathScreen_title">
					<div className="aftermathScreen_titleWord">Encounter</div>
					<div className="aftermathScreen_titleWord">Complete</div>
				</div>

				<div className="aftermathScreen_summary">Acquired $1k, 6g Substrate, 2g Flux-Pin Crystal, 1g Dynamic Mass, and 1g Chromatic Matter.</div>

				<div className="aftermathScreen_characterList">
					{ characters.map(character => 
						character.meta.isHostile ? null :
						<div className="aftermathScreen_characterColumn" key={`projectChar-${character.meta.charId}`}>
							<div className="aftermathScreen_portrait">{character.portraitRenderer()}</div>
							<div className="aftermathScreen_characterName">{character.meta.fullName}</div>

							<div className="aftermathScreen_charSection">
								<div className="aftermathScreen_charRow header">
									<div>Experience</div>
									<div className="basicButton dark">Use XP...</div>
								</div>
								{ character.styles.floating.assigned.map(floater => 
									<div className={`aftermathScreen_charRow fill_${floater} lightText`} key={`xp-${character.meta.charId}-${floater}`} >{`+1 ${floater} XP`}</div>
								)}
							</div>

							<div className="aftermathScreen_charSection">
								<div className="aftermathScreen_charRow header">
									<div>Ongoing Projects</div>
									<div className="aftermathScreen_dayCount"><span className="strong">{character.attributes.Willpower+1}</span> days available</div>
								</div>
								{ character.projects.map((project, index) =>
									<div className={`aftermathScreen_charRow`} key={`proj-${character.meta.charId}-${index}`} >
										<div className="aftermathScreen_subHeader">{project.label}</div>
										<div className="aftermathScreen_description">{project.description}</div>
										<div className="aftermathScreen_statusRow">
											<StatusTrack attribute={project.attribute} current={project.currentVal} maximum={project.goal} textLabel={' '} />
											<div className="basicButton dark">+1 Day</div>
										</div>
									</div>
								)}
							</div>

							<div className="aftermathScreen_charSection">
								<div className="aftermathScreen_charRow header">
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