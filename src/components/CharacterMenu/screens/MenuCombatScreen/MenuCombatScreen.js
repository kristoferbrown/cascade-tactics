import React, { PureComponent } from 'react';
import CharacterContext from '../../../../context/CharacterContext';
import './MenuCombatScreen.scss';

export default class MenuCombatScreen extends PureComponent {
	static contextType = CharacterContext;
	render() {
		// const { menuCharacter } = this.context;
		return (
			<div className={'MenuCombatScreen'}>
				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_upper'}></div>
				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_lower'}></div>
				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_left'}></div>
				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_right'}></div>
				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_legs'}></div>

				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_leftAttack'}></div>
				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_rightAttack'}></div>
			</div>
		);
	}
}
