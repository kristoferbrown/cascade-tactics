import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './MenuTrace.scss';

export default class MenuTrace extends PureComponent {
	state = {
		segmentList: []
	}

	static getDerivedStateFromProps(nextProps) {
		const { segments, segmentClass, isRTL, isBTT } = nextProps;
		let newSegments = []
		let currentLeftPos = 0;
		let currentRightPos = 0;
		let currentTopPos = 0;
		let currentBottomPos = 0;
		const animationMultiplier = segments.length === 2 ? 2 : 1;
		segments.forEach((segment, index) => {
			const { isDiagonal, isHorizontal, isVertical, length, preOffsetX = 0,  preOffsetY = 0 } = segment;
			newSegments.push(
				<div 
					className={classNames({
						'MenuTrace_segment': true,
						[segmentClass]: !!segmentClass,
						'vertical': isVertical,
						'diagonalDown': isDiagonal && !isBTT,
						'diagonalUp': isDiagonal && isBTT,
						'horizontal': isHorizontal,
						'horizontalRTL': isHorizontal && isRTL,
						'diagonalUpRTL': isDiagonal && isBTT && isRTL,
						'diagonalDownRTL': isDiagonal && !isBTT && isRTL,

					})}
					style={{
						animationDelay: `0.${index*animationMultiplier+3}s`,
						animationDuration: `0.${index*animationMultiplier ? index*animationMultiplier : animationMultiplier}s`,
						left: isRTL ? 'auto' : currentLeftPos+preOffsetX,
						right: isRTL ? currentRightPos+preOffsetX : 'auto',
						top: isBTT ? 'auto' : currentTopPos+preOffsetY,
						bottom: isBTT ? currentBottomPos+preOffsetY : 'auto',
						width: length,
					}}
					key={`traceSegment_${index}`}
				/>
			);
			let offsetX = isDiagonal ? length/2 : length;
			let offsetY = isDiagonal ? length/2 : length;
			if (isHorizontal || isDiagonal) {
				if (isRTL) {
					currentRightPos = currentRightPos+offsetX+preOffsetX;
				} else {
					currentLeftPos = currentLeftPos+offsetX+preOffsetX;
				}
			}
			if (isVertical || isDiagonal) {
				if (isBTT) {
					currentBottomPos = currentBottomPos+offsetY+preOffsetY;
				} else {
					currentTopPos = currentTopPos+offsetY+preOffsetY;
				}
			}
		});
		return { segmentList: newSegments}
	}

	render() {
		const { originX, originY } = this.props;

		return (
			<div className={'MenuTrace'} style={{left: originX, top: originY}}>
				{ this.state.segmentList.map(segment => (segment)) }
			</div>
		);
	}
}
