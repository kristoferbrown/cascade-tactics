import React, { Component } from 'react';
import TurnItem from '../TurnItem/TurnItem';
import './InitPhase.scss';

export default class InitPhase extends Component {
	render() {
		const { characters, currInit, currSpeedCost, isCurrentPhase, phase } = this.props;
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