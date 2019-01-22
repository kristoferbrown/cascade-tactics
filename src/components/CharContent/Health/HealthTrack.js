import React, { Component } from 'react';
import classNames from 'classnames';

export default class HealthTrack extends Component {
	render() {
		const { current, isHalfTrack,  maximum } = this.props;
		const currentPercentage = Math.floor(current/maximum*100);
		return (
			<div className={classNames({
				'healthTrack': true,
				'healthTrack_halfTrack': isHalfTrack
			})}>
				<div className='healthTrack_healthBar' style={{width: `${currentPercentage+6}%`}}/>
			</div>
		);
	}
}
