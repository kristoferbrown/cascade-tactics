import React, { PureComponent } from 'react';
import CharacterContext from '../../../../context/CharacterContext';
import SkillsSection from './SkillsSection/SkillsSection';
import './CharacterScreen.scss';

export default class CharacterScreen extends PureComponent {
	static contextType = CharacterContext;
	render() {
		const { menuCharacter } = this.context;
		console.log(menuCharacter)
		return (
			<div className={'CharacterScreen'}>

				{ menuCharacter.portraitRenderer && (
					<div className={'CharacterScreen_portrait'}>
						{menuCharacter.portraitRenderer()}
					</div>
				)}

				<div className={'CharacterScreen_rightColumn'}>

					<div className={'CharacterScreen_skillsHeader headerText'}>Skills</div>
					<SkillsSection />

					<div className={'CharacterScreen_statusSection'}>
						<div className={'CharacterScreen_statusHeader headerText'}>Status</div>
						<div className={'basicText'}>Speed</div>
						<div className={'basicText'}>Endurance</div>
						<div className={'basicText'}>Entanglement</div>
					</div>
				</div>
			</div>
		);
	}
}
