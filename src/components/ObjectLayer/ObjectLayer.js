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
						key={`mapRenderer-${character.meta.charId}`}
						className={classNames({
							'objectLayer_character': true,
							'objectLayer_cpuCharacter': character.meta.isCpuControlled,
							'objectLayer_isSelected': character.meta.charId === currChar.meta.charId,
						})}
					>
						{ character.mapRenderer(character.pixelLoc) }
						{ <Text x={character.pixelLoc.x} y={character.pixelLoc.y} className="objectLayer_nameText">{character.meta.name}</Text> }
					</g>
				)}
			</g>
		);
	}
}