import React, { PureComponent } from 'react';
import CharacterContext from '../../../context/CharacterContext';
import TurnItem from '../TurnItem/TurnItem';
import './InitPhase.scss';

export default class InitPhase extends PureComponent {
	static contextType = CharacterContext;

	render() {
		const { currSpeedCost, isCurrentPhase, phase } = this.props;
		const { characters, currInit, toggleCharacterMenu } = this.context;
		return (
			<div className='initPhase'>
				{characters.map((character, index) =>
					<TurnItem
						key={`init${phase}-${character.meta.charId}`}
						character={character}
						currSpeedCost={currSpeedCost}
						initiative={index}
						isCurrentTurn={isCurrentPhase && index === currInit}
						isPreviousTurn={isCurrentPhase && index < currInit}
						toggleCharacterMenu={toggleCharacterMenu}
					/>
				)}
			</div>
		);
	}
}
