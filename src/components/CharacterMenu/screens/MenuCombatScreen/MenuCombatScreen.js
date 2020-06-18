import React, { PureComponent } from 'react';
import CharacterContext from '../../../../context/CharacterContext';
import MenuTrace from '../../MenuTrace/MenuTrace'
import './MenuCombatScreen.scss';

export default class MenuCombatScreen extends PureComponent {
	static contextType = CharacterContext;
	render() {
		// const { menuCharacter } = this.context;
		return (
			<div className={'MenuCombatScreen'}>
				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_upper'}></div>
				<MenuTrace
					isRTL={false}
					isBTT={true}
					originX={'50%'}
					originY={62}
					segments={[
						{ isHorizontal: true, length: 200},
						{ isDiagonal: true, length: 65},
						{ isHorizontal: true, length: 250},
					]} 
				/>
				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_lower'}></div>
				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_left'}></div>
				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_right'}></div>
				<MenuTrace
					isRTL={false}
					isBTT={false}
					originX={'58%'}
					originY={157}
					segments={[
						{ isHorizontal: true, length: 150},
						{ isDiagonal: true, length: 65},
						{ isHorizontal: true, length: 200},
					]} 
				/>
				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_legs'}></div>

				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_leftAttack'}></div>
				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_rightAttack'}></div>
				<MenuTrace
					isRTL={false}
					isBTT={false}
					originX={'68%'}
					originY={316}
					segments={[
						{ isDiagonal: true, length: 200},
					]} 
				/>
			</div>
		);
	}
}
