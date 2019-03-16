import React, { PureComponent, Fragment } from 'react';
import classNames from 'classnames';
import './ActionList.scss';

export default class ActionList extends PureComponent {

	render() {
		const { action } = this.props;
		return (
			<div 
				className='actionItem'
				onClick={action.actionMethod}
			>
				<div className='actionItem_actionLabel'>
					<div className='actionItem_actionTitle'>{action.name}</div>
					{ !!action.speedCost && <div className='actionItem_speedCost'>{`-${action.speedCost}`}</div> }
					{ !action.attack && <div className='actionItem_actionDesc'>{action.description}</div> }
				</div>
				{ !!action.attack && 
					<Fragment>
						<div className={classNames({
							'actionItem_attackLabel': true,
							'actionItem_attackLabel_str': action.attack.attackObj.attribute === 'Strength',
							'actionItem_attackLabel_fin': action.attack.attackObj.attribute === 'Finesse',
							'actionItem_attackLabel_per': action.attack.attackObj.attribute === 'Perception'
						})}>
							<div className='actionItem_attackDesc'>To Hit: {action.attack.attackSucc}-{action.attack.attackSucc+action.attack.attackDice}</div>
							<div className='actionItem_attackDesc'>Damage: {action.attack.damageSucc}-{action.attack.damageSucc+action.attack.damageDice}</div>
						</div>
						<div className={classNames({
							'actionItem_defenseLabel': true,
							'actionItem_defenseLabel_agi': action.attack.attackObj.attribute !== 'Perception',
							'actionItem_defenseLabel_wit': action.attack.attackObj.attribute === 'Perception',
						})}>
							<div className='actionItem_defenseDesc'>Defense: {action.attack.passiveDef}</div>
							<div className='actionItem_defenseDesc'>Dodge: {action.attack.dodgeSucc}-{action.attack.dodgeSucc+action.attack.dodgeDice}</div>
						</div>
					</Fragment>
				}
			</div>
		);
	}
}