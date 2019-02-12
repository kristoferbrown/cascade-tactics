import React, { Component } from 'react';
import CombatScreen from './components/CombatScreen/CombatScreen';
import { CharacterProvider } from './context/CharacterContext';
import './App.scss';

export default class App extends Component {
	render() {
		return (
			<CharacterProvider>
				<CombatScreen />
			</CharacterProvider>
		);
	}
}