import React from 'react';
import { floatingStyleList } from '../../../../../content/styles/floatingStyleList'
import './FloatingRow.scss';

export default function FloatingRow(props) {
	const { style } = props;
	return (
		<div className={`floatingRow fill_${style}`}>
			<div className={'floatingRow_label'}>{style}</div>
			<div className={'floatingRow_unassignButton'}>Unassign</div>
			<div className={'floatingRow_description'}>{floatingStyleList[style].tier1}</div>
			<div className={'floatingRow_description floatingRow_locked'}>
				<span className="strong">At 4 {`${style}: `}</span>
				{floatingStyleList[style].tier2}
			</div>
			<div className={'floatingRow_description floatingRow_locked'}>
				<span className="strong">At 7 {`${style}: `}</span>
				{floatingStyleList[style].tier3}
			</div>
		</div>
	);
}
