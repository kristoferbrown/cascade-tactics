import React, { Component } from 'react';
import { Hexagon } from 'react-hexgrid';
import classNames from 'classnames';
import './HexTile.scss';

export default class HexTile extends Component {
	shouldComponentUpdate(nextProps) {
		return (this.props.isInRange !== nextProps.isInRange || this.props.isSelected !== nextProps.isSelected);
	}

	onHexClick(event, element, hex) {
		const { contents, isBlocked, isInRange, isSelected, onViableClick } = this.props;
		if (!contents && !isBlocked && !isSelected && isInRange) {
			onViableClick(event, element, hex);
		}
	}

	onHexHover(event, element, hex) {
		const { contents, isBlocked, isInRange, isSelected, onViableHover } = this.props;
		if (!contents && !isBlocked && !isSelected && isInRange) {
			onViableHover(event, element, hex);
		}
	}

	render() {
		const { clearPath, contents, hex, isBlocked, isCpuControlled, isInRange, isSelected } = this.props;
		return (
			<Hexagon 
				q={hex.q} r={hex.r} s={hex.s}
				onClick={(event, hexElement) => this.onHexClick(event, hexElement, hex)}
				onMouseEnter={(event, hexElement) => this.onHexHover(event, hexElement, hex)}
				//onMouseLeave={() => clearPath()}
				className={classNames({
					'hexTile': true,
					'hexTile_blocked': isBlocked,
					'hexTile_cpuControlled': isCpuControlled,
					'hexTile_occupied': contents,
					'hexTile_selected': isSelected,
					'hexTile_inRange': (isInRange && !contents && !isBlocked && !isSelected)
				})}
			/>
		);
	}
}
