import React, { PureComponent, Fragment } from 'react';
import classNames from 'classnames';
import HealthStatus from '../../CharContent/Health/HealthStatus';
import StatusTrack from '../../Common/StatusTrack/StatusTrack';
import './TurnItem.scss';

export default class TurnItem extends PureComponent {
	render() {
		const { character, currSpeedCost, isCurrentTurn, isPreviousTurn, toggleCharacterMenu } = this.props;
		return (
			<div 
				onClick={() => toggleCharacterMenu(true, character)}
				className={classNames({
					'turnItem': true,
					'turnItem_currentTurn': isCurrentTurn,
					'turnItem_previousTurn': isPreviousTurn,
					'turnItem_hiddenTurn': character.currentSpeed <= 0,
					'turnItem_unconscious': character.meta.isUnconscious
				})}
			>

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
							{(isCurrentTurn || isPreviousTurn) && 
								<div className="turnItem_detailItem">
									<div className='turnItem_detailLabel'>Speed</div>
									<StatusTrack
										attribute="Agility"
										segments={[
											{ attribute: 'Agility', label: currSpeedCost ? character.currentSpeed-currSpeedCost : '', value: character.currentSpeed-currSpeedCost,},
											{ attribute: 'Stamina', isFlashing: true, label: `-${currSpeedCost}`, value: currSpeedCost ? currSpeedCost : '0', },
											
										]}
										maximum={character.attributes.Agility+3}
										backgroundBar={character.currentSpeed-currSpeedCost+character.attributes.Stamina+3}
									/>
								</div>
							}
							{(isCurrentTurn || isPreviousTurn) && !character.meta.isNonLocal && 
								<div className="turnItem_detailItem">
									<div className='turnItem_detailLabel'>Entanglement</div>
									<StatusTrack
										attribute="Willpower"
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
