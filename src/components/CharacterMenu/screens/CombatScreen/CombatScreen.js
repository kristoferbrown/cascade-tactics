import React, { PureComponent } from 'react';
import CharacterContext from '../../../../context/CharacterContext';
import './CombatScreen.scss';

export default class CombatScreen extends PureComponent {
	static contextType = CharacterContext;
	render() {
		const { menuCharacter } = this.context;
		return (
			<div className={'CombatScreen'}>
				com screen for {menuCharacter.meta.name}
			</div>
		);
	}
}
