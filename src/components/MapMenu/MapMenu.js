import React, { Component } from 'react';
import classNames from 'classnames';
import './MapMenu.scss';

export default class MapMenu extends Component {
	render() {
		const { currSpeedCost, mapDefaults, menuOrigin } = this.props;
		return (
			!!menuOrigin ? (
				<div 
					style={{
						minHeight: `${menuOrigin.height}px`,
						left: `${menuOrigin.right+5}px`,
						top: `${menuOrigin.top}px`,
					}}
					className={classNames({
						'mapMenu': true,
						'mapMenu_visible': !!menuOrigin
				})}>
					<div className='mapMenu_labelRow'>{mapDefaults.terrain}</div>
					<div className='mapMenu_speedRow'>
						<span className='mapMenu_speedCost'>{`-${currSpeedCost}`}</span> Speed
					</div>
				</div>
			) : null
		);
	}
}