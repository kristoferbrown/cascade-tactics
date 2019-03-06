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
		const { currSpeedCost, endTurn, moveToTargetHex, targetedHex } = this.props;
		const { currentCharacter, currPhase } = this.context;
		let newActionList = [];

		if (!!targetedHex && !targetedHex.contents) {
			// The target space is empty, consider showing basic movement actions
			if (currSpeedCost < currentCharacter.currentRange && currSpeedCost < currentCharacter.currentSpeed) {
				// Only add simple move when there will be speed and range remaining
				newActionList.push({
					name: 'Move Here',
					actionMethod: () => {moveToTargetHex(null, null, targetedHex)}
				});
			}
			newActionList.push({
				name: 'End Turn Here',
				actionMethod: () => {
					moveToTargetHex(null, null, targetedHex);
					endTurn();
				}
			});

		} else if (!!targetedHex && targetedHex.contents && targetedHex.contents.meta) {
			// The target is a character, consider adding self actions or attacks
			if (targetedHex.contents.meta.charId === currentCharacter.meta.charId) {
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
			} else if (!targetedHex.contents.meta.isCpuControlled) {
				// Target is an ally, just add inspect
				newActionList.push({
					name: 'View Character',
					actionMethod: () => {console.log(targetedHex.contents)}
				});
			} else {
				// Target should be an enemy, add attack
				newActionList.push({
					name: 'Attack',
					actionMethod: () => {'attack!!!!'}
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