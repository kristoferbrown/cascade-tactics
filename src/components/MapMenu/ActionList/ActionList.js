import React, { Component } from 'react';
import './ActionList.scss';

export default class ActionList extends Component {
	state = {
		availableActions: []
	}

	componentDidMount() {
		console.log('calibrating actions')
		this.calibrateActionList();
	}

	// TODO consider a getDerivedStateFromProps here
	//componentDidUpdate() {
	//	console.log('recalibrating actions')
	//	this.calibrateActionList();
	//}

	calibrateActionList() {
		const { targetedHex } = this.props;
		let newActionList = [];
		if (!!targetedHex && !targetedHex.contents) {
			// Space is empty, show basic movement actions
			newActionList.push({
				name: 'Move Here',
				actionMethod: () => {console.log('Moving to', targetedHex)}
			});
			newActionList.push({
				name: 'End Turn Here',
				actionMethod: () => {console.log('Ending turn at', targetedHex)}
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
						onClick={() => action.actionMethod()}
					>
						{action.name}
					</div>
				))}
			</div>
		);
	}
}