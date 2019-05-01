import React, { Component } from 'react';
import CharacterContext from '../../context/CharacterContext';
import CharacterMenu from '../CharacterMenu/CharacterMenu';
import HexMap from '../HexMap/HexMap';
import InitTrack from '../InitTrack/InitTrack';
import './CombatScreen.scss';

export default class CombatScreen extends Component {
	static contextType = CharacterContext;
	constructor(props) {
		super(props);
		this.state = {
			currSpeedCost: 0, // Speed cost of currently selected action
		}
	}

	render() {
		const { currSpeedCost } = this.state;
		const { showCharacterMenu } = this.context;
		return (
			<div className="combatScreen">
				{ showCharacterMenu && <CharacterMenu /> }
				<HexMap currSpeedCost={currSpeedCost} setSpeedCost={cost => {this.setState({currSpeedCost: cost})}} />
				<InitTrack currSpeedCost={currSpeedCost} />
			</div>
		);
	}
}