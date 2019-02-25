import React, { Component } from 'react';
import { Hexagon } from 'react-hexgrid';

import classNames from 'classnames';
import './HexTile.scss';

export default class HexTile extends Component {
	shouldComponentUpdate(nextProps) {
		const {isInRange, isSelected, isTargeted} = this.props;
		return (isInRange !== nextProps.isInRange || isSelected || nextProps.isSelected || !!isTargeted || !!nextProps.isTargeted /*|| !!isHovered || !!nextProps.isHovered ||*/);
	}

	onHexClick(event, element, hex) {
		const { clearPath, contents, isBlocked, isInRange, isSelected, isTargeted, onTarget } = this.props;
		if (isTargeted) {
			// Already targeted, should there be a default action here?
		} else if (!contents && !isBlocked && !isSelected && isInRange) {
			// Or target it
			onTarget(event, element, hex);
		} else if (!isInRange) {
			// Clear targeting
			clearPath();
		}
	}

	onHexHover(event, element, hex) {
		const { clearPath, contents, isBlocked, isInRange, isSelected, onViableHover, targetedHex } = this.props;
		if (!contents && !isBlocked && !isSelected && isInRange && !targetedHex) {
			onViableHover(event, element, hex);
		} else if (!targetedHex) {
			clearPath();
		}
	}

	render() {
		const { contents, hex, isBlocked, isCpuControlled, isHostile, isInRange, isSelected, isTargeted } = this.props;
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
					'hexTile_occupied': contents,
					'hexTile_selected': (isSelected || isTargeted),
					'hexTile_inRange': (isInRange && !contents && !isBlocked && !isSelected && !isTargeted)
				})}
			/>
		);
	}
}
