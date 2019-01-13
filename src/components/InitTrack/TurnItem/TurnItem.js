import React, { Component } from 'react';
import classNames from 'classnames';
import './TurnItem.scss';

export default class TurnItem extends Component {
	render() {
		const { character, initiative, isCurrentTurn, isPreviousTurn } = this.props;
		return (
			<div className={classNames({
				'turnItem': true,
				'turnItem_currentTurn': isCurrentTurn,
				'turnItem_previousTurn': isPreviousTurn
			})}>
				{`${initiative+1}: ${isCurrentTurn ? character.meta.fullName : character.meta.name}`}
			</div>
		);
	}
}
