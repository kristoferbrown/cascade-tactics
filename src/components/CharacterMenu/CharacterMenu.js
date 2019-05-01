import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import CharacterContext from '../../context/CharacterContext';
import './CharacterMenu.scss';

export default class CharacterMenu extends PureComponent {
	static contextType = CharacterContext;
	render() {
		const { menuCharacter, showCharacterMenu, toggleCharacterMenu } = this.context;
		return (
			<CSSTransition
				in={showCharacterMenu}
				timeout={1}
				classNames="characterMenu"
				appear
				mountOnEnter
				unmountOnExit
			>
				{ state => (
					<div 
						onClick={() => toggleCharacterMenu(false)}
						className={classNames({
							'characterMenu': true,
						})}
					>
						<div>{`This is the character screen for: ${menuCharacter.meta.name}`}</div>
					</div>
				)}
			</CSSTransition>
		);
	}
}
