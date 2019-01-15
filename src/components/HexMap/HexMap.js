import React, { Component } from 'react';
import { GridGenerator, HexGrid, HexUtils, Layout, Path } from 'react-hexgrid';
import HexTile from './HexTile/HexTile';
import ObjectLayer from '../ObjectLayer/ObjectLayer';
import './HexMap.scss';

export default class HexMap extends Component {
	constructor(props) {
		super(props);
		const { characters } = this.props;
		this.uncontrolledTurnTimer = null;

		// Generate hex map and layout
		const hexagonList = GridGenerator.orientedRectangle(15,12);
		hexagonList[19].isBlocked = true;
		hexagonList[12].isBlocked = true;
		this.layoutProps = {
			flat: true,
			orientation: {
				b0: 0.6666666666666666,
				b1: 0,
				b2: -0.3333333333333333,
				b3: 0.5773502691896257,
				f0: 1.5,
				f1: 0,
				f2: 0.8660254037844386,
				f3: 1.7320508075688772,
				startAngle: 0,
			},
			origin: { x: -46, y: 5 },
			size: { x: 7, y: 3.5 },
			spacing: 1.03
		};

		// Assign characters to starting positions
		let charactersAssigned = 0;
		let firstSelectedHex = null;
		let mapCharacters = [];
		hexagonList.map( hex => {
			if (characters.length <= charactersAssigned) { return hex; }
			characters.forEach( (character, index) => {
				if (character.startingHex && HexUtils.equals(hex, character.startingHex)) {
					if (!firstSelectedHex && index === 0) {
						firstSelectedHex = hex;
					}
					const pixelLoc = HexUtils.hexToPixel(hex, this.layoutProps);
					mapCharacters.push({
						pixelLoc: pixelLoc,
						...character
					});
					hex.contents = character;
					charactersAssigned++;
				}
			});
			return hex;
		});
		this.state = {
			mapChars: mapCharacters,
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
		const { hexList, mapChars, selectedHex } = this.state;

		let newHexList = [...hexList];
		let newHexClicked = {...hex};
		let newMapChars = [...mapChars];
		let nextCharacter = incrementInit();
		let newSelectedHex = null;
		newHexList = newHexList.map(hex => {
			let newHex = {...hex};
			if (!selectOnly && HexUtils.equals(newHex, selectedHex)) {
				newHex.contents = null; // Clear source hex contents
			} else if (!selectOnly && HexUtils.equals(newHex, newHexClicked)) {
				newHexClicked.contents = selectedHex.contents;
				newHex.contents = selectedHex.contents; // Move contents to target hex
				console.log(element);
				newMapChars.map(char => {
					if (char.meta.charId === selectedHex.contents.meta.charId) {
						const newPixelLoc = HexUtils.hexToPixel(newHex, this.layoutProps);
						char.pixelLoc = newPixelLoc;
					}
					return char;
				});
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
		const { hexList, hoveredHex, mapChars, selectedHex } = this.state;
		return (
			<div className="hexMap">
				<HexGrid className="hexMap_gridSvgElement" width={1900} height={900} viewBox="0 0 100 100">
					<Layout {...this.layoutProps}>

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

						<ObjectLayer characters={mapChars} currChar={currChar} />

					</Layout>
				</HexGrid>
			</div>
		);
	}
}