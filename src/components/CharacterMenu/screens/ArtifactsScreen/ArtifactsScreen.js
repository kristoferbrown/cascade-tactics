import React, { PureComponent } from 'react';
import CharacterContext from '../../../../context/CharacterContext';
import './ArtifactsScreen.scss';

export default class ArtifactsScreen extends PureComponent {
	static contextType = CharacterContext;
	render() {
		// const { menuCharacter } = this.context;
		return (
			<div className={'ArtifactsScreen'}>
				{/* <div className={'ArtifactsScreen_Header'}>Resources</div>
				<div className={'ArtifactsScreen_Text'}>Substrate: 0</div>
				<div className={'ArtifactsScreen_Text'}>Covalent Matter: 0</div>
				<div className={'ArtifactsScreen_Text'}>Dynamic Mass: 0</div>
				<div className={'ArtifactsScreen_Text'}>Strong Interaction Material: 0</div> */}
			</div>
		);
	}
}
