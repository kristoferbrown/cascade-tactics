import React, { Component } from 'react';
import { CharacterProvider } from './context/CharacterContext';
import CombatScreen from './components/CombatScreen/CombatScreen';
import EncounterScreen from './components/EncounterScreen/EncounterScreen';
import ExplorationScreen from './components/ExplorationScreen/ExplorationScreen';
import ProjectsScreen from './components/ProjectsScreen/ProjectsScreen';
import './App.scss';
import './Font.scss';

export default class App extends Component {
	state = {
		currentScreen: 'combat',
	}

	render() {
		const { currentScreen } = this.state;
		return (
			<CharacterProvider>
				{ currentScreen === 'combat' && <CombatScreen /> }
				{ currentScreen === 'encounter' && <EncounterScreen /> }
				{ currentScreen === 'exploration' && <ExplorationScreen /> }
				{ currentScreen === 'projects' && <ProjectsScreen /> }
				<div className="app_placeholderNav">
					<div className="basicButton small" onClick={() => this.setState({currentScreen: 'combat'})}>Combat</div>
					<div className="basicButton small" onClick={() => this.setState({currentScreen: 'projects'})}>Projects</div>
					<div className="basicButton small" onClick={() => this.setState({currentScreen: 'encounter'})}>Encounters</div>
					<div className="basicButton small" onClick={() => this.setState({currentScreen: 'exploration'})}>Exploration</div>
				</div>
			</CharacterProvider>
		);
	}
}