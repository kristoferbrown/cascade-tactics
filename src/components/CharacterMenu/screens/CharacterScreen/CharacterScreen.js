import React, { PureComponent } from 'react';
import CharacterContext from '../../../../context/CharacterContext';
import './CharacterScreen.scss';

export default class CharacterScreen extends PureComponent {
	static contextType = CharacterContext;
	render() {
		const { menuCharacter } = this.context;
		return (
			<div className={'CharacterScreen'}>

				{ menuCharacter.portraitRenderer && (
					<div className={'CharacterScreen_portrait'}>
						{menuCharacter.portraitRenderer()}
					</div>
				)}

				<div className={'CharacterScreen_rightColumn'}>

					<div className={'CharacterScreen_skillsSection'}>
						<div className={'CharacterScreen_skillsHeader headerText'}>Skills</div>
					</div>

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
