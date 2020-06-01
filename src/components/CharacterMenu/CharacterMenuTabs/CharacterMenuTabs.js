import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './CharacterMenuTabs.scss';

export default class CharacterMenuTabs extends PureComponent {
	render() {
		const { changeTab, currentTab } = this.props;
		return (
			<div className={'CharacterMenuTabs'}>

				<div 
				className={classNames({
					'CharacterMenuTabs_tab': true,
					'CharacterMenuTabs_currentTab': currentTab === 'Character',
				})}
				onClick={() => changeTab('Character')}
				>
					<span className={'CharacterMenuTabs_tabText'}>Character</span>
				</div>

				<div 
					className={classNames({
						'CharacterMenuTabs_tab': true,
						'CharacterMenuTabs_currentTab': currentTab === 'Combat',
					})}
					onClick={() => changeTab('Combat')}
				>
					<span className={'CharacterMenuTabs_tabText'}>Combat</span>
				</div>

				<div 
					className={classNames({
						'CharacterMenuTabs_tab': true,
						'CharacterMenuTabs_currentTab': currentTab === 'Styles',
					})}
					onClick={() => changeTab('Styles')}
				>
					<span className={'CharacterMenuTabs_tabText'}>Styles</span>
				</div>

				<div 
					className={classNames({
						'CharacterMenuTabs_tab': true,
						'CharacterMenuTabs_currentTab': currentTab === 'Artifacts',
					})}
					onClick={() => changeTab('Artifacts')}
				>
					<span className={'CharacterMenuTabs_tabText'}>Artifacts</span>
				</div>
			</div>
		);
	}
}
