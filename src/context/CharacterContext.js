import React, { PureComponent } from 'react';
import { testCharacters } from '../utils/testData';

const CharacterContext = React.createContext();
export default CharacterContext;

export class CharacterProvider extends PureComponent {
	constructor(props) {
		super(props);
		// Populate characters loaded from data with their transient and derived values
		const currentCharacters = testCharacters.map(character => {
			let newCharacter = {...character};
			newCharacter.currentRange = newCharacter.attributes.Agility+1;
			newCharacter.currentSpeed = newCharacter.attributes.Agility+3;
			return newCharacter;
		});
		this.state = {
			characters: currentCharacters, // Characters loaded from data and injected with transient values
			currentCharacter: currentCharacters[0], // Character object at current initiative
			currInit: 0,
			currPhase: 0,
			currRound: 1
		}
	}

	deductSpeed = (charId, value) => {
		const { characters } = this.state;
		let newCharacters = [...characters];
		newCharacters.forEach(character => {
			if (character.meta.charId === charId) {
				character.currentRange = character.currentRange-value;
				character.currentSpeed = character.currentSpeed-value;
			}
		});
		this.setState({
			characters: newCharacters
		});
	}

	getCharById = (charId) => {
		const { characters } = this.state;
		return characters.find(character => character.meta.charId === charId);
	}

	incrementInit = () => {
		const { characters, currInit, currPhase } = this.state;
		let newInit = currInit;
		let newPhase = currPhase;
		let nextCharacter = null;

		// loop until we find the next character with speed
		while (!nextCharacter) {
			newInit++;
			if (newInit >= characters.length) {
				// we need to move to next phase
				newInit = 0;
				newPhase++;
			}

			if (characters[newInit].currentSpeed > 0) {
				// we found the next character
				nextCharacter = characters[newInit];
			}

			if (newPhase > (currPhase + 1)) {
				// no one with speed was found, start a new round!
				newInit = 0;
				newPhase = 0;
				nextCharacter = characters[0];
				this.startNewRound();
			}
		}

		this.setState({
			currentCharacter: nextCharacter,
			currInit: newInit,
			currPhase: newPhase,
		});
		return nextCharacter;
	}

	resetRange = (charId) => {
		const { characters } = this.state;
		let newCharacters = [...characters];
		newCharacters.forEach(character => {
			if (character.meta.charId === charId) {
				const baseRange = character.attributes.Agility+1;
				character.currentRange = character.currentSpeed < baseRange ? character.currentSpeed : baseRange;
			}
		});
		this.setState({
			characters: newCharacters
		});
	}

	setCharacterLocation = (charId, pixelLoc, hexLoc) => {
		const { characters } = this.state;
		let updatedCharacter;
		let newCharacters = [...characters];
		 newCharacters.forEach(character => {
			if (character.meta.charId === charId) {
				character.pixelLoc = pixelLoc;
				character.currentHexLoc = hexLoc;
				updatedCharacter = character;
			}
		});
		this.setState({
			characters: newCharacters
		});
		return updatedCharacter;
	}

	startNewRound = () => {
		const { characters, currRound } = this.state;
		let newCharacters = [...characters];

		newCharacters.forEach(character => {
			const baseRange = character.attributes.Agility+1;
			const maxSpeed = character.attributes.Agility+3;
			character.currentSpeed = character.currentSpeed + character.attributes.Stamina + 3;
			if (character.currentSpeed > maxSpeed) {
				character.currentSpeed = maxSpeed;
			}
			character.currentRange = character.currentSpeed < baseRange ? character.currentSpeed : baseRange;
		});

		this.setState({
			characters: newCharacters,
			currRound: currRound+1
		});
	}

	render() {
		return (
			<CharacterContext.Provider
				value={{
					...this.state,
					deductSpeed: this.deductSpeed,
					getCharById: this.getCharById,
					incrementInit: this.incrementInit,
					resetRange: this.resetRange,
					setCharacterLocation: this.setCharacterLocation
				}}
			>
				{this.props.children}
			</CharacterContext.Provider>
		);
	}
}