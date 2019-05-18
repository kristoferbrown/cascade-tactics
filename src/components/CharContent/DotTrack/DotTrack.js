import React from 'react';
import './DotTrack.scss';

export default function DotTrack(props) {
		const { filled, keyPrefix, max } = props;

		let dotArray = [];
		for (let i = 0; i < max; i++) {
			dotArray.push(i < filled ?
				<div key={`${keyPrefix}_dot_${i}`} className='dotTrack_dot dotTrack_dot_filled'/> :
				<div key={`${keyPrefix}_dot_${i}`} className='dotTrack_dot'/>
		)}

		return (
			<div className='dotTrack'>
				{dotArray}
			</div>
		);
}
