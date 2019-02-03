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

				{ !!character.portraitRenderer ? 
					<div className='turnItem_portrait'>{character.portraitRenderer()}</div> :
					<div className='turnItem_portraitPlaceholder'/>
				}

				<div className='turnItem_name'>
					{`${(isCurrentTurn || isPreviousTurn) ? character.meta.fullName : character.meta.name}`}
				</div>

				{ (isCurrentTurn || isPreviousTurn) && character.meta.isInscrutable &&
					<div className='turnItem_static' />
				}

				{ !character.meta.isInscrutable && (
					<div className='turnItem_detailRow'>

						<div className='turnItem_detailColumn'>
							{(isCurrentTurn || isPreviousTurn) && <div className='turnItem_detailLabel turnItem_attributeLabel'>Attributes</div>}
							<Nonogram attributes={character.attributes} isVisible={(isCurrentTurn || isPreviousTurn)} />
						</div>

						<div className='turnItem_detailColumn'>
							{(isCurrentTurn || isPreviousTurn) && 
								<div className="turnItem_detailItem">
									<div className='turnItem_detailLabel'>Speed</div>
									<StatusTrack
										attribute="Agility"
										cost={currSpeedCost}
										current={character.status.speed.current}
										maximum={character.attributes.Agility+3}
									/>
								</div>
							}
							{(isCurrentTurn || isPreviousTurn) && !character.meta.isNonLocal && 
								<div className="turnItem_detailItem">
									<div className='turnItem_detailLabel'>Entanglement</div>
									<StatusTrack
										attribute="Willpower"
										//cost={currSpeedCost}
										current={character.attributes.Willpower+3}
										maximum={character.attributes.Willpower+3}
									/>
								</div>
							}
							{ !character.meta.isNonLocal && 
								<Fragment>
									<div className='turnItem_detailLabel'>Health</div>
									<HealthStatus health={character.status.health} />
								</Fragment>
							}
						</div>

					</div>
				)}
			</div>
		);
	}
}
