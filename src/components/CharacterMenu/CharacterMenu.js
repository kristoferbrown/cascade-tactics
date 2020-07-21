import React, { PureComponent, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import CharacterContext from '../../context/CharacterContext';
import CharacterMenuTabs from './CharacterMenuTabs/CharacterMenuTabs';
import CharacterSelectBar from './CharacterSelectBar/CharacterSelectBar';
import Nonogram from '../CharContent/Nonogram/Nonogram';
import CharacterScreen from './screens/CharacterScreen/CharacterScreen';
import MenuCombatScreen from './screens/MenuCombatScreen/MenuCombatScreen';
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

								<div className={'characterMenu_bodyContainer'} >
									<Nonogram 
										armor={menuCharacter.armor}
										attributes={menuCharacter.attributes}
										leftAttack={menuCharacter.attacks.left}
										rightAttack={menuCharacter.attacks.right}
										skills={menuCharacter.skills}
										currentTab={currentTab}
										isVisible={true} 
										//handleAttributeClick={this.selectAttribute}
									/>

									<div className={'characterMenu_body'} >
										{ currentTab === 'Character' && <CharacterScreen /> }
										{ currentTab === 'Combat' && <MenuCombatScreen /> }
										{ currentTab === 'Styles' && <StylesScreen /> }
										{ currentTab === 'Artifacts' && <ArtifactsScreen /> }
									</div>
								</div>
							</Fragment>
						}
					</div>
				)}
			</CSSTransition>
		);
	}
}
