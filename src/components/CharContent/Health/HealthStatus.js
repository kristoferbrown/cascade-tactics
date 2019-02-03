import React, { Component } from 'react';
import StatusTrack from '../../Common/StatusTrack/StatusTrack'
import './HealthStatus.scss';

export default class HealthStatus extends Component {
	render() {
		const { health } = this.props;
		return (
			<div className='healthStatus'>
				<StatusTrack attribute="Stamina" current={health.upper[0]} maximum={health.upper[1]} />
				<StatusTrack attribute="Stamina" current={health.lower[0]} maximum={health.lower[1]} />
				<StatusTrack attribute="Stamina" isHalfTrack current={health.main[0]} maximum={health.main[1]} />
				<StatusTrack attribute="Stamina" isHalfTrack current={health.off[0]} maximum={health.off[1]} />
				<StatusTrack attribute="Stamina" current={health.legs[0]} maximum={health.legs[1]} />
			</div>
		);
	}
}
