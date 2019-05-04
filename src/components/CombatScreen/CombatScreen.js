import React, { Component } from 'react';
import CharacterMenu from '../CharacterMenu/CharacterMenu';
import HexMap from '../HexMap/HexMap';
import InitTrack from '../InitTrack/InitTrack';
import './CombatScreen.scss';

export default class CombatScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currSpeedCost: 0, // Speed cost of currently selected action
		}
	}

	render() {
		const { currSpeedCost } = this.state;
		return (
			<div className="combatScreen">
				<CharacterMenu />
				<HexMap currSpeedCost={currSpeedCost} setSpeedCost={cost => {this.setState({currSpeedCost: cost})}} />
				<InitTrack currSpeedCost={currSpeedCost} />
			</div>
		);
	}
}