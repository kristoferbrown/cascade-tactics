import React, { Component } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import ActionList from './ActionList/ActionList'
import AttackResults from './AttackResults/AttackResults'
import './MapMenu.scss';

export default class MapMenu extends Component {
	state = {
		rollResults: {},
		showResults: false,
	}

	resultDisplayTimer = null;

	cullResults = () => {
		this.setState({showResults: false, rollResults: {}})
		this.props.endTurn();
	}

	showResults = (attackResult, attackUsed, defenseResult) => {
		this.setState(
			{showResults: true, rollResults: {attackResult, attackUsed, defenseResult}},
			() => setTimeout(this.cullResults, 1200)
		);
	}

	render() {
		const { currSpeedCost, endTurn, label, menuOrigin, moveToTargetHex, setSpeedCost, targetedHex, targetedHexContains, targetedHexIndex } = this.props;
		const { rollResults, showResults } = this.state;
		const { attackResult, attackUsed, defenseResult } = rollResults;
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
									{ showResults ? (
										<AttackResults
											attackResult={attackResult}
											attackUsed={attackUsed}
											defenseResult={defenseResult}
										/>
									) : (
										<ActionList
											currSpeedCost={currSpeedCost}
											endTurn={endTurn}
											moveToTargetHex={moveToTargetHex}
											setSpeedCost={setSpeedCost}
											showAttackResults={this.showResults}
											targetedHex={targetedHex}
											targetedHexContains={targetedHexContains}
											targetedHexIndex={targetedHexIndex}
										/>
									)}
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