import React, { Component } from 'react';
import classNames from 'classnames';
import './AttributeSquare.scss';

export default class AttributeSquare extends Component {
	render() {
		const { 
			attributeName,
			attributeScore,
			handleClick,
			isHidden,
			isMajorArtifact,
			isMinorArtifact,
			showContent
		} = this.props;
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
					'attributeSquare_hidden': isHidden,
					'attributeSquare_preview': !showContent,
					'attributeSquare_majorArtifact': isMajorArtifact,
					'attributeSquare_minorArtifact': isMinorArtifact,
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
				{ showContent && (<React.Fragment>
					<div className='attributeSquare_label'>{attributeName}</div>
					<div className='attributeSquare_dotTrack'>{dotArray}</div>
				</React.Fragment>)}
			</div>
		);
	}
}
