import React, { Component } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import ActionList from './ActionList/ActionList'
import './MapMenu.scss';

export default class MapMenu extends Component {
	render() {
		const { currSpeedCost, endTurn, label, menuOrigin, moveToTargetHex, setSpeedCost, targetedHex, targetedHexContains, targetedHexIndex } = this.props;
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
								translateX(${menuOrigin.right+5}px)
								translateY(${menuOrigin.top}px)
								translateZ(0)
							`
						}}
					>
						<div className='mapMenu_labelRow'>
							<div className='mapMenu_label'>
								<div>{label}</div>
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
									<ActionList
										currSpeedCost={currSpeedCost}
										endTurn={endTurn}
										moveToTargetHex={moveToTargetHex}
										setSpeedCost={setSpeedCost}
										targetedHex={targetedHex}
										targetedHexContains={targetedHexContains}
										targetedHexIndex={targetedHexIndex}
									/>
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