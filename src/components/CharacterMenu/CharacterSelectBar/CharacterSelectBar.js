import React, { PureComponent } from 'react';
import CharacterContext from '../../../context/CharacterContext';
import './CharacterSelectBar.scss';

export default class CharacterSelectBar extends PureComponent {
	static contextType = CharacterContext;
	render() {
		const { menuCharacter, incrementMenuChar } = this.context;
		return (
			<div className={'CharacterSelectBar'}>
				<div onClick={() => incrementMenuChar(false)} className={'CharacterSelectBar_navArrow CharacterSelectBar_previous'}>&lt;</div>
				<div className={'CharacterSelectBar_currentCharacter'}>{menuCharacter.meta.fullName}</div>
				<div onClick={() => incrementMenuChar(true)} className={'CharacterSelectBar_navArrow CharacterSelectBar_next'}>&gt;</div>
			</div>
		);
	}
}
