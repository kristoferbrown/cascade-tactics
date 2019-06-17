import { executeAttack } from './attackUtils';

let uncontrolledTurnTimer = null;

export function executeAiTurn(currentCharacter, animateAttack, dealDamage, deductSpeed, getAdjacentCharacters, callback) {
	console.log('excuting ai turn');
		const adjacentCharacters = getAdjacentCharacters();
		if (currentCharacter.meta.isHostile && adjacentCharacters.length) {
			const targetCharacter = adjacentCharacters[0].character;
			const targetHex = targetCharacter.currentHexLoc;
			const targetElement = document.getElementsByClassName(`hexTile_${targetHex.q}_${targetHex.r}_${targetHex.s}`)[0];
			const fakeEvent = { currentTarget: targetElement };
			//this.computeHover(fakeEvent, null, targetHex, targetCharacter);
			const attackResults = executeAttack(currentCharacter, targetCharacter, animateAttack, () => {}, dealDamage);
			// this.setState({ 
			// 	aiAttackResults: attackResults,
			// 	targetedHex: targetHex,
			// 	targetedHexContains: targetCharacter
			//  })
			uncontrolledTurnTimer = setTimeout(() => {
				//this.endTurn(); not needed since mapmenu results do this on timeout
				console.log('ending ai attack turn')
				// this.setState({aiTurnInProgress: -1, aiAttackResults: null});
				callback();
			}, 2400);
		} else {
			uncontrolledTurnTimer = setTimeout(() => {
				console.log('just waiting');
				deductSpeed(currentCharacter.meta.charId, 2);
				callback();
			}, 2400);
		}
}