import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './AttackResults.scss';

export default class AttackResults extends PureComponent {

	render() {
		const { attackResult, attackUsed, defenseResult } = this.props;
		const didHit = attackResult.toHit >= defenseResult.passiveDef;
		console.log(didHit ? 'HIT!!!!' : 'Miss...', attackUsed, attackResult, defenseResult);
		return (
			<div 
				className={classNames({
					'attackResults': true,
					'attackResults_attack_str': attackUsed.attribute === 'Strength',
					'attackResults_attack_fin': attackUsed.attribute === 'Finesse',
					'attackResults_attack_per': attackUsed.attribute === 'Perception'
				})}
			>
				<div>{didHit ? 'HIT!!!' : 'Miss...'}</div>
			</div>
		);
	}
}