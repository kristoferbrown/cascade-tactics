import React, { Component } from 'react';
import WorldMapRenderer from "../../content/maps/worldMap";
import './ProjectScreen.scss';

export default class ProjectScreen extends Component {

	render() {
		return (
			<div className="projectScreen">
				<WorldMapRenderer />
			</div>
		);
	}
}