import React, { Component } from 'react';
import classNames from 'classnames';
import './AttributeSquare.scss';

export default class AttributeSquare extends Component {
	shouldComponentUpdate(nextProps) {
		return this.props.attributeScore !== nextProps.attributeScore;
	}

	render() {
		const { attributeName, attributeScore, handleClick } = this.props;
		let dotArray = [];
		for (let i = 0; i < 9; i++) {
			dotArray.push(i < attributeScore ?
				<div key={`${attributeName}_dot_${i}`} className='attributeSquare_dot attributeSquare_dot_filled'/> :
				<div key={`${attributeName}_dot_${i}`} className='attributeSquare_dot'/>
		)}
		return (
			<div
				className={classNames({
					'attributeSquare': true,
					'attributeSquare_str': attributeName === 'Strength',
					'attributeSquare_fin': attributeName === 'Finesse',
					'attributeSquare_per': attributeName === 'Perception',
					'attributeSquare_stm': attributeName === 'Stamina',
					'attributeSquare_agi': attributeName === 'Agility',
					'attributeSquare_wit': attributeName === 'Wits',
					'attributeSquare_wil': attributeName === 'Willpower',
					'attributeSquare_int': attributeName === 'Intelligence',
					'attributeSquare_cha': attributeName === 'Charisma',
				})}
				onClick={() => {handleClick && handleClick(attributeName)}}
			>
				{ attributeName && (<React.Fragment>
					<div className='attributeSquare_label'>{attributeName}</div>
					<div className='attributeSquare_dotTrack'>{dotArray}</div>
				</React.Fragment>)}
			</div>
		);
	}
}
