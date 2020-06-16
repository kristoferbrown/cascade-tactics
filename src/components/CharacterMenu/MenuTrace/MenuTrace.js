import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './MenuTrace.scss';

export default class MenuTrace extends PureComponent {
	constructor(props) {
		super(props);
		this.segmentList = [];
		this.currentLeftPos = 0;
		this.currentRightPos = 0;
		this.currentTopPos = 0;
		this.currentBottomPos = 0;
		this.props.segments.forEach((segment, index) => {
			const { isRTL, isBTT } = this.props;
			const { isDiagonal, isHorizontal, isVertical, length } = segment;
			this.segmentList.push(
				<div 
					className={classNames({
						'MenuTrace_segment': true,
						'diagonalDown': isDiagonal && !isBTT,
						'diagonalUp': isDiagonal && isBTT,
						'horizontal': isHorizontal,
						'vertical': isVertical,
					})}
					style={{
						animationDelay: `0.${index}s`,
						left: isRTL ? 'auto' : this.currentLeftPos,
						right: isRTL ? this.currentRightPos : 'auto',
						top: isBTT ? 'auto' : this.currentTopPos,
						bottom: isBTT ? this.currentBottomPos : 'auto',
						width: length,
					}}
				/>
			);
			let offsetX = isDiagonal ? length/2 : length;
			let offsetY = isDiagonal ? length/2+10 : length;
			if (isHorizontal || isDiagonal) {
				if (isRTL) {
					this.currentRightPos = this.currentRightPos+offsetX;
				} else {
					this.currentLeftPos = this.currentLeftPos+offsetX;
				}
			}
			if (isVertical || isDiagonal) {
				if (isBTT) {
					this.currentBottomPos = this.currentBottomPos+offsetY;
				} else {
					this.currentTopPos = this.currentTopPos+offsetY;
				}
			}
		});
	}

	render() {
		const { originX, originY } = this.props;

		return (
			<div className={'MenuTrace'} style={{left: originX, top: originY}}>
				{ this.segmentList.map(segment => (segment)) }
			</div>
		);
	}
}
