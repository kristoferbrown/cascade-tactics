import React, { Component } from 'react';
import { GridGenerator, HexGrid, HexUtils, Layout, Path } from 'react-hexgrid';
import HexTile from './HexTile/HexTile';
import './HexMap.scss';

export default class HexMap extends Component {
	constructor(props) {
		super(props);
		const { characters } = this.props;
		this.uncontrolledTurnTimer = null;

		// Generate hex map
		const hexagonList = GridGenerator.orientedRectangle(15,12);
		hexagonList[19].isBlocked = true;
		hexagonList[12].isBlocked = true;

		// Assign characters to starting positions
		let firstSelectedHex = null;
		let charactersAssigned = 0;
		hexagonList.map( hex => {
			if (characters.length <= charactersAssigned) { return hex; }
			characters.forEach( (character, index) => {
				if (character.startingLocation && HexUtils.equals(hex, character.startingLocation)) {
					if (!firstSelectedHex && index === 0) {
						firstSelectedHex = hex; 
					}
					hex.contents = character;
					charactersAssigned++;
				}
			});
			return hex;
		});

		this.state = {
			hexList: hexagonList, // Array of all hexes
			hoveredHex: null, // Coords of last hovered hex
			pathLength: 0, // Length of path from selected hex to target hex
			selectedHex: firstSelectedHex, // Currently active hex
		}
	}

	componentDidUpdate(prevProps) {
		const { currChar } = this.props;
		if (!prevProps.currChar.meta.isCpuControlled && currChar.meta.isCpuControlled) {
			this.uncontrolledTurnTimer = setTimeout(() => {
				this.moveOrSelectNewHex(null, null, this.state.selectedHex, true);
			}, 1000);
		}
	}

	componentWillUnmount() {
		clearTimeout(this.uncontrolledTurnTimer);
	}

	moveOrSelectNewHex = (event, element, hex, selectOnly) => {
		const { incrementInit } = this.props;
		const { hexList, selectedHex } = this.state;

		let newHexList = [...hexList];
		let newHexClicked = {...hex};
		let nextCharacter = incrementInit();
		let newSelectedHex = null;
		newHexList = newHexList.map(hex => {
			let newHex = {...hex};
			if (!selectOnly && HexUtils.equals(newHex, selectedHex)) {
				newHex.contents = null; // Clear source hex contents
			} else if (!selectOnly && HexUtils.equals(newHex, newHexClicked)) {
				newHexClicked.contents = selectedHex.contents;
				newHex.contents = selectedHex.contents; // Move contents to target hex
			} else if (newHex.contents && newHex.contents.meta.charId === nextCharacter.meta.charId) {
				newSelectedHex = newHex; // Find next selected hex
			}
			return newHex;
		});

		this.setState({
			hexList: newHexList,
			hoveredHex: null,
			selectedHex: newSelectedHex
		});
	}

	computePath = (event, element, hex) => {
		const { selectedHex } = this.state;
		this.setState({
			hoveredHex: hex,
			pathLength: HexUtils.distance(selectedHex, hex)
		});
	}

	render() {
		const { currChar } = this.props;
		const { hexList, hoveredHex, selectedHex } = this.state;

		return (
			<div className="hexMap">
				<HexGrid className="hexMap_gridSvgElement" width={1900} height={900} viewBox="0 0 100 100">
					<Layout size={{ x: 7, y: 3.5 }} flat={true} spacing={1.03} origin={{ x: -46, y: 5 }}>

						{ hoveredHex && 
							<g className="hexMap_movePath">
								<Path start={selectedHex} end={hoveredHex} />
							</g>
						}

						{ hexList.map(hex =>
							<HexTile
								clearPath={() => this.setState({hoveredHex: null})}
								contents={hex.contents}
								hex={hex}
								isBlocked={hex.isBlocked}
								isCpuControlled={hex.contents && hex.contents.meta.isCpuControlled}
								isInRange={HexUtils.distance(selectedHex, hex) <= currChar.attributes.agi+1}
								isSelected={HexUtils.equals(hex, selectedHex)}
								key={`hex-${hex.q}-${hex.r}-${hex.s}`}
								onViableClick={this.moveOrSelectNewHex}
								onViableHover={this.computePath}
							/>
						)}

					</Layout>
				</HexGrid>
			</div>
		);
	}
}