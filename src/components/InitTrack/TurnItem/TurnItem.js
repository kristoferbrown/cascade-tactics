import React, { Component } from 'react';
import HealthStatus from '../../CharContent/Health/HealthStatus';
import Nonogram from '../../CharContent/Nonogram/Nonogram';
import classNames from 'classnames';
import './TurnItem.scss';

export default class TurnItem extends Component {
	render() {
		const { character, isCurrentTurn, isPreviousTurn } = this.props;
		return (
			<div className={classNames({
				'turnItem': true,
				'turnItem_currentTurn': isCurrentTurn,
				'turnItem_previousTurn': isPreviousTurn
			})}>
				<div className='turnItem_portrait'/>
				<div className='turnItem_name'>
					{`${(isCurrentTurn || isPreviousTurn) ? character.meta.fullName : character.meta.name}`}
				</div>
				<div className='turnItem_detailRow'>
					<Nonogram attributes={character.attributes} isVisible={(isCurrentTurn || isPreviousTurn)} />
					<HealthStatus health={character.status.health} />
				</div>
			</div>
		);
	}
}
