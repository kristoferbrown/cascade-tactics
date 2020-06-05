import React, { PureComponent } from 'react';
import CharacterContext from '../../../../context/CharacterContext';
import FloatingRow from './FloatingRow/FloatingRow';
import StyleSummaryRow from './StyleSummaryRow/StyleSummaryRow';
import { styleTree } from '../../../../utils/styleDefinitions';
import './StylesScreen.scss';

export default class StylesScreen extends PureComponent {
	static contextType = CharacterContext;

	state = {
		selectedAttribute: ''
	}
	
	// TODO attribute selection was driven from nonogram before, it doesn't do anything right now
	// selectAttribute = attribute => {
	// 	this.setState({selectedAttribute: attribute});
	// }

	render() {
		const { menuCharacter } = this.context;
		const { selectedAttribute } = this.state;
		const filteredPermaStyles = styleTree.filter( style => {
			const currentCharStyle = menuCharacter.styles.permanent.classes[style.name];
			return (!!currentCharStyle.availableXp || !!currentCharStyle.spentXp);
		});
		const selectedStyleDefinition = styleTree.find( style => style.name === selectedAttribute);
		return (
			<div className={'StylesScreen'}>

				{ selectedAttribute.length ? (
					<div className={'StylesScreen_ListColumn'}>
						<div className={'StylesScreen_HeaderText'}>{selectedAttribute}</div>
						<StyleSummaryRow 
							definition={selectedStyleDefinition} 
							characterValues={menuCharacter.styles.permanent.classes[selectedAttribute]}
						/>
					</div>
				) : (
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
								<FloatingRow style={style} key={`char${menuCharacter.meta.charId}-float-${style.label}`} />
							))}
						</div>

						<div className={'StylesScreen_Section StylesScreen_StyleClasses'}>
							<div className={'StylesScreen_Row StylesScreen_HeaderRow'}>
								<div className={'StylesScreen_HeaderText'}>Permanent Styles</div>
							</div>
							{ !menuCharacter.styles.permanent.totalXp ? (
								<div className={'StylesScreen_BasicText'}>Assign floating styles within an attribute to start earning experience points in that attribute.</div>
							) : (
								filteredPermaStyles.map( style => (
									<StyleSummaryRow 
										definition={style} 
										characterValues={menuCharacter.styles.permanent.classes[style.name]}
										key={`char${menuCharacter.meta.charId}-permaSumm-${style.name}`}
									/>
								))
							)}
						</div>
					</div>
				)}
				
			</div>
		);
	}
}
