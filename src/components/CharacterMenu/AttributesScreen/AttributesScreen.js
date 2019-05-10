import React, { PureComponent } from 'react';
import CharacterContext from '../../../context/CharacterContext';
import Nonogram from '../../CharContent/Nonogram/Nonogram';
import './AttributesScreen.scss';

export default class AttributesScreen extends PureComponent {
	static contextType = CharacterContext;
	render() {
		const { menuCharacter } = this.context;
		return (
			<div className={'AttributesScreen'}>
				<Nonogram attributes={menuCharacter.attributes} isVisible={true} />
				<div className={'AttributesScreen_ListColumn'}></div>
			</div>
		);
	}
}
