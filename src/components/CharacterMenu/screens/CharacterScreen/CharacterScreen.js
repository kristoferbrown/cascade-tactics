import React, { PureComponent } from 'react';
import CharacterContext from '../../../../context/CharacterContext';
import './CharacterScreen.scss';

export default class CharacterScreen extends PureComponent {
	static contextType = CharacterContext;
	render() {
		const { menuCharacter } = this.context;
		return (
			<div className={'CharacterScreen'}>
				char screen for {menuCharacter.meta.name}
			</div>
		);
	}
}
