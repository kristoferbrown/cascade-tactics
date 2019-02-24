import React, { Component } from 'react';
import CharacterContext from '../../../context/CharacterContext';
import TurnItem from '../TurnItem/TurnItem';
import './InitPhase.scss';

export default class InitPhase extends Component {
	static contextType = CharacterContext;

	render() {
		const { currSpeedCost, isCurrentPhase, phase } = this.props;
		const { characters, currInit } = this.context;
		return (
			<div className='initPhase'>
				{characters.map((character, index) =>
					<TurnItem
						key={`init${phase}-${character.meta.name}`}
						character={character}
						currSpeedCost={currSpeedCost}
						initiative={index}
						isCurrentTurn={isCurrentPhase && index === currInit}
						isPreviousTurn={isCurrentPhase && index < currInit}
					/>
				)}
			</div>
		);
	}
}
