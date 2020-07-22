import React, { Component } from 'react';
import NonogramSquare from './NonogramSquare/NonogramSquare';
import classNames from 'classnames';
import './Nonogram.scss';

export default class Nonogram extends Component {
	render() {
		const { armor, attributes, currentTab, handleAttributeClick, isPreview, leftAttack, rightAttack, skills } = this.props;
		const isCharacterScreen = currentTab === 'Character';
		const isCombatScreen = currentTab === 'Combat';
		const isStylesScreen = currentTab === 'Styles';
		const isArtifactsScreen = currentTab === 'Artifacts';

		return (
			<div className={classNames({
				'nonogram_container': true,
				'nonogram_character': isCharacterScreen,
				'nonogram_combat': isCombatScreen,
				'nonogram_styles': isStylesScreen,
				'nonogram_artifacts': isArtifactsScreen,
				'nonogram_preview': isPreview,
			})}>

				<NonogramSquare
					armorId={isCombatScreen && armor && armor[4]}
					armorLocation={isCombatScreen && 4}
					attributeName={isCharacterScreen || isStylesScreen ? 'Strength' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Strength : null}
					handleClick={handleAttributeClick}
					index={1}
					isMajorArtifact={isArtifactsScreen}
					isPreview={isPreview}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
					skills={skills['Strength']}
				/>
				<NonogramSquare
					armorId={isCombatScreen && armor && armor[2]}
					armorLocation={isCombatScreen && 2}
					attributeName={isCharacterScreen || isStylesScreen ? 'Finesse' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Finesse : null}
					handleClick={handleAttributeClick}
					index={2}
					isMinorArtifact={isArtifactsScreen}
					isPreview={isPreview}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
					skills={skills['Finesse']}
				/>
				<NonogramSquare
					attackAttribute={isCombatScreen && rightAttack ? rightAttack.attribute : null}
					AttackRenderer={isCombatScreen && rightAttack ? rightAttack.renderer : null}
					attributeName={isCharacterScreen || isStylesScreen ? 'Perception' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Perception : null}
					handleClick={handleAttributeClick}
					index={3}
					isFaded={!isPreview && isCombatScreen && !rightAttack}
					isMinorArtifact={isArtifactsScreen}
					isPreview={isPreview}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
					skills={skills['Perception']}
				/>

				<NonogramSquare
					armorId={isCombatScreen && armor && armor[1]}
					armorLocation={isCombatScreen && 1}
					attributeName={isCharacterScreen || isStylesScreen ? 'Stamina' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Stamina : null}
					handleClick={handleAttributeClick}
					index={4}
					isMajorArtifact={isArtifactsScreen}
					isPreview={isPreview}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
					skills={skills['Stamina']}
				/>
				<NonogramSquare
					armorId={isCombatScreen && armor && armor[3]}
					armorLocation={isCombatScreen && 3}
					attributeName={isCharacterScreen || isStylesScreen ? 'Agility' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Agility : null}
					handleClick={handleAttributeClick}
					index={5}
					isMinorArtifact={isArtifactsScreen}
					isPreview={isPreview}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
					skills={skills['Agility']}
				/>
				<NonogramSquare
					attributeName={isCharacterScreen || isStylesScreen ? 'Wits' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Wits : null}
					handleClick={handleAttributeClick}
					index={6}
					isHidden={isCombatScreen}
					isMinorArtifact={isArtifactsScreen}
					isPreview={isPreview}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
					skills={skills['Wits']}
				/>

				<NonogramSquare
					attackAttribute={isCombatScreen && leftAttack ? leftAttack.attribute : null}
					AttackRenderer={isCombatScreen && leftAttack ? leftAttack.renderer : null}
					attributeName={isCharacterScreen || isStylesScreen ? 'Willpower' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Willpower : null}
					handleClick={handleAttributeClick}
					index={7}
					isFaded={!isPreview && isCombatScreen && !leftAttack}
					isMajorArtifact={isArtifactsScreen}
					isPreview={isPreview}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
					skills={skills['Willpower']}
				/>
				<NonogramSquare
					attributeName={isCharacterScreen || isStylesScreen ? 'Intelligence' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Intelligence : null}
					handleClick={handleAttributeClick}
					index={8}
					isHidden={isCombatScreen}
					isMinorArtifact={isArtifactsScreen}
					isPreview={isPreview}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
					skills={skills['Intelligence']}
				/>
				<NonogramSquare
					armorId={isCombatScreen && armor && armor[0]}
					armorLocation={isCombatScreen && 0}
					attributeName={isCharacterScreen || isStylesScreen ? 'Charisma' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Charisma : null}
					handleClick={handleAttributeClick}
					index={9}
					isMinorArtifact={isArtifactsScreen}
					isPreview={isPreview}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
					skills={skills['Charisma']}
				/>
			</div>
		);
	}
}
