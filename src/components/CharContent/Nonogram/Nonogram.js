import React, { Component } from 'react';
import NonogramSquare from './NonogramSquare/NonogramSquare';
import classNames from 'classnames';
import './Nonogram.scss';

export default class Nonogram extends Component {
	render() {
		const { attributes, currentTab, handleAttributeClick, isPreview, skills } = this.props;
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
					attributeName={isCharacterScreen || isStylesScreen ? 'Perception' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Perception : null}
					handleClick={handleAttributeClick}
					index={3}
					isMinorArtifact={isArtifactsScreen}
					isPreview={isPreview}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
					skills={skills['Perception']}
				/>

				<NonogramSquare
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
					attributeName={isCharacterScreen || isStylesScreen ? 'Willpower' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Willpower : null}
					handleClick={handleAttributeClick}
					index={7}
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
