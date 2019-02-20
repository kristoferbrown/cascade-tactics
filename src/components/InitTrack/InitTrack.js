import React, { Component } from 'react';
import InitPhase from './InitPhase/InitPhase';
import './InitTrack.scss';

export default class InitTrack extends Component {
	render() {
		const { currInit, currPhase, currSpeedCost } = this.props;
		return (
			<div className='initTrack'>
				<InitPhase
					currInit={currInit}
					isCurrentPhase={true}
					phase={currPhase}
					currSpeedCost={currSpeedCost}
				/>
				<InitPhase
					currInit={currInit}
					phase={currPhase+1}
				/>
				<InitPhase
					currInit={currInit}
					phase={currPhase+2}
				/>
			</div>
		);
	}
}
