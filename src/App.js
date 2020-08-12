import React, { Component } from 'react';
import { CharacterProvider } from './context/CharacterContext';
import AftermathScreen from './components/AftermathScreen/AftermathScreen';
import CombatScreen from './components/CombatScreen/CombatScreen';
import EncounterScreen from './components/EncounterScreen/EncounterScreen';
import ProjectScreen from './components/ProjectScreen/ProjectScreen';
import './App.scss';
import './Font.scss';

export default class App extends Component {
	state = {
		currentScreen: 'exploration',
	}

	render() {
		const { currentScreen } = this.state;
		return (
			<CharacterProvider>
				{ currentScreen === 'aftermath' && <AftermathScreen /> }
				{ currentScreen === 'combat' && <CombatScreen /> }
				{ currentScreen === 'encounter' && <EncounterScreen /> }
				{ currentScreen === 'exploration' && <ProjectScreen mapId={1} /> }
				{ currentScreen === 'projects' && <ProjectScreen mapId={0} /> }
				<div className={`app_debugMenu ${currentScreen}`}>
					<div>Debug menu:</div>
					<div className="basicButton small" onClick={() => this.setState({currentScreen: 'combat'})}>Combat</div>
					<div className="basicButton small" onClick={() => this.setState({currentScreen: 'aftermath'})}>Aftermath</div>
					<div className="basicButton small" onClick={() => this.setState({currentScreen: 'projects'})}>Projects</div>
					<div className="basicButton small" onClick={() => this.setState({currentScreen: 'exploration'})}>Exploration</div>
					<div className="basicButton small" onClick={() => this.setState({currentScreen: 'encounter'})}>Encounters</div>
				</div>
			</CharacterProvider>
		);
	}
}