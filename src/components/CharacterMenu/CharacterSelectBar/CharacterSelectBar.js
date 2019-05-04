import React, { PureComponent } from 'react';
import CharacterContext from '../../../context/CharacterContext';
import './CharacterSelectBar.scss';

export default class CharacterSelectBar extends PureComponent {
	static contextType = CharacterContext;
	render() {
		const { menuCharacter, characters } = this.context;
		return (
			<div className={'CharacterSelectBar'}>
			</div>
		);
	}
}
