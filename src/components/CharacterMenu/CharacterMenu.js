import React, { PureComponent, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import CharacterContext from '../../context/CharacterContext';
import CharacterMenuTabs from './CharacterMenuTabs/CharacterMenuTabs';
import CharacterSelectBar from './CharacterSelectBar/CharacterSelectBar';
import Nonogram from '../CharContent/Nonogram/Nonogram';
import CharacterScreen from './screens/CharacterScreen/CharacterScreen';
import CombatScreen from './screens/CombatScreen/CombatScreen';
import StylesScreen from './screens/StylesScreen/StylesScreen';
import ArtifactsScreen from './screens/ArtifactsScreen/ArtifactsScreen';
import './CharacterMenu.scss';

export default class CharacterMenu extends PureComponent {
	static contextType = CharacterContext;

	state = {
		currentTab: 'Character'
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

								<Nonogram 
									attributes={menuCharacter.attributes}
									currentTab={currentTab}
									isVisible={true} 
									//handleAttributeClick={this.selectAttribute}
								/>

								<div className={'characterMenu_body'} >
									{ currentTab === 'Character' && <CharacterScreen /> }
									{ currentTab === 'Combat' && <CombatScreen /> }
									{ currentTab === 'Styles' && <StylesScreen /> }
									{ currentTab === 'Artifacts' && <ArtifactsScreen /> }
								</div>
							</Fragment>
						}
					</div>
				)}
			</CSSTransition>
		);
	}
}
