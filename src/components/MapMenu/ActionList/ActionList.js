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
		const { currSpeedCost, moveToTargetHex, moveAndEndTurn, targetedHex } = this.props;
		const { currentCharacter } = this.context;
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
				actionMethod: () => {moveAndEndTurn(null, null, targetedHex)}
			});
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