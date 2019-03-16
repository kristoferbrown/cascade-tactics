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
					{ !action.isAttack && <div className='actionItem_actionDesc'>{action.description}</div> }
				</div>
				{ !!action.isAttack && 
					<Fragment>
						<div className={classNames({
							'actionItem_attackLabel': true,
							'actionItem_attackLabel_str': action.attack.attribute === 'Strength',
							'actionItem_attackLabel_fin': action.attack.attribute === 'Finesse',
							'actionItem_attackLabel_per': action.attack.attribute === 'Perception'
						})}>
							<div className='actionItem_attackDesc'>{action.description}</div>
						</div>
						<div className={classNames({
							'actionItem_defenseLabel': true,
							'actionItem_defenseLabel_agi': action.attack.attribute !== 'Perception',
							'actionItem_defenseLabel_wit': action.attack.attribute === 'Perception',
						})}>
							<div className='actionItem_defenseDesc'>{action.description}</div>
						</div>
					</Fragment>
				}
			</div>
		);
	}
}