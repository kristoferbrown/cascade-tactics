import React, { Component } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import './MapMenu.scss';

export default class MapMenu extends Component {
	render() {
		const { currSpeedCost, mapDefaults, menuOrigin, targetedHex } = this.props;
		return (
			 !!menuOrigin ? (
			<CSSTransition
				in={!!menuOrigin}
				timeout={1}
				classNames="mapMenu"
				appear
				mountOnEnter
				unmountOnExit
			>
				{ state => (
					<div
						className='mapMenu'
						style={{
							transform: `
								translate(${menuOrigin.right+5}px)
								translateY(${menuOrigin.top}px)
							`
						}}
					>
						<div className='mapMenu_labelRow'>
							<div className='mapMenu_label'>
								<div>{mapDefaults.terrain}</div>
								<div><span className='mapMenu_speedCost'>{`-${currSpeedCost}`}</span> Speed</div>
							</div>
							<div className={classNames({
								'mapMenu_shadowMask': true,
								'mapMenu_shadowMask_visible': !!targetedHex
							})} />
						</div>
						<CSSTransition
							in={!!targetedHex}
							timeout={1}
							classNames="mapMenuContent"
							appear
							mountOnEnter
							unmountOnExit
						>
							{ state => (
								<div className='mapMenuContent'>
									<div className='mapMenuContent_placeholderAction' />
									<div className='mapMenuContent_placeholderAction' />
									<div className='mapMenuContent_placeholderAction' />
									<div className='mapMenuContent_shadowMask' />
								</div>
							)}
						</CSSTransition>
					</div>
				)}
			</CSSTransition>
			) : null
		);
	}
}