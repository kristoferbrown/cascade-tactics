import React, { Component } from 'react';
import HexMap from '../HexMap/HexMap';
import InitTrack from '../InitTrack/InitTrack';
import { testCharacters } from '../../utils/testData';
import './CombatScreen.scss';

export default class CombatScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currChar: testCharacters[0], // Character object at current initiative
			currInit: 0, // Current turn in the current phase
			currPhase: 0, // Current phase in the current round
			currRound: 0, // Current combat round
			isUncontrolledTurn: false, // true while AI or delay is handling turn
		}
	}

	incrementInit = () => {
		const { currInit, currPhase } = this.state;
		let newInit = currInit
		let newPhase = currPhase;
		if ((currInit + 1) >= testCharacters.length) {
			newInit = 0;
			newPhase++;
		} else {
			newInit++;
		}
		let nextCharacter = {...testCharacters[newInit]};
		this.setState({
			currChar: nextCharacter,
			currInit: newInit,
			currPhase: newPhase,
		});
		return nextCharacter;
	}

	render() {
		const { currChar, currInit, currPhase } = this.state;
		return (
			<div className="combatScreen">
				<HexMap
					characters={testCharacters}
					currChar={currChar}
					incrementInit={this.incrementInit}
				/>
				<InitTrack
					characters={testCharacters}
					currInit={currInit}
					currPhase={currPhase}
				/>
			</div>
		);
	}
}