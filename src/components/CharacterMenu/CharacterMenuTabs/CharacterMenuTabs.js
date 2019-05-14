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
					'CharacterMenuTabs_currentTab': currentTab === 'Styles',
				})}
				onClick={() => changeTab('Styles')}
				>
					Styles
				</div>

				<div 
				className={classNames({
					'CharacterMenuTabs_tab': true,
					'CharacterMenuTabs_currentTab': currentTab === 'Combat',
				})}
				onClick={() => changeTab('Combat')}
				>
					Combat
				</div>

				<div 
				className={classNames({
					'CharacterMenuTabs_tab': true,
					'CharacterMenuTabs_currentTab': currentTab === 'Artifacts',
				})}
				onClick={() => changeTab('Artifacts')}
				>
					Artifacts
				</div>
			</div>
		);
	}
}
