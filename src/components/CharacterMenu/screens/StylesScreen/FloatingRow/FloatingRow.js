import React from 'react';
import './FloatingRow.scss';

export default function FloatingRow(props) {
	const { style } = props;
	return (
		<div className={`floatingRow fill_${style.attribute}`}>
			<div className={'floatingRow_label'}>{style.label}</div>
			<div className={'floatingRow_unassignButton'}>Unassign</div>
		</div>
	);
}
