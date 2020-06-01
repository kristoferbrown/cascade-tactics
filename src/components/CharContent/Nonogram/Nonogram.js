import React, { Component } from 'react';
import AttributeSquare from './AttributeSquare/AttributeSquare';
import classNames from 'classnames';
import './Nonogram.scss';

export default class Nonogram extends Component {
	render() {
		const { attributes, currentTab, handleAttributeClick } = this.props
		return (
			<div className={classNames({
				'nonogram_container': true,
				'nonogram_character': currentTab === 'Character',
				'nonogram_combat': currentTab === 'Combat',
				'nonogram_styles': currentTab === 'Styles',
				'nonogram_artifacts': currentTab === 'Artifacts',
			})}>
				{Object.entries(attributes).map(attribute => (
					<AttributeSquare 
						key={`nonogram_${attribute[0]}`}
						attributeName={currentTab === 'Styles' ? attribute[0] : null}
						attributeScore={currentTab === 'Styles' ? attribute[1] : null}
						currentTab={currentTab}
						handleClick={handleAttributeClick}
					/>
				))}
			</div>
		);
	}
}
