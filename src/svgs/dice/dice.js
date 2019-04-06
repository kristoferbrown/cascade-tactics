import React, { PureComponent } from 'react';

export default class Dice extends PureComponent {
	render() {
		const { height, width } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 1181 1181">
				<path fill="#FFF" fillOpacity="0.5" d="M1033.46 236.22l-88.578-88.582H236.22l-88.582 88.582v708.662l88.582 88.578h708.662l88.578-88.578V236.22zM812.008 723.425c48.923 0 88.583 39.66 88.583 88.583s-39.66 88.583-88.583 88.583-88.583-39.66-88.583-88.583 39.66-88.583 88.583-88.583zm-442.914 0c48.923 0 88.583 39.66 88.583 88.583s-39.66 88.583-88.583 88.583c-48.922 0-88.582-39.66-88.582-88.583s39.66-88.583 88.582-88.583zm.591-221.456c48.923 0 88.583 39.659 88.583 88.582 0 48.923-39.66 88.583-88.583 88.583s-88.583-39.66-88.583-88.583 39.66-88.582 88.583-88.582zm442.323 0c48.923 0 88.583 39.659 88.583 88.582 0 48.923-39.66 88.583-88.583 88.583s-88.583-39.66-88.583-88.583 39.66-88.582 88.583-88.582zM369.094 281.102c48.923 0 88.583 39.66 88.583 88.583s-39.66 88.583-88.583 88.583c-48.922 0-88.582-39.66-88.582-88.583s39.66-88.583 88.582-88.583zm442.914-.59c48.923 0 88.583 39.66 88.583 88.582 0 48.923-39.66 88.583-88.583 88.583s-88.583-39.66-88.583-88.583c0-48.922 39.66-88.582 88.583-88.582z"/>
			</svg>
		)
	}
}