import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import './StatusTrack.scss';

export default class StatusTrack extends Component {
	render() {
		const { attribute, cost, current, isHalfTrack, maximum } = this.props;
		let currentPercentage = Math.floor(current/maximum*100);
		let costPercentage = cost ? Math.floor(cost/current*100) : 0;

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
					<div className='stausTrack_currentBar' style={{width: `${currentPercentage}%`}}>
						{ !!cost &&
							<Fragment>
								{cost !== current && <div className='stausTrack_currentValue' style={{left: `${(currentPercentage-costPercentage)/2}%`}}>{current - cost}</div>}
								<div className='stausTrack_costBar' style={{width: `${costPercentage}%`}}>
									<div className='stausTrack_costValue'>{cost}</div>
								</div>
							</Fragment>
						}
					</div>
				</div>
			</div>
		);
	}
}
