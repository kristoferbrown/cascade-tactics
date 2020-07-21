import React, { Component } from 'react';
import classNames from 'classnames';
import { armorList } from '../../../../content/armor/armorList'
import './NonogramSquare.scss';

export default class NonogramSquare extends Component {
	render() {
		const {
			armorId,
			armorLocation,
			attackAttribute,
			attributeName,
			attributeScore,
			handleClick,
			index,
			isHidden,
			isPreview,
			isMajorArtifact,
			isMinorArtifact,
			showStyleDots,
			showSkillRow,
			skills
		} = this.props;

		let dotArray = [];
		if (showStyleDots && !isPreview) {
			for (let i = 0; i < 9; i++) {
				dotArray.push(i < attributeScore ?
					<div key={`${attributeName}_dot_${i}`} className='NonogramSquare_dot NonogramSquare_dot_filled'/> :
					<div key={`${attributeName}_dot_${i}`} className='NonogramSquare_dot'/>
			)}
		}

		const hasArmorId = armorId === 0 || armorId > 0;
		const hasArmorLoc = armorLocation === 0 || armorLocation > 0;
		let armorObject = null;
		if (!isPreview && hasArmorId && hasArmorLoc) {
			armorObject = armorList[armorLocation][armorId];
		}

		return (
			<div
				className={classNames({
					'NonogramSquare': true,
					'NonogramSquare_hidden': isHidden,
					'NonogramSquare_preview': !showStyleDots,
					'NonogramSquare_majorArtifact': isMajorArtifact,
					'NonogramSquare_minorArtifact': isMinorArtifact,
					'NonogramSquare_str': attributeName === 'Strength' || attackAttribute === 'Strength',
					'NonogramSquare_fin': attributeName === 'Finesse' || attackAttribute === 'Finesse',
					'NonogramSquare_per': attributeName === 'Perception' || attackAttribute === 'Perception',
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
					<div className="NonogramSquare_innerContent">
						<div className='NonogramSquare_outerLabel'>{attributeName}</div>
						<div className='NonogramSquare_innerValue'>{attributeScore}</div>
						{Object.entries(skills).map(skill => 
							<div className='NonogramSquare_skillRow' key={`${skill}_skillRow`}>
								<div className='NonogramSquare_skillLabel'>
									{skill[0]}
								</div>
								<div className='NonogramSquare_skillValueContainer'>
								<div className='NonogramSquare_skillValue'>{`${skill[1]}-${attributeScore+skill[1]}`}</div>
								</div>
							</div>
						)}
					</div>
				</React.Fragment>)}

				{ armorObject && !!armorObject.renderer && (<React.Fragment>
					<div className="NonogramSquare_equipmentIcon">
						<armorObject.renderer width={75} height={75} />
					</div>
				</React.Fragment>)}

				{ isMajorArtifact && !isPreview && (<React.Fragment>
					{ index === 1 && <div className="NonogramSquare_majorArtLabel">bio_interface() not installed!</div>}
					{ index === 4 && <div className="NonogramSquare_majorArtLabel">cpu_interface() not installed!</div>}
					{ index === 7 && <div className="NonogramSquare_majorArtLabel">noo_interface() not installed!</div>}
				</React.Fragment>)}

				{ isMinorArtifact && !isPreview && (<React.Fragment>
					{ index === 3 && <div className="NonogramSquare_minorArtLabel">aperture() not found!</div>}
					{ index === 6 && <div className="NonogramSquare_minorArtLabel">program() not found!</div>}
					{ index === 9 && <div className="NonogramSquare_minorArtLabel">shield() not found!</div>}
				</React.Fragment>)}
			</div>
		);
	}
}
