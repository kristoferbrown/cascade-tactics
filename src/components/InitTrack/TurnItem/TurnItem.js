import React, { Component, Fragment } from 'react';
import HealthStatus from '../../CharContent/Health/HealthStatus';
import Nonogram from '../../CharContent/Nonogram/Nonogram';
import StatusTrack from '../../Common/StatusTrack/StatusTrack';
import classNames from 'classnames';
import './TurnItem.scss';

export default class TurnItem extends Component {
	shouldComponentUpdate(nextProps) {
		return !!nextProps.isCurrentTurn || !!this.props.isCurrentTurn;
	}

	render() {
		const { character, currSpeedCost, isCurrentTurn, isPreviousTurn } = this.props;
		return (
			<div className={classNames({
				'turnItem': true,
				'turnItem_currentTurn': isCurrentTurn,
				'turnItem_previousTurn': isPreviousTurn
			})}>
				<div className='turnItem_portrait'/>
				<div className='turnItem_name'>
					{`${(isCurrentTurn || isPreviousTurn) ? character.meta.fullName : character.meta.name}`}
				</div>
				<div className='turnItem_detailRow'>
					<Nonogram attributes={character.attributes} isVisible={(isCurrentTurn || isPreviousTurn)} />
					<div className='turnItem_detailColumn'>
						{(isCurrentTurn || isPreviousTurn) && 
							<Fragment>
								<div className='turnItem_detailLabel'>Speed</div>
								<StatusTrack
									attribute="Agility"
									cost={currSpeedCost}
									current={character.attributes.Agility+3}
									maximum={character.attributes.Agility+3}
								/>
							</Fragment>
						}
						<div className='turnItem_detailLabel'>Health</div>
						<HealthStatus health={character.status.health} />
					</div>
				</div>
			</div>
		);
	}
}
