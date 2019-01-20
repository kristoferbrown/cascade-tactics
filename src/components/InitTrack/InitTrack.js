import React, { Component } from 'react';
import InitPhase from './InitPhase/InitPhase';
import './InitTrack.scss';

export default class InitTrack extends Component {
	render() {
		const { characters, currInit, currPhase } = this.props;
		return (
			<div className='initTrack'>
				<InitPhase
					characters={characters}
					currInit={currInit}
					isCurrentPhase={true}
					phase={currPhase}
				/>
				<InitPhase
					characters={characters}
					currInit={currInit}
					phase={currPhase+1}
				/>
				<InitPhase
					characters={characters}
					currInit={currInit}
					phase={currPhase+2}
				/>
			</div>
		);
	}
}
