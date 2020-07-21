import React, { PureComponent } from 'react';
import classNames from 'classnames';
import CharacterContext from '../../../context/CharacterContext';
import Nonogram from '../../CharContent/Nonogram/Nonogram'
import './CharacterMenuTabs.scss';

export default class CharacterMenuTabs extends PureComponent {
	static contextType = CharacterContext;

	render() {
		const { changeTab, currentTab } = this.props;
		const { menuCharacter } = this.context;

		return (
			<div className={'CharacterMenuTabs'}>

				<div 
				className={classNames({
					'CharacterMenuTabs_tab': true,
					'CharacterMenuTabs_currentTab': currentTab === 'Character',
				})}
				onClick={() => changeTab('Character')}
				>
					{menuCharacter.mapRenderer({x:0,y:0}, true)}
					<div className={'CharacterMenuTabs_tabText'}>Character</div>
				</div>

				<div 
					className={classNames({
						'CharacterMenuTabs_tab': true,
						'CharacterMenuTabs_currentTab': currentTab === 'Combat',
					})}
					onClick={() => changeTab('Combat')}
				>
					<Nonogram 
						attributes={menuCharacter.attributes}
						skills={menuCharacter.skills}
						currentTab={'Combat'}
						isVisible
						isPreview
					/>
					<div className={'CharacterMenuTabs_tabText withMargin'}>Combat</div>
				</div>

				<div 
					className={classNames({
						'CharacterMenuTabs_tab': true,
						'CharacterMenuTabs_currentTab': currentTab === 'Styles',
					})}
					onClick={() => changeTab('Styles')}
				>
					<Nonogram 
						attributes={menuCharacter.attributes}
						skills={menuCharacter.skills}
						currentTab={'Styles'}
						isVisible
						isPreview
					/>
					<div className={'CharacterMenuTabs_tabText withMargin'}>Styles</div>
				</div>

				<div 
					className={classNames({
						'CharacterMenuTabs_tab': true,
						'CharacterMenuTabs_currentTab': currentTab === 'Artifacts',
					})}
					onClick={() => changeTab('Artifacts')}
				>
					<Nonogram 
						attributes={menuCharacter.attributes}
						skills={menuCharacter.skills}
						currentTab={'Artifacts'}
						isVisible
						isPreview
					/>
					<div className={'CharacterMenuTabs_tabText withMargin'}>Artifacts</div>
				</div>
			</div>
		);
	}
}
