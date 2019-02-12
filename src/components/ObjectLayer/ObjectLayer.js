import React, { PureComponent } from 'react';
import classNames from 'classnames';
import CharacterContext from '../../context/CharacterContext';
import './ObjectLayer.scss';

export default class ObjectLayer extends PureComponent {
	static contextType = CharacterContext;

	componentDidMount() {
		console.log('objectlayer mounted', this.context.characters)
	}

	componentDidUpdate() {
		console.log('objectlayer updated', this.context.characters)
	}

	render() {
		const { characters, currentCharacter } = this.context;
		return (
			<g className="objectLayer">
				{characters.map(character => {
					console.log('objectlayer rendering', character)
					return character.pixelLoc ? (
						<g
							className={classNames({
								'objectLayer_character': true,
								'objectLayer_cpuCharacter': character.meta.isCpuControlled,
								'objectLayer_hostile': character.meta.isHostile,
								'objectLayer_isSelected': character.meta.charId === currentCharacter.meta.charId,
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