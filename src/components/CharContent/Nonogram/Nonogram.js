import React, { Component } from 'react';
import NonogramSquare from './NonogramSquare/NonogramSquare';
import classNames from 'classnames';
import './Nonogram.scss';

export default class Nonogram extends Component {
	render() {
		const { attributes, currentTab, handleAttributeClick, isPreview } = this.props;
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
					isMajorArtifact={isArtifactsScreen}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
				/>
				<NonogramSquare
					attributeName={isCharacterScreen || isStylesScreen ? 'Finesse' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Finesse : null}
					handleClick={handleAttributeClick}
					isMinorArtifact={isArtifactsScreen}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
				/>
				<NonogramSquare
					attributeName={isCharacterScreen || isStylesScreen ? 'Perception' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Perception : null}
					handleClick={handleAttributeClick}
					isMinorArtifact={isArtifactsScreen}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
				/>

				<NonogramSquare
					attributeName={isCharacterScreen || isStylesScreen ? 'Stamina' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Stamina : null}
					handleClick={handleAttributeClick}
					isMajorArtifact={isArtifactsScreen}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
				/>
				<NonogramSquare
					attributeName={isCharacterScreen || isStylesScreen ? 'Agility' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Agility : null}
					handleClick={handleAttributeClick}
					isMinorArtifact={isArtifactsScreen}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
				/>
				<NonogramSquare
					attributeName={isCharacterScreen || isStylesScreen ? 'Wits' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Wits : null}
					handleClick={handleAttributeClick}
					isHidden={isCombatScreen}
					isMinorArtifact={isArtifactsScreen}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
				/>

				<NonogramSquare
					attributeName={isCharacterScreen || isStylesScreen ? 'Willpower' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Willpower : null}
					handleClick={handleAttributeClick}
					isMajorArtifact={isArtifactsScreen}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
				/>
				<NonogramSquare
					attributeName={isCharacterScreen || isStylesScreen ? 'Intelligence' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Intelligence : null}
					handleClick={handleAttributeClick}
					isHidden={isCombatScreen}
					isMinorArtifact={isArtifactsScreen}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
				/>
				<NonogramSquare
					attributeName={isCharacterScreen || isStylesScreen ? 'Charisma' : null}
					attributeScore={isCharacterScreen || isStylesScreen ? attributes.Charisma : null}
					handleClick={handleAttributeClick}
					isMinorArtifact={isArtifactsScreen}
					showStyleDots={isStylesScreen && !isPreview}
					showSkillRow={isCharacterScreen && !isPreview}
				/>
			</div>
		);
	}
}
