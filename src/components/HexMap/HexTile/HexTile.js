import React, { PureComponent } from 'react';
import { Hexagon } from 'react-hexgrid';

import classNames from 'classnames';
import './HexTile.scss';

export default class HexTile extends PureComponent {
	onHexClick(event, element, hex) {
		const { clearPath, contains, hexListIndex, isClickable, onTarget } = this.props;
		if (isClickable) {
			onTarget(event, element, hex, contains, hexListIndex);
		} else {
			clearPath();
		}
	}

	onHexHover(event, element, hex) {
		const { clearPath, contains, isBlocked, isInMovementRange, isSelected, onViableHover, targetedHex } = this.props;
		if ((hex.contains && !targetedHex) || (isInMovementRange && !isBlocked && !isSelected && !targetedHex)) {
			onViableHover(event, element, hex, contains);
		} else if (!targetedHex) {
			clearPath();
		}
	}

	render() {
		const { contains, hex, isBlocked, isClickable, isCpuControlled, isHostile, isInHostileRange, isSelected, isTargeted } = this.props;
		return (
			<Hexagon
				q={hex.q} r={hex.r} s={hex.s}
				onClick={(event, hexElement) => this.onHexClick(event, hexElement, hex)}
				onMouseEnter={(event, hexElement) => this.onHexHover(event, hexElement, hex)}
				className={classNames({
					'hexTile': true,
					'hexTile_blocked': isBlocked,
					'hexTile_cpuControlled': isCpuControlled,
					'hexTile_hostile': isHostile,
					'hexTile_occupied': contains,
					'hexTile_selected': (isSelected || isTargeted),
					'hexTile_inHostileRange': (isInHostileRange && !isBlocked && !isSelected && !isTargeted),
					'hexTile_clickable': isClickable
				})}
			/>
		);
	}
}
