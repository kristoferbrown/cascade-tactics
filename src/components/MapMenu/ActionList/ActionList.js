import React, { PureComponent } from 'react';
import { HexUtils } from 'react-hexgrid';
import ActionItem from './ActionItem';
import CharacterContext from '../../../context/CharacterContext';
import { executeAttack, getAttackValues } from '../../../utils/attackUtils'
import './ActionList.scss';

export default class ActionList extends PureComponent {
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
		const { currSpeedCost, endTurn, moveToTargetHex, setSpeedCost, showAttackResults, targetedHex, targetedHexContains, targetedHexIndex } = this.props;
		const { animateAttack, currentCharacter, currPhase, dealDamage } = this.context;
		let newActionList = [];
		if (!!targetedHex && !targetedHexContains) {
			// The target space is empty, consider showing basic movement actions
			// #TODO consider if move and continue moving should be an allowed action, uncomment this if it should
			// if (currSpeedCost < currentCharacter.currentRange && currSpeedCost < currentCharacter.currentSpeed) {
			// 	// Only add simple move when there will be speed and range remaining
			// 	newActionList.push({
			// 		name: 'Move',
			// 		description: 'Move here and continue moving.',
			// 		speedCost: currSpeedCost,
			// 		actionMethod: () => {moveToTargetHex(null, null, targetedHex, targetedHexIndex)}
			// 	});
			// }
			newActionList.push({
				name: 'Move',
				description: 'Move here and end your turn.',
				speedCost: currSpeedCost,
				actionMethod: () => {
					moveToTargetHex(null, null, targetedHex, targetedHexIndex);
					endTurn();
				}
			});

		} else if (!!targetedHex && targetedHexContains && targetedHexContains.meta) {
			// The target is a character, consider adding self actions or attacks
			if (!currentCharacter.hasMovedThisTurn && targetedHexContains.meta.charId === currentCharacter.meta.charId) {
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
			} else if (targetedHexContains.meta.isHostile && !currentCharacter.hasMovedThisTurn) {
				// Target should be an enemy, determine attack params and add attack
				const currentRange = HexUtils.distance(targetedHex, currentCharacter.currentHexLoc);

				const currentLeftAttack = getAttackValues(currentCharacter, true, targetedHexContains);
				const isLeftAttackAffordable = currentLeftAttack && currentCharacter.currentSpeed >= currentLeftAttack.attackObj.speedCost;
				const isLeftAttackInRange = currentLeftAttack && currentLeftAttack.attackObj.range >= currentRange;
				if (currentLeftAttack && isLeftAttackAffordable && isLeftAttackInRange) {
					newActionList.push({
						name: currentLeftAttack.attackObj.name,
						description: `A basic attack.`,
						attack: currentLeftAttack,
						speedCost: currentLeftAttack.attackObj.speedCost,
						actionMethod: () => {
							executeAttack(currentCharacter, targetedHexContains, animateAttack, showAttackResults, dealDamage, true);
							setSpeedCost(0);
						},
						hoverMethod: () => {setSpeedCost(currentLeftAttack.attackObj.speedCost)}
					});
				}

				const currentRightAttack = getAttackValues(currentCharacter, false, targetedHexContains);
				const isRightAttackAffordable = currentRightAttack && currentCharacter.currentSpeed >= currentRightAttack.attackObj.speedCost;
				const isRightAttackInRange = currentRightAttack && currentRightAttack.attackObj.range >= currentRange;
				if (currentRightAttack && isRightAttackAffordable && isRightAttackInRange) {
					newActionList.push({
						name: currentRightAttack.attackObj.name,
						description: `A basic attack.`,
						attack: currentRightAttack,
						speedCost: currentRightAttack.attackObj.speedCost,
						actionMethod: () => {
							executeAttack(currentCharacter, targetedHexContains, animateAttack, showAttackResults, dealDamage, false);
							setSpeedCost(0);
						},
						hoverMethod: () => {setSpeedCost(currentRightAttack.attackObj.speedCost)}
					});
				}
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
					<ActionItem action={action} key={`${action.name}-${q}-${r}-${s}`} />
				))}
			</div>
		);
	}
}