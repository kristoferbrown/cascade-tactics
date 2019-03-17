import React, { PureComponent, Fragment } from 'react';
import classNames from 'classnames';
import './ActionList.scss';

export default class ActionList extends PureComponent {

	render() {
		const { action } = this.props;
		return (
			<div 
				className={classNames({
					'actionItem': true,
					'actionItem_attack': action.attack,
					'actionItem_attack_str': action.attack && action.attack.attackObj.attribute === 'Strength',
					'actionItem_attack_fin': action.attack && action.attack.attackObj.attribute === 'Finesse',
					'actionItem_attack_per': action.attack && action.attack.attackObj.attribute === 'Perception'
				})}
				onClick={action.actionMethod}
			>
				<div className='actionItem_actionLabel'>
					<div className='actionItem_actionTitle'>{action.name}</div>
					{ !!action.speedCost && <div className='actionItem_speedCost'>{`-${action.speedCost}`}</div> }
					{ !action.attack && <div className='actionItem_actionDesc'>{action.description}</div> }
				</div>
				{ !!action.attack && 
					<Fragment>
						<div className='actionItem_attackLabel'>
							<div className='actionItem_attackDesc'>
								<div className='actionItem_attackDetailTitle'>To Hit:</div>
								<div className='actionItem_attackDetailStat'>{action.attack.attackSucc}-{action.attack.attackSucc+action.attack.attackDice}</div>
							</div>
							<div className='actionItem_attackDesc'>
								<div className='actionItem_attackDetailTitle'>Damage:</div>
								<div className='actionItem_attackDetailStat'>{action.attack.damageSucc}-{action.attack.damageSucc+action.attack.damageDice}</div>
							</div>
						</div>
						<div className={classNames({
							'actionItem_defenseLabel': true,
							'actionItem_defenseLabel_agi': action.attack.attackObj.attribute !== 'Perception',
							'actionItem_defenseLabel_wit': action.attack.attackObj.attribute === 'Perception',
						})}>
							<div className='actionItem_defenseDesc'>
								<div className='actionItem_attackDetailTitle'>Defense:</div>
								<div className='actionItem_attackDetailStat'>{action.attack.passiveDef}</div>
							</div>
							<div className='actionItem_defenseDesc'>
								<div className='actionItem_attackDetailTitle'>Dodge:</div>
								<div className='actionItem_attackDetailStat'>{action.attack.dodgeSucc}-{action.attack.dodgeSucc+action.attack.dodgeDice}</div>
								</div>
						</div>
					</Fragment>
				}
			</div>
		);
	}
}