import React, { PureComponent } from 'react';
import CharacterContext from '../../../../context/CharacterContext';
import AttackItem from '../../../Common/AttackItem/AttackItem'
import BodyLocationItem from './BodyLocationItem/BodyLocationItem'
import MenuTrace from '../../MenuTrace/MenuTrace'
import { getAttackValues } from '../../../../utils/attackUtils'
import './MenuCombatScreen.scss';

export default class MenuCombatScreen extends PureComponent {
	static contextType = CharacterContext;

	render() {
		const { menuCharacter } = this.context;
		const currentAttack = getAttackValues(menuCharacter);
		console.log(currentAttack)
		return (
			<div className={'MenuCombatScreen'}>

				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_upper'}>
					<BodyLocationItem label={"Upper Body"} loc={4} />
				</div>
				<MenuTrace
					isRTL={false}
					isBTT={true}
					originX={'52%'}
					originY={62}
					segments={[
						{ isHorizontal: true, length: 200 },
						{ isDiagonal: true, length: 68 },
						{ isHorizontal: true, length: 230, preOffsetY: 8 },
					]}
				/>

				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_lower'}>
					<BodyLocationItem label={"Lower Body"} loc={3} />
				</div>
				<MenuTrace
					isRTL={false}
					isBTT={false}
					originX={'50%'}
					originY={320}
					segments={[
						{ isDiagonal: true, length: 460},
						{ isHorizontal: true, length: 200, preOffsetX: 80, preOffsetY: 90},
					]}
				/>

				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_left'}>
					<BodyLocationItem label={"Left Arm"} loc={1} />
				</div>
				<MenuTrace
					isRTL={true}
					isBTT={false}
					originX={'40%'}
					originY={150}
					segments={[
						{ isHorizontal: true, length: 150 },
						{ isDiagonal: true, length: 78 },
						{ isHorizontal: true, length: 160, preOffsetX: 2, preOffsetY: 11 },
					]}
				/>

				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_right'}>
					<BodyLocationItem label={"Right Arm"} loc={2} />
				</div>
				<MenuTrace
					isRTL={false}
					isBTT={false}
					originX={'60%'}
					originY={150}
					segments={[
						{ isHorizontal: true, length: 150 },
						{ isDiagonal: true, length: 78 },
						{ isHorizontal: true, length: 160, preOffsetX: 2, preOffsetY: 11 },
					]} 
				/>

				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_legs'}>
					<BodyLocationItem label={"Legs"} loc={0} />
				</div>
				<MenuTrace
					isRTL={true}
					isBTT={false}
					originX={'47%'}
					originY={608}
					segments={[
						{ isHorizontal: true, length: 200 },
						{ isDiagonal: true, length: 54 },
						{ isHorizontal: true, length: 200, preOffsetX: -3, preOffsetY: 5 },
					]}
				/>

				<div className={`MenuCombatScreen_locDetails MenuCombatScreen_leftAttack fill_${currentAttack.attackObj.attribute}`}>
					<div>Left Attack</div>
					{currentAttack.attackObj.name}
					<AttackItem attack={currentAttack} />
				</div>
				<MenuTrace
					isRTL={true}
					isBTT={false}
					originX={'29%'}
					originY={330}
					segments={[
						{ isDiagonal: true, length: 138 },
						{ isHorizontal: true, length: 130, preOffsetX: 14, preOffsetY: 22 },
					]}
				/>

				<div className={'MenuCombatScreen_locDetails MenuCombatScreen_rightAttack'}></div>
				<MenuTrace
					isRTL={false}
					isBTT={false}
					originX={'71%'}
					originY={330}
					segments={[
						{ isDiagonal: true, length: 138 },
						{ isHorizontal: true, length: 130, preOffsetX: 14, preOffsetY: 22 },
					]} 
				/>
			</div>
		);
	}
}
