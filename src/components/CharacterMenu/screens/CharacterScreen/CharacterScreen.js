import React, { PureComponent } from 'react';
import CharacterContext from '../../../../context/CharacterContext';
import StatusTrack from '../../../Common/StatusTrack/StatusTrack';
import './CharacterScreen.scss';

export default class CharacterScreen extends PureComponent {
	static contextType = CharacterContext;
	render() {
		const { menuCharacter } = this.context;
		const maxSpd = menuCharacter.attributes.Agility + 3;
		const maxEnd = menuCharacter.attributes.Stamina + 3;
		const maxEnt = menuCharacter.attributes.Willpower + menuCharacter.skills.Willpower.Guts + 3;
		const endWidth = maxEnd >= maxSpd ? 100 : maxEnd/maxSpd*100;
		return (
			<div className={'CharacterScreen'}>

				<div className={'CharacterScreen_skillsSection'}>
					{/* <div className={'CharacterScreen_skillsHeader headerText'}>Skills</div> */}
				</div>

				<div className={'CharacterScreen_rightColumn'}>

					{ menuCharacter.portraitRenderer && (
						<div className={'CharacterScreen_portrait'}>
							{menuCharacter.portraitRenderer()}
						</div>
					)}

					<div className={'CharacterScreen_statusSection'}>
						<div className={'CharacterScreen_statusHeader headerText'}>Status</div>
						<div className={'CharacterScreen_statusRow'}>
							<StatusTrack
								attribute="Agility"
								current={menuCharacter.currentSpeed}
								maximum={maxSpd}
								textLabel={'Speed'}
							/>
						</div>
						<div 
							className={'CharacterScreen_statusRow'}
							style={{width: `${endWidth}%`}}
						>
							<StatusTrack
								attribute="Stamina"
								current={maxEnd}
								maximum={maxEnd}
								textLabel={'Endurance'}
							/>
						</div>
						<div className={'CharacterScreen_statusRow CharacterScreen_statusRowSection'}>
							<StatusTrack
								attribute="Willpower"
								current={maxEnt}
								maximum={maxEnt}
								textLabel={'Entanglement'}
							/></div>
					</div>
				</div>
			</div>
		);
	}
}
