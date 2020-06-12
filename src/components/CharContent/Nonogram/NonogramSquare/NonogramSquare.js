import React, { Component } from 'react';
import classNames from 'classnames';
import './NonogramSquare.scss';

export default class NonogramSquare extends Component {
	render() {
		const { 
			attributeName,
			attributeScore,
			handleClick,
			isHidden,
			isMajorArtifact,
			isMinorArtifact,
			showStyleDots,
			showSkillRow,
			skills
		} = this.props;

		let dotArray = [];
		for (let i = 0; i < 9; i++) {
			dotArray.push(i < attributeScore ?
				<div key={`${attributeName}_dot_${i}`} className='NonogramSquare_dot NonogramSquare_dot_filled'/> :
				<div key={`${attributeName}_dot_${i}`} className='NonogramSquare_dot'/>
		)}

		return (
			<div
				className={classNames({
					'NonogramSquare': true,
					'NonogramSquare_hidden': isHidden,
					'NonogramSquare_preview': !showStyleDots,
					'NonogramSquare_majorArtifact': isMajorArtifact,
					'NonogramSquare_minorArtifact': isMinorArtifact,
					'NonogramSquare_str': attributeName === 'Strength',
					'NonogramSquare_fin': attributeName === 'Finesse',
					'NonogramSquare_per': attributeName === 'Perception',
					'NonogramSquare_stm': attributeName === 'Stamina',
					'NonogramSquare_agi': attributeName === 'Agility',
					'NonogramSquare_wit': attributeName === 'Wits',
					'NonogramSquare_wil': attributeName === 'Willpower',
					'NonogramSquare_int': attributeName === 'Intelligence',
					'NonogramSquare_cha': attributeName === 'Charisma',
				})}
				onClick={() => {handleClick && handleClick(attributeName)}}
			>
				{ showStyleDots && (<React.Fragment>
					<div className='NonogramSquare_label'>{attributeName}</div>
					<div className='NonogramSquare_dotTrack'>{dotArray}</div>
				</React.Fragment>)}

				{ showSkillRow && (<React.Fragment>
					{Object.entries(skills).map(skill => 
						<div className='NonogramSquare_skillRow'>
							<div className='NonogramSquare_skillLabel'>
								{skill[0]}
							</div>
							<div className='NonogramSquare_skillValue'>
								{/* {`${skill[1]}-${attributeScore+skill[1]}`} */}
								{`22-26`}
							</div>
						</div>
					)}
				</React.Fragment>)}
			</div>
		);
	}
}
