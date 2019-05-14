import React, { PureComponent } from 'react';
import CharacterContext from '../../../context/CharacterContext';
import Nonogram from '../../CharContent/Nonogram/Nonogram';
import './StylesScreen.scss';

export default class StylesScreen extends PureComponent {
	static contextType = CharacterContext;
	render() {
		const { menuCharacter } = this.context;
		return (
			<div className={'StylesScreen'}>
				<div className={'StylesScreen_NonogramColumn'}>
					<Nonogram attributes={menuCharacter.attributes} isVisible={true} />
				</div>

				<div className={'StylesScreen_ListColumn'}>

					<div className={'StylesScreen_Section StylesScreen_FloatingStyles'}>
						<div className={'StylesScreen_Row StylesScreen_HeaderRow'}>
							<div className={'StylesScreen_HeaderText'}>Floating Styles</div>
							{ !!menuCharacter.styles.floating.available && 
								<div className={'StylesScreen_HeaderDetail StylesScreen_AlertText'}>{menuCharacter.styles.floating.available} Available</div>
							}
						</div>
						{ !menuCharacter.styles.floating.assigned.length && 
							<div className={'StylesScreen_BasicText'}>Select an attribute to start assigning floating styles.</div>
						}
						{ menuCharacter.styles.floating.assigned.map( style => (
							<div className={`StylesScreen_Row fill_${style.attribute}`}>{style.label}</div>
						))}
					</div>

					<div className={'StylesScreen_Section StylesScreen_StyleClasses'}>
						<div className={'StylesScreen_Row StylesScreen_HeaderRow'}>
							<div className={'StylesScreen_HeaderText'}>Permanent Styles</div>
						</div>
						<div className={'StylesScreen_BasicText'}>Assign floating styles within an attribute to start earning experience points in that attribute.</div>
					</div>

				</div>
			</div>
		);
	}
}
