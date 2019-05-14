import React, { PureComponent, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import CharacterContext from '../../context/CharacterContext';
import CharacterMenuTabs from './CharacterMenuTabs/CharacterMenuTabs';
import CharacterSelectBar from './CharacterSelectBar/CharacterSelectBar';
import StylesScreen from './StylesScreen/StylesScreen';
import './CharacterMenu.scss';

export default class CharacterMenu extends PureComponent {
	static contextType = CharacterContext;

	state = {
		currentTab: 'Styles'
	}
	
	changeTab = (newTab) => {
		this.setState({currentTab: newTab});
	}

	render() {
		const { currentTab } = this.state;
		const { menuCharacter, showCharacterMenu, toggleCharacterMenu } = this.context;
		return (
			<CSSTransition
				in={showCharacterMenu}
				timeout={1}
				classNames="characterMenu"
				appear
			>
				{ state => (
					<div className={'characterMenu'}>
						<div className={'characterMenu_closeButton'} onClick={() => toggleCharacterMenu(false)}>X</div>

						{ menuCharacter &&
							<Fragment>

								<CharacterSelectBar />
								<CharacterMenuTabs changeTab={this.changeTab} currentTab={currentTab} />

								<div className={'characterMenu_body'} >
									{ currentTab === 'Combat' && <div>This is the combat screen for {menuCharacter.meta.name}</div> }
									{ currentTab === 'Styles' && <StylesScreen /> }
									{ currentTab === 'Artifacts' && <div>This is the artifact screen for {menuCharacter.meta.name}</div> }
								</div>
							</Fragment>
						}
					</div>
				)}
			</CSSTransition>
		);
	}
}
