import React, { Component } from 'react';
import StatusTrack from '../../Common/StatusTrack/StatusTrack'
import './HealthStatus.scss';

export default class HealthStatus extends Component {
	render() {
		const { health } = this.props;
		return (
			<div className='healthStatus'>
				<StatusTrack attribute="Stamina" current={health[4][0]} maximum={health[4][1]} />
				<StatusTrack attribute="Stamina" current={health[3][0]} maximum={health[3][1]} />
				<StatusTrack attribute="Stamina" isHalfTrack current={health[2][0]} maximum={health[2][1]} />
				<StatusTrack attribute="Stamina" isHalfTrack current={health[1][0]} maximum={health[1][1]} />
				<StatusTrack attribute="Stamina" current={health[0][0]} maximum={health[0][1]} />
			</div>
		);
	}
}
