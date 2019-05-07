import React, { PureComponent, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import CharacterContext from '../../context/CharacterContext';
import CharacterMenuTabs from './CharacterMenuTabs/CharacterMenuTabs';
import CharacterSelectBar from './CharacterSelectBar/CharacterSelectBar';
import Nonogram from '../CharContent/Nonogram/Nonogram';
import './CharacterMenu.scss';

export default class CharacterMenu extends PureComponent {
	static contextType = CharacterContext;

	state = {
		currentTab: 'Attributes'
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
				//mountOnEnter
				//unmountOnExit
			>
				{ state => (
					<div className={'characterMenu'} >
						<div className={'characterMenu_closeButton'} onClick={() => toggleCharacterMenu(false)}>X</div>

						{ menuCharacter &&
							<Fragment>
								
								<CharacterSelectBar />
								<CharacterMenuTabs changeTab={this.changeTab} currentTab={currentTab} />

								<div className={'characterMenu_body'} >
									<Nonogram attributes={menuCharacter.attributes} isVisible={true} />
								</div>
							</Fragment>
						}
					</div>
				)}
			</CSSTransition>
		);
	}
}
