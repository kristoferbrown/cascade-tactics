import React, { PureComponent } from 'react';
import CharacterContext from '../../../../../context/CharacterContext';
import StatusTrack from '../../../../Common/StatusTrack/StatusTrack'
import './BodyLocationItem.scss';

export default class BodyLocationItem extends PureComponent {
	static contextType = CharacterContext;
	render() {
		const { label, loc } = this.props;
		const { menuCharacter } = this.context;
		const armor = menuCharacter.armor[loc];
		const health = menuCharacter.status.health[loc];
		console.log(armor)
		return (
			<div className={'BodyLocationItem'}>
				<div className="BodyLocationItem_header">{label}</div>
				<StatusTrack 
					attribute="Stamina"
					current={health[0]}
					maximum={health[1]}
					textLabel={'Health'}
				/>
				<div className="BodyLocationItem_armorHeader">{armor.name}</div>
				{!!armor.value && <div className="BodyLocationItem_armorValue">{armor.value} Armor</div>}
		{!!armor.penalty && <div className="BodyLocationItem_armorValue penalty">-{armor.penalty} {armor.penaltyType}</div>}
			</div>
		);
	}
}
