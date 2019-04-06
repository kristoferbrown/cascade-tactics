import React, { Component } from 'react';
import DieOne from '../../../svgs/dice/die1';
import DieTwo from '../../../svgs/dice/die2';
import DieThree from '../../../svgs/dice/die3';
import DieFour from '../../../svgs/dice/die4';
import DieFive from '../../../svgs/dice/die5';
import DieSix from '../../../svgs/dice/die6';
import './DiceResultRow.scss';

export default class DiceResultRow extends Component {
	render() {
		const { results, bonus } = this.props;
		return (
			<div className="diceResultRow">
				{results.map((die, index) => {
					if (die === 1) {
						return <DieOne height={16} width={16} key={`die-result-${index}`} />
					} else if (die === 2) {
						return <DieTwo height={16} width={16} key={`die-result-${index}`} />
					} else if (die === 3) {
						return <DieThree height={16} width={16} key={`die-result-${index}`} />
					} else if (die === 4) {
						return <DieFour height={16} width={16} key={`die-result-${index}`} />
					} else if (die === 5) {
						return <DieFive height={16} width={16} key={`die-result-${index}`} />
					} else {
						return <DieSix height={16} width={16} key={`die-result-${index}`} />
					}
				})}
				<span className="diceResultRow-bonusLabel">{` + ${bonus}`}</span>
			</div>
		);
	}
}
