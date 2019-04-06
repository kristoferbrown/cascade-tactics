import React, { PureComponent, Fragment } from 'react';
import classNames from 'classnames';
import DiceResultRow from '../../Common/DiceResultRow/DiceResultRow'
import './AttackResults.scss';

export default class AttackResults extends PureComponent {
	getLocationString = locNumber => {
		if (locNumber === 1) {
			return 'Legs';
		} else if (locNumber === 2) {
			return 'Off Arm';
		} else if (locNumber === 3) {
			return 'Main Arm';
		} else if (locNumber === 4) {
			return 'Lower Body';
		} else {
			return 'Upper Body';
		}
	}

	render() {
		const { attackResult, attackUsed, defenseResult } = this.props;
		const didHit = attackResult.toHit.successes >= defenseResult;
		const locationString = this.getLocationString(attackResult.location.locationHit);
		console.log(didHit ? 'HIT!!!!' : 'Miss...', attackUsed, attackResult, defenseResult);
		return (
			<div 
				className={classNames({
					'attackResults': true,
					'attackResults_str': attackUsed.attribute === 'Strength',
					'attackResults_fin': attackUsed.attribute === 'Finesse',
					'attackResults_per': attackUsed.attribute === 'Perception'
				})}
			>
				<div className={classNames({
					'attackResults_title': true,
					'attackResults_title_str': attackUsed.attribute !== 'Perception',
				})}>
					{didHit ? (
						<Fragment>
							<span className="attackResults_detailStat">{attackResult.damage.successes}</span>
							{` damage to ${locationString}`}
							<DiceResultRow results={attackResult.damage.diceRolled} bonus={attackUsed.damSuccBonus+attackResult.location.critLevel}/>
							</Fragment>
					):(
						<Fragment>Miss</Fragment>
					)}
				</div>

				<div className="attackResults_attackRolls">
					<div className="attackResults_toHitRoll">
						Attack: <span className="attackResults_detailStat"> {attackResult.toHit.successes}</span>
						<DiceResultRow results={attackResult.toHit.diceRolled} bonus={attackUsed.atkSuccBonus}/>
					</div>
					<div className={classNames({
						'attackResults_defenseRoll': true,
						'attackResults_defenseRoll_agi': attackUsed.attribute === 'Strength' || attackUsed.attribute === 'Finesse',
						'attackResults_defenseRoll_wit': attackUsed.attribute === 'Perception',
					})}>
						<div className="attackResults_defenseRollDetail">
							Defense: <span className="attackResults_detailStat"> {defenseResult}</span>
						</div>
					</div>
				</div>

			</div>
		);
	}
}