import React, { PureComponent } from 'react';
import { Hexagon } from 'react-hexgrid';

import classNames from 'classnames';
import './HexTile.scss';

export default class HexTile extends PureComponent {
	onHexClick(event, element, hex) {
		const { clearPath, contains, hexListIndex, isBlocked, isInRange, isSelected, isTargeted, onTarget } = this.props;
		if (isTargeted) {
			// Already targeted, should there be a default action here?
		} else if (isSelected || (!contains && !isBlocked && isInRange)) {
			// Or target it
			onTarget(event, element, hex, contains, hexListIndex);
		} else if (!isInRange) {
			// Clear targeting
			clearPath();
		}
	}

	onHexHover(event, element, hex) {
		const { clearPath, contains, isBlocked, isInRange, isSelected, onViableHover, targetedHex } = this.props;
		if ((hex.contains && !targetedHex) || (isInRange && !isBlocked && !isSelected && !targetedHex)) {
			onViableHover(event, element, hex, contains);
		} else if (!targetedHex) {
			clearPath();
		}
	}

	render() {
		const { contains, hex, isBlocked, isCpuControlled, isHostile, isInHostileRange, isInRange, isSelected, isTargeted } = this.props;
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
					'hexTile_inRange': (isInRange && !contains && !isBlocked && !isSelected && !isTargeted)
				})}
			/>
		);
	}
}
