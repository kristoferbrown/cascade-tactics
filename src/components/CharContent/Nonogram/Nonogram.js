import React, { Component } from 'react';
import AttributeSquare from './AttributeSquare/AttributeSquare';
import classNames from 'classnames';
import './Nonogram.scss';

export default class Nonogram extends Component {
	render() {
		const { attributes, isVisible } = this.props
		return (
			<div className={classNames({
				'nonogram_container': true,
				'nonogram_container_hidden': !isVisible
			})}>
				{Object.entries(attributes).map(attribute => (
					<AttributeSquare key={`nonogram_${attribute[0]}`} attributeName={attribute[0]} attributeScore={attribute[1]} />
				))}
			</div>
		);
	}
}
