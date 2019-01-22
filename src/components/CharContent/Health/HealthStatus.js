import React, { Component } from 'react';
import HealthTrack from './HealthTrack'
import './HealthStatus.scss';

export default class HealthStatus extends Component {
	render() {
		const { health } = this.props;
		return (
			<div className='healthStatus'>
				<HealthTrack current={health.upper[0]} maximum={health.upper[1]} />
				<HealthTrack current={health.lower[0]} maximum={health.lower[1]} />
				<HealthTrack isHalfTrack current={health.main[0]} maximum={health.main[1]} />
				<HealthTrack isHalfTrack current={health.off[0]} maximum={health.off[1]} />
				<HealthTrack current={health.legs[0]} maximum={health.legs[1]} />
			</div>
		);
	}
}
