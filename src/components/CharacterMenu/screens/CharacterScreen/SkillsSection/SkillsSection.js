import React, { PureComponent } from 'react';
import CharacterContext from '../../../../../context/CharacterContext';

export default class CharacterScreen extends PureComponent {
	static contextType = CharacterContext;
	render() {
		const { menuCharacter } = this.context;
		return (
			<div className={'CharacterScreen_skillsSection'}>

				<div className={'CharacterScreen_skillRow fill_Strength'}>
					<div className={'CharacterScreen_skillItem'}>
						Unarmed Combat: {menuCharacter.skills.Unarmed}-{menuCharacter.skills.Unarmed+menuCharacter.attributes.Strength}
					</div>
					<div className={'CharacterScreen_skillItem'}>
						Athletics: {menuCharacter.skills.Athletics}-{menuCharacter.skills.Athletics+menuCharacter.attributes.Strength}
					</div>
				</div>
				<div className={'CharacterScreen_skillRow fill_Finesse'}>
					<div className={'CharacterScreen_skillItem'}>
						Melee Combat: {menuCharacter.skills.Melee}-{menuCharacter.skills.Melee+menuCharacter.attributes.Finesse}
					</div>
					<div className={'CharacterScreen_skillItem'}>
						Stealth: {menuCharacter.skills.Stealth}-{menuCharacter.skills.Stealth+menuCharacter.attributes.Finesse}
					</div>
				</div>
				<div className={'CharacterScreen_skillRow fill_Perception'}>
					<div className={'CharacterScreen_skillItem'}>
						Alertness: {menuCharacter.skills.Alertness}-{menuCharacter.skills.Alertness+menuCharacter.attributes.Perception}
					</div>
					<div className={'CharacterScreen_skillItem'}>
						Ranged Combat: {menuCharacter.skills.Ranged}-{menuCharacter.skills.Ranged+menuCharacter.attributes.Perception}
					</div>
				</div>

				<div className={'CharacterScreen_skillRow fill_Stamina'}>
					<div className={'CharacterScreen_skillItem'}>
						Toughness: {menuCharacter.skills.Toughness}-{menuCharacter.skills.Toughness+menuCharacter.attributes.Stamina}
					</div>
				</div>
				<div className={'CharacterScreen_skillRow fill_Agility'}>
					<div className={'CharacterScreen_skillItem'}>
						Defense: {menuCharacter.skills.Defense}-{menuCharacter.skills.Defense+menuCharacter.attributes.Agility}
					</div>
				</div>
				<div className={'CharacterScreen_skillRow fill_Wits'}>
					<div className={'CharacterScreen_skillItem'}>
						Initiative: {menuCharacter.skills.Initiative}-{menuCharacter.skills.Initiative+menuCharacter.attributes.Wits}
					</div>
				</div>
				<div className={'CharacterScreen_skillRow fill_Wits'}>
					<div className={'CharacterScreen_skillItem'}>
						Investigate: {menuCharacter.skills.Investigate}-{menuCharacter.skills.Investigate+menuCharacter.attributes.Wits}
					</div>
				</div>



			</div>
		);
	}
}
