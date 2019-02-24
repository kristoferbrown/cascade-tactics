import React, { Component } from 'react';
import CharacterContext from '../../context/CharacterContext';
import InitPhase from './InitPhase/InitPhase';
import './InitTrack.scss';

export default class InitTrack extends Component {
	static contextType = CharacterContext;

	render() {
		const { currPhase } = this.context;
		const { currSpeedCost } = this.props;
		return (
			<div className='initTrack'>
				<InitPhase
					isCurrentPhase={true}
					phase={currPhase}
					currSpeedCost={currSpeedCost}
				/>
				<InitPhase
					phase={currPhase+1}
				/>
				<InitPhase
					phase={currPhase+2}
				/>
			</div>
		);
	}
}
