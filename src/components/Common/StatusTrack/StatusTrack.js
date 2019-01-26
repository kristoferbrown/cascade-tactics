import React, { Component } from 'react';
import classNames from 'classnames';
import './StatusTrack.scss';

export default class StatusTrack extends Component {
	render() {
		const { attribute, cost, current, isHalfTrack, maximum } = this.props;
		let currentPercentage = 100;
		let costPercentage = 0;
		if (cost >= current) {
			costPercentage = Math.floor(current/maximum*100);
			currentPercentage = 0;
		} else if (cost) {
			costPercentage = Math.floor(cost/maximum*100);
			currentPercentage = Math.floor((current-cost)/maximum*100);
		} else {
			currentPercentage = Math.floor(current/maximum*100);
		}

		return (
			<div className={classNames({
				'stausTrack': true,
				'stausTrack_halfTrack': isHalfTrack,
				'stausTrack_strength': attribute === 'Strength',
				'stausTrack_finesse': attribute === 'Finesse',
				'stausTrack_perception': attribute === 'Perception',
				'stausTrack_stamina': attribute === 'Stamina',
				'stausTrack_agility': attribute === 'Agility',
				'stausTrack_wits': attribute === 'Wits',
				'stausTrack_willpower': attribute === 'Willpower',
				'stausTrack_intelligence': attribute === 'Intelligence',
				'stausTrack_charisma': attribute === 'Charisma',
			})}>
				<div className='stausTrack_innerBar'>
					<div className='stausTrack_currentBar' style={{width: `${currentPercentage}%`}}/>
					{ !!cost && <div className='stausTrack_costBar' style={{width: `${costPercentage}%`}}/> }
				</div>
			</div>
		);
	}
}
