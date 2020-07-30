import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import './StatusTrack.scss';

export default class StatusTrack extends Component {
	render() {
		const { attribute, backgroundBar, current, isHalfTrack, maximum, segments, textLabel } = this.props;
		const isNegative = current < 0;
		const absCurrent = Math.abs(current);
		const currentPercentage = Math.floor(absCurrent/maximum*100);
		const absBackgroundBar = Math.abs(backgroundBar);
		const backgroundBarPercentage = Math.floor(absBackgroundBar/maximum*100);
		let segmentSum = 0;

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

					{ !!current && (<div className='statusTrack_currentBar' style={{width: `${currentPercentage}%`}} />)}

					{ !!backgroundBar && (<div className='statusTrack_backgroundBar' style={{width: `${backgroundBarPercentage}%`}} />)}

					{ !!segments && segments.map((segment, index) => {
						const absValue = Math.abs(segment.value);
						const segmentPercentage = Math.floor(absValue/maximum*100);

						segmentSum += segment.value;
						return (
							<Fragment key={`segment-${index}`}>
								{segmentSum <= maximum ? <div 
									className={classNames({
										'statusTrack_segmentBar': true,
										[`fill_${segment.attribute}`]: true,
										'isFlashing': segment.isFlashing,
										'fill_dark': segment.isDark,
										'fill_light': segment.isLight,
									})}
									style={{width: `${segmentPercentage}%`}}
								>

									<div className='statusTrack_segmentLabel'>{segment.label}</div>

								</div>
								: null}
							</Fragment>
						)
					})}

				</div>
				{ textLabel && (
						<div className='statusTrack_labelValue'>{`${textLabel} ${current}/${maximum}`}</div>
				)}
			</div>
		);
	}
}
