import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import './StatusTrack.scss';

export default class StatusTrack extends Component {
	render() {
		const { attribute, cost, current, isHalfTrack, maximum, textLabel } = this.props;
		const isNegative = current < 0;
		const absCurrent = Math.abs(current);
		let currentPercentage = Math.floor(absCurrent/maximum*100);
		let costPercentage = cost ? Math.floor(cost/absCurrent*100) : 0;

		return (
			<div className={classNames({
				'statusTrack': true,
				'statusTrack_halfTrack': isHalfTrack,
				'statusTrack_strength': attribute === 'Strength',
				'statusTrack_finesse': attribute === 'Finesse',
				'statusTrack_perception': attribute === 'Perception',
				'statusTrack_stamina': attribute === 'Stamina',
				'statusTrack_agility': attribute === 'Agility',
				'statusTrack_wits': attribute === 'Wits',
				'statusTrack_willpower': attribute === 'Willpower',
				'statusTrack_intelligence': attribute === 'Intelligence',
				'statusTrack_charisma': attribute === 'Charisma',
				'statusTrack_malus': isNegative,
				'statusTrack_labeled': textLabel
			})}>
				<div className='statusTrack_innerBar'>
					<div className='statusTrack_currentBar' style={{width: `${currentPercentage}%`}}>
						{ !!cost &&(
							<Fragment>
								{cost !== absCurrent && <div className='statusTrack_currentValue' style={{left: `${(currentPercentage-costPercentage)/2}%`}}>{absCurrent - cost}</div>}
								<div className='statusTrack_costBar' style={{width: `${costPercentage}%`}}>
									<div className='statusTrack_costValue'>{cost}</div>
								</div>
							</Fragment>
						)}
					</div>
					{ textLabel && (
							<div className='statusTrack_labelValue'>{`${textLabel} ${current}/${maximum}`}</div>
					)}
				</div>
			</div>
		);
	}
}
