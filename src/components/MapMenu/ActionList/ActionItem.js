import React, { PureComponent } from 'react';
import classNames from 'classnames';
import AttackItem from '../../Common/AttackItem/AttackItem'
import './ActionList.scss';

export default class ActionItem extends PureComponent {

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
				onMouseOver={action.hoverMethod}
			>
				<div className='actionItem_actionLabel'>
					<div className='actionItem_actionTitle'>{action.name}</div>
					{ !!action.speedCost && <div className='actionItem_speedCost'>{`-${action.speedCost}`}</div> }
					{ !action.attack && <div className='actionItem_actionDesc'>{action.description}</div> }
				</div>
				{ !!action.attack && 
					<AttackItem attack={action.attack} defense />
				}
			</div>
		);
	}
}