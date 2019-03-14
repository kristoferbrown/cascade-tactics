import React, { Component } from 'react';
import CharacterContext from '../../../context/CharacterContext';
import { roll, rollSingleDie } from '../../../utils/diceUtils'
import './ActionList.scss';

export default class ActionList extends Component {
	static contextType = CharacterContext;

	state = {
		availableActions: []
	}

	componentDidMount() {
		this.calibrateActionList();
	}

	componentDidUpdate(prevProps) {
		if (this.props.targetedHex !== prevProps.targetedHex) {
			this.calibrateActionList();
		}
	}

	calibrateActionList() {
		const { currSpeedCost, endTurn, moveToTargetHex, targetedHex, targetedHexContains, targetedHexIndex } = this.props;
		const { currentCharacter, currPhase } = this.context;
		let newActionList = [];
		if (!!targetedHex && !targetedHexContains) {
			// The target space is empty, consider showing basic movement actions
			if (currSpeedCost < currentCharacter.currentRange && currSpeedCost < currentCharacter.currentSpeed) {
				// Only add simple move when there will be speed and range remaining
				newActionList.push({
					name: 'Move',
					description: 'Move here and continue moving.',
					actionMethod: () => {moveToTargetHex(null, null, targetedHex, targetedHexIndex)}
				});
			}
			newActionList.push({
				name: 'End Turn Here',
				description: 'Move here and end your turn.',
				actionMethod: () => {
					moveToTargetHex(null, null, targetedHex, targetedHexIndex);
					endTurn();
				}
			});

		} else if (!!targetedHex && targetedHexContains && targetedHexContains.meta) {
			// The target is a character, consider adding self actions or attacks
			if (targetedHexContains.meta.charId === currentCharacter.meta.charId) {
				// Target is self add end turn and maybe rest
				if (currPhase === 0) {
					newActionList.push({
						name: 'Rest',
						description: 'Take no turns this round to regain extra speed.',
						actionMethod: () => {
							console.log('resting...');
							endTurn();
						}
					});
				}
				newActionList.push({
					name: 'End Turn',
					description: 'Take no actions this turn.',
					actionMethod: () => {endTurn();}
				});
			} else if (!targetedHexContains.meta.isCpuControlled) {
				// Target is an ally, just add inspect
				newActionList.push({
					name: 'View Character',
					actionMethod: () => {console.log(targetedHexContains)}
				});
			} else if (targetedHexContains.meta.isHostile && !currentCharacter.hasMovedThisTurn) {
				// Target should be an enemy, determine attack params and add attack
				const attack = currentCharacter.currentAttack;
				const isRanged = attack.attribute === 'Perception';
				const attackDice = currentCharacter.attributes[attack.attribute];
				const attackSucc = currentCharacter.skills[attack.skill];
				const damageDice = !isRanged ? currentCharacter.attributes.Strength+attack.damDiceBonus : attack.damDiceBonus;
				const damageSucc = attack.damSuccBonus;
				const passiveDef = targetedHexContains.skills.Defense > 0 ? targetedHexContains.skills.Defense : 1;
				const dodgeDice = (isRanged ? targetedHexContains.attributes.Wits : targetedHexContains.attributes.Agility)+targetedHexContains.skills.Defense;
				const dodgeSucc = targetedHexContains.skills.Defense;

				newActionList.push({
					name: 'Attack',
					description: `To Hit: ${attackSucc}-${attackSucc+attackDice}, Damage: ${damageSucc}-${damageSucc+damageDice}, Defense: ${passiveDef}, Dodge: ${dodgeSucc}-${dodgeSucc+dodgeDice}`,
					actionMethod: () => {
						console.log(
							'to hit:', roll(attackDice,attackSucc),
							'vs pssve:', passiveDef,
							`or dodge ${dodgeDice}${dodgeSucc}:`, roll(dodgeDice,dodgeSucc),
							'loction:', rollSingleDie(),
							'damage:', roll(damageDice,damageSucc),
							);
						//endTurn();
					}
				});
			}
		}


		this.setState({availableActions: newActionList});
	}

	render() {
		const { targetedHex } = this.props;
		const { availableActions } = this.state;
		const { q, r, s } = targetedHex;
		return (
			<div className='actionList'>
				{ availableActions.map(action => (
					<div 
						className='actionList_actionItem'
						key={`${action.name}-${q}-${r}-${s}`}
						onClick={action.actionMethod}
					>
						<div className='actionList_actionTitle'>{action.name}</div>
						<div className='actionList_actionDesc'>{action.description}</div>
					</div>
				))}
			</div>
		);
	}
}