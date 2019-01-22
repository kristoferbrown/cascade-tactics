import React, { Component } from 'react';
import { Text } from 'react-hexgrid';
import classNames from 'classnames';
import './ObjectLayer.scss';

export default class ObjectLayer extends Component {
	render() {
		const { characters, currChar } = this.props;
		return (
			<g className="objectLayer">
				{characters.map(character =>
					<g
						className={classNames({
							'objectLayer_character': true,
							'objectLayer_cpuCharacter': character.meta.isCpuControlled,
							'objectLayer_hostile': character.meta.isHostile,
							'objectLayer_isSelected': character.meta.charId === currChar.meta.charId,
						})}
						key={`mapRenderer-${character.meta.charId}`}
						style={{
							transform: `translateX(${character.pixelLoc.x + character.mapOffset.x}px) translateY(${character.pixelLoc.y  + character.mapOffset.y}px)`
						}}
					>
						{ character.mapRenderer(character.pixelLoc, character.meta.charId === currChar.meta.charId) }
						{ false &&  character.meta.charId === currChar.meta.charId &&
							<Text className="objectLayer_nameText">{character.meta.name}</Text>
						}
					</g>
				)}
			</g>
		);
	}
}