import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './MenuTrace.scss';

export default class MenuTrace extends PureComponent {
	render() {
		const { originStyle, originX, originY, segments } = this.props;

		return (
			<div className={'MenuTrace'} style={originStyle}>
				{ segments.map(segment => (
					<div 
						className={classNames({
							'MenuTrace_segment': true,
							'diagonalDown': segment.isDiagonalDown,
						})}
						style={{width: segment.length}}
					/>
				))
				}
			</div>
		);
	}
}
