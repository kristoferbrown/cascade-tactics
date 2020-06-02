import React, { Component } from 'react';
import AttributeSquare from './AttributeSquare/AttributeSquare';
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

				<AttributeSquare
					attributeName={isStylesScreen ? 'Strength' : null}
					attributeScore={isStylesScreen ? attributes.Strength : null}
					handleClick={handleAttributeClick}
					isMajorArtifact={isArtifactsScreen}
					showContent={isStylesScreen && !isPreview}
				/>
				<AttributeSquare
					attributeName={isStylesScreen ? 'Finesse' : null}
					attributeScore={isStylesScreen ? attributes.Finesse : null}
					handleClick={handleAttributeClick}
					isMinorArtifact={isArtifactsScreen}
					showContent={isStylesScreen && !isPreview}
				/>
				<AttributeSquare
					attributeName={isStylesScreen ? 'Perception' : null}
					attributeScore={isStylesScreen ? attributes.Perception : null}
					handleClick={handleAttributeClick}
					isMinorArtifact={isArtifactsScreen}
					showContent={isStylesScreen && !isPreview}
				/>

				<AttributeSquare
					attributeName={isStylesScreen ? 'Stamina' : null}
					attributeScore={isStylesScreen ? attributes.Stamina : null}
					handleClick={handleAttributeClick}
					isMajorArtifact={isArtifactsScreen}
					showContent={isStylesScreen && !isPreview}
				/>
				<AttributeSquare
					attributeName={isStylesScreen ? 'Agility' : null}
					attributeScore={isStylesScreen ? attributes.Agility : null}
					handleClick={handleAttributeClick}
					isMinorArtifact={isArtifactsScreen}
					showContent={isStylesScreen && !isPreview}
				/>
				<AttributeSquare
					attributeName={isStylesScreen ? 'Wits' : null}
					attributeScore={isStylesScreen ? attributes.Wits : null}
					handleClick={handleAttributeClick}
					isHidden={isCombatScreen}
					isMinorArtifact={isArtifactsScreen}
					showContent={isStylesScreen && !isPreview}
				/>

				<AttributeSquare
					attributeName={isStylesScreen ? 'Willpower' : null}
					attributeScore={isStylesScreen ? attributes.Willpower : null}
					handleClick={handleAttributeClick}
					isMajorArtifact={isArtifactsScreen}
					showContent={isStylesScreen && !isPreview}
				/>
				<AttributeSquare
					attributeName={isStylesScreen ? 'Intelligence' : null}
					attributeScore={isStylesScreen ? attributes.Intelligence : null}
					handleClick={handleAttributeClick}
					isHidden={isCombatScreen}
					isMinorArtifact={isArtifactsScreen}
					showContent={isStylesScreen && !isPreview}
				/>
				<AttributeSquare
					attributeName={isStylesScreen ? 'Charisma' : null}
					attributeScore={isStylesScreen ? attributes.Charisma : null}
					handleClick={handleAttributeClick}
					isMinorArtifact={isArtifactsScreen}
					showContent={isStylesScreen && !isPreview}
				/>
			</div>
		);
	}
}
