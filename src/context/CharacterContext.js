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
			let newLocation = {...newCharacter.startingHex}
			newCharacter.currentRange = newCharacter.attributes.Agility+1;
			newCharacter.currentSpeed = newCharacter.attributes.Agility+3;
			newCharacter.currentHexLoc = newLocation;
			// TODO: make current location work...
			console.log(newCharacter.currentHexLoc, newCharacter.startingHex);
			console.log(newCharacter);
			return newCharacter;
		});
		this.state = {
			characters: currentCharacters, // Characters loaded from data and injected with transient values
			currentCharacter: currentCharacters[0], // Character object at current initiative
			currInit: 0,
			currPhase: 0
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
		if ((currInit + 1) >= characters.length) {
			newInit = 0;
			newPhase++;
		} else {
			newInit++;
		}
		let nextCharacter = characters[newInit];
		debugger;
		this.setState({
			currChar: nextCharacter,
			currInit: newInit,
			currPhase: newPhase,
		});
		return nextCharacter;
	}

	setCharacterLocation = (charId, pixelLoc, hexLoc) => {
		// TODO this also needs to set hexLoc
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

	render() {
		return (
			<CharacterContext.Provider
				value={{
					...this.state,
					deductSpeed: this.deductSpeed,
					getCharById: this.getCharById,
					incrementInit: this.incrementInit,
					setCharacterLocation: this.setCharacterLocation
				}}
			>
				{this.props.children}
			</CharacterContext.Provider>
		);
	}
}