import React, { PureComponent, Fragment } from 'react';
import classNames from 'classnames';
import './AttackItem.scss';

export default class AttackItem extends PureComponent {

	render() {
		const { attack, defense } = this.props;
		return (
			<Fragment>
				<div className={classNames({
					'attackItem_attackLabel': true,
					'attackItem_attackLabel_hasDef': defense
					})}>
					<div className='attackItem_attackDesc'>
						<div className='attackItem_attackDetailTitle'>To Hit:</div>
						<div className='attackItem_attackDetailStat'>{attack.attackSucc}-{attack.attackSucc+attack.attackDice}</div>
					</div>
					<div className='attackItem_attackDesc'>
						<div className='attackItem_attackDetailTitle'>Damage:</div>
						<div className='attackItem_attackDetailStat'>{attack.damageSucc}-{attack.damageSucc+attack.damageDice}</div>
					</div>
				</div>
				{defense &&
					<div className={classNames({
						'attackItem_defenseLabel': true,
						'attackItem_defenseLabel_agi': attack.attackObj.attribute !== 'Perception',
						'attackItem_defenseLabel_wit': attack.attackObj.attribute === 'Perception',
					})}>
						<div className='attackItem_defenseDesc'>
							<div className='attackItem_attackDetailTitle'>Defense:</div>
							<div className='attackItem_attackDetailStat'>{attack.passiveDef}</div>
						</div>
						<div className='attackItem_defenseDesc'>
							<div className='attackItem_attackDetailTitle'>Dodge:</div>
							<div className='attackItem_attackDetailStat'>{attack.dodgeSucc}-{attack.dodgeSucc+attack.dodgeDice}</div>
							</div>
					</div>
				}
			</Fragment>
		);
	}
}