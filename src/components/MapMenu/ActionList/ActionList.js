import React, { Component } from 'react';
import CharacterContext from '../../../context/CharacterContext';
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
					name: 'Move Here',
					actionMethod: () => {moveToTargetHex(null, null, targetedHex, targetedHexIndex)}
				});
			}
			newActionList.push({
				name: 'End Turn Here',
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
						actionMethod: () => {
							console.log('resting...');
							endTurn();
						}
					});
				}
				newActionList.push({
					name: 'End Turn',
					actionMethod: () => {endTurn();}
				});
			} else if (!targetedHexContains.meta.isCpuControlled) {
				// Target is an ally, just add inspect
				newActionList.push({
					name: 'View Character',
					actionMethod: () => {console.log(targetedHexContains)}
				});
			} else if (targetedHexContains.meta.isHostile && !currentCharacter.hasMovedThisTurn) {
				// Target should be an enemy, add attack
				newActionList.push({
					name: 'Attack',
					actionMethod: () => {
						console.log('attack!!!!');
						endTurn();
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
						{action.name}
					</div>
				))}
			</div>
		);
	}
}