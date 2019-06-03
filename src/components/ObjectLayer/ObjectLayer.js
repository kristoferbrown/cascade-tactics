import React, { PureComponent } from 'react';
import classNames from 'classnames';
import CharacterContext from '../../context/CharacterContext';
import './ObjectLayer.scss';

export default class ObjectLayer extends PureComponent {
	static contextType = CharacterContext;

	render() {
		const { terrainObjects } = this.props;
		const { characters, currentCharacter } = this.context;
		return (
			<g className="objectLayer">
				{terrainObjects.map((tObject, index) => (
					<g
						className={'objectLayer_terrainObject'}
						key={`objectLayer_tObject${index}`}
						style={{
							transform: `translateX(${tObject.pixelLoc.x + tObject.mapOffset.x}px) translateY(${tObject.pixelLoc.y + tObject.mapOffset.y}px)`
						}}
					>
						{ tObject.mapRenderer() }
					</g>
				))}
				{characters.map(character => {
					return character.pixelLoc ? (
						<g
							className={classNames({
								'objectLayer_character': true,
								'objectLayer_cpuCharacter': character.meta.isCpuControlled,
								'objectLayer_hostile': character.meta.isHostile,
								'objectLayer_isSelected': character.meta.charId === currentCharacter.meta.charId,
								'objectLayer_isUnconscious': character.meta.isUnconscious,
								[character.mapClass]: !!character.mapClass
							})}
							key={`mapRenderer-${character.meta.charId}`}
							style={{
								transform: `translateX(${character.pixelLoc.x + character.mapOffset.x}px) translateY(${character.pixelLoc.y  + character.mapOffset.y}px)`
							}}
						>
							{ character.mapRenderer(character.pixelLoc, character.meta.charId === currentCharacter.meta.charId) }
						</g> 
					) : null;
				})}
			</g>
		);
	}
}