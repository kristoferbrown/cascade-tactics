import React, { PureComponent } from 'react';
import CharacterContext from '../../../../context/CharacterContext';
import './ArtifactsScreen.scss';

export default class ArtifactsScreen extends PureComponent {
	static contextType = CharacterContext;
	render() {
		const { menuCharacter } = this.context;
		return (
			<div className={'ArtifactsScreen'}>
				char screen for {menuCharacter.meta.name}
			</div>
		);
	}
}
