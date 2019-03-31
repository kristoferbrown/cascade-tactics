import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './AttackResults.scss';

export default class AttackResults extends PureComponent {

	render() {
		const { attackResult, attackUsed, defenseResult } = this.props;
		const didHit = attackResult.toHit >= defenseResult;
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
				<div className="attackResults_title">{didHit ? 'Hit' : 'Miss'}</div>
				<div className="attackResults_attackRolls">
					<div className="attackResults_toHitRoll">
						Attack: <span className="attackResults_detailStat"> {attackResult.toHit}</span>
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
				{ didHit && 
					<div className={classNames({
						'attackResults_title': true,
						'attackResults_title_str': attackUsed.attribute !== 'Perception',
					})}>
						<span className="attackResults_detailStat">{attackResult.damage}</span> Damage
					</div> }
			</div>
		);
	}
}